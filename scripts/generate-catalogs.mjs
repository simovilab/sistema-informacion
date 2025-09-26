#!/usr/bin/env node
/**
 * Pre-generate Markdown pages for catalogs from YAML sources.
 *
 * Inputs (read-only): docs/.vitepress/theme/data/catalogs/<locale>/*.yaml
 * Outputs: docs/catalogos/<slug>.md
 *
 * Locale selection for labels:
 * - If env CATALOG_I18N_LOCALE is set, use that (e.g., 'es', 'en', 'pt').
 * - Else, parse docs/.vitepress/config.mts and use defineConfig({ lang }).
 * - Else, default to 'en'.
 *
 * Overwrite policy:
 * - If the output file does not exist, create it.
 * - If it exists and contains the marker `AUTO-GENERATED FILE - DO NOT EDIT`, overwrite it.
 * - If it exists and looks like a simple <Catalog .../> stub, overwrite it.
 * - Otherwise, skip and print a note.
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { load as yamlLoad } from "js-yaml"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ROOT = path.resolve(__dirname, "..")
// Source YAMLs live under catalogs/<locale>.
const CATALOGS_DIR = path.join(ROOT, "docs/.vitepress/theme/data/catalogs")

// Attempt to read the site language from VitePress config (docs/.vitepress/config.mts)
const CONFIG_PATH = path.join(ROOT, "docs/.vitepress/config.mts")
let SITE_LANG = null
try {
  if (fs.existsSync(CONFIG_PATH)) {
    const cfg = fs.readFileSync(CONFIG_PATH, "utf-8")
    const m = cfg.match(/\blang\s*:\s*["']([a-zA-Z-]+)["']/)
    if (m && m[1]) SITE_LANG = m[1].trim()
  }
} catch {
  // ignore parsing issues; we'll fall back to 'en'
}

// Determine source locale: env override -> site language (if folder exists) -> 'en'
let SRC_LOCALE = process.env.CATALOG_SRC_LOCALE || null
if (!SRC_LOCALE) {
  const candidate = SITE_LANG || ""
  if (candidate && fs.existsSync(path.join(CATALOGS_DIR, candidate))) {
    SRC_LOCALE = candidate
  } else {
    SRC_LOCALE = "en"
  }
}

const DATA_DIR = path.join(CATALOGS_DIR, SRC_LOCALE)
// i18n key maps live under catalogs/i18n
const I18N_DIR = path.join(CATALOGS_DIR, "i18n")
const OUT_DIR = path.join(ROOT, "docs/catalogos")

// Optional formatting configuration for catalogs (colors/icons)
let FORMAT = {}
try {
  const fmtPath = path.join(CATALOGS_DIR, "format.json")
  if (fs.existsSync(fmtPath)) {
    FORMAT = JSON.parse(fs.readFileSync(fmtPath, "utf-8"))
  }
} catch (e) {
  console.warn("Warning: unable to read format.json:", e?.message || e)
}

// Map single YAML basenames -> Spanish slugs (folder/file names under docs/catalogos)
// Basenames correspond to files in docs/.vitepress/theme/data/catalogs/en/*.yaml
const fileToSlug = {
  principles: "principios",
  stakeholders: "partes-interesadas",
  actors: "actores",
  organizations: "organizaciones",
  applications: "aplicaciones",
  requirements: "requisitos",
  entities: "entidades-datos",
  components: "componentes-datos",
  technologies: "tecnologias",
  standards: "estandares",
  interfaces: "interfaces",
}

// Some output pages are composed by merging multiple source files
// key -> { slug, sources: [basenames...] }
const groupedSources = {}

// Optional: Display names for the H1 title (Spanish)
const slugDisplayName = {
  principios: "Principios",
  "partes-interesadas": "Partes interesadas",
  actores: "Actores",
  organizaciones: "Organizaciones",
  aplicaciones: "Aplicaciones",
  requisitos: "Requisitos",
  "entidades-datos": "Entidades de datos",
  "componentes-datos": "Componentes de datos",
  tecnologias: "Tecnologías",
  estandares: "Estándares",
  interfaces: "Interfaces",
}

// Translate known section keys to Spanish for nicer headings
const sectionLabel = {
  metadata: "Metadatos",
  principles: "Principios",
  stakeholders: "Partes interesadas",
  applications: "Aplicaciones",
  requirements: "Requisitos",
  entities: "Entidades de datos",
  components: "Componentes de datos",
  technologies: "Tecnologías",
  standards: "Estándares",
  organizations: "Organizaciones",
  interfaces: "Interfaces",
  actors: "Actores",
}

const MARKER = "<!-- AUTO-GENERATED FILE - DO NOT EDIT. See scripts/generate-catalogs.mjs -->"

function prettifyKey(key) {
  if (!key) return ""
  if (sectionLabel[key]) return sectionLabel[key]
  return String(key)
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, m => m.toUpperCase())
}

function createSlug(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

function formatValue(v) {
  if (v === null || v === undefined) return "—"
  const t = typeof v
  if (t === "string" || t === "number" || t === "boolean") return String(v)
  if (Array.isArray(v)) {
    if (v.length === 0) return "—"
    if (typeof v[0] !== "object") return v.map(x => String(x)).join(", ")
    // Array of objects – compact JSON per entry
    return v.map(x => x.name || x.id || JSON.stringify(x)).join("; ")
  }
  try {
    return "```json\n" + JSON.stringify(v, null, 2) + "\n```"
  } catch {
    return String(v)
  }
}

function renderMetadata(md) {
  if (!md || typeof md !== "object") return ""
  const rows = []
  const push = (label, value) => {
    if (value === undefined || value === null || value === "") return
    if (Array.isArray(value)) rows.push(`| ${label} | ${value.join(", ")} |`)
    else rows.push(`| ${label} | ${value} |`)
  }
  push("Versión", md.version)
  push("Fecha", md.date)
  push("Descripción", md.description)
  push("Autores", md.author)
  push("Organización", md.organization)
  push("Contacto", md.contact)
  push("Licencia", md.license)
  if (!rows.length) return ""
  return ["### Metadatos", "", "| Campo | Valor |", "| --- | --- |", ...rows, ""].join("\n")
}

function renderItem(sectionKey, item, index, labelForKey) {
  const title = item?.name || item?.id || `${labelForKey(sectionKey)} ${index + 1}`
  // Stable anchor based on the item id (e.g., principles:001 -> #principles-001)
  const anchorId = item?.id
    ? String(item.id)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
    : null
  let out = `\n${anchorId ? `<a id="${anchorId}"></a>\n` : ""}## ${title}\n\n`
  // Render id as a styled badge with optional icon using FORMAT config
  if (item?.id) {
    // Determine catalog key from the id prefix before ':' (e.g., 'actors:001')
    const rawPrefix = String(item.id).split(":")[0]
    const irregulars = {
      actor: "actors",
      organization: "organizations",
      application: "applications",
      principle: "principles",
      requirement: "requirements",
      entity: "entities",
      component: "components",
      standard: "standards",
      technology: "technologies",
      interface: "interfaces",
      stakeholder: "stakeholders",
    }
    const prefix = irregulars[rawPrefix] || (rawPrefix.endsWith("s") ? rawPrefix : `${rawPrefix}s`)
    let fmt = FORMAT[prefix] || null
    // Fallback: use section key formatting if prefix wasn't found (handles legacy ids like 'data-component')
    if (!fmt && sectionKey && FORMAT[sectionKey]) fmt = FORMAT[sectionKey]
    const color = fmt?.color || "var(--vp-c-default-soft)"
    const icon = fmt?.icon || ""
    const iconSpan = icon ? `<span class="catalog-icon material-symbols-outlined">${icon}</span>` : ""
    out += `<span class="catalog-badge" style="--catalog-badge-bg:${color}">${iconSpan}<code style="background:none;padding:0;margin:0;border:0;">${item.id}</code></span>\n\n`
  }
  // Render remaining fields (excluding 'name')
  const keys = Object.keys(item || {})
  for (const k of keys) {
    if (k === "name") continue
    if (k === "id") continue
    const v = item[k]
    const label = labelForKey(k)
    const rendered = formatValue(v)
    if (rendered.startsWith("```json")) {
      out += `- ${label}:\n\n${rendered}\n\n`
    } else {
      out += `- ${label}: ${rendered}\n`
    }
  }
  return out
}

function renderSection(key, value, labelForKey) {
  const title = sectionLabel[key] ? sectionLabel[key] : labelForKey(key)
  let out = ""
  // For array sections (the main catalog content), omit the section title and render each item as H2
  if (Array.isArray(value)) {
    value.forEach((item, i) => {
      out += renderItem(key, item, i, labelForKey)
    })
    return out
  }
  const t = typeof value
  if (t === "string" || t === "number" || t === "boolean") {
    return `\n## ${title}\n\n` + String(value) + "\n\n"
  }
  if (value && t === "object") {
    out += `\n## ${title}\n\n`
    out += "\n"
    for (const [k, v] of Object.entries(value)) {
      const rendered = formatValue(v)
      if (rendered.startsWith("```json")) {
        out += `- ${labelForKey(k)}:\n\n${rendered}\n\n`
      } else {
        out += `- ${labelForKey(k)}: ${rendered}\n`
      }
    }
    out += "\n"
    return out
  }
  return out + "—\n\n"
}

function looksLikeStub(content) {
  if (!content) return false
  const trimmed = content.trim()
  if (trimmed.length > 300) return false
  return /<\s*Catalog\b|<\s*CatalogContent\b|<\s*CatalogItem\b/.test(trimmed)
}

// Load i18n key mapping if present: returns two maps per basename
// canonical->localized and localized->canonical per locale.
function loadI18nMaps(basename) {
  const file = path.join(I18N_DIR, `${basename}.i18n.json`)
  if (!fs.existsSync(file)) return null
  try {
    const arr = JSON.parse(fs.readFileSync(file, "utf-8"))
    const locales = new Set()
    for (const it of arr) for (const loc of Object.keys(it.translations || {})) locales.add(loc)
    const maps = {}
    for (const loc of locales) {
      const forward = {} // canonical -> localized
      const reverse = {} // localized -> canonical
      for (const it of arr) {
        const can = it.key
        const locVal = it.translations?.[loc]
        if (can && locVal) {
          forward[can] = locVal
          reverse[locVal] = can
        }
      }
      maps[loc] = { forward, reverse }
    }
    return maps
  } catch (e) {
    console.warn(`Warning: failed to read i18n for ${basename}:`, e?.message || e)
    return null
  }
}

// Normalize object keys from a given locale to canonical keys using reverse map
function normalizeKeys(obj, reverseMap) {
  if (!obj || typeof obj !== "object") return obj
  if (Array.isArray(obj)) return obj.map(v => normalizeKeys(v, reverseMap))
  const out = {}
  for (const [k, v] of Object.entries(obj)) {
    const nk = reverseMap?.[k] || k
    out[nk] = normalizeKeys(v, reverseMap)
  }
  return out
}

function capitalizeFirstUnicode(s, locale = "es") {
  if (!s) return s
  const first = s[0].toLocaleUpperCase(locale)
  return first + s.slice(1)
}

async function generateOneFromFile(basename, slugOverride = null) {
  const slug = slugOverride || fileToSlug[basename]
  if (!slug) return { basename, skipped: true, reason: "no-slug" }
  const inFile = path.join(DATA_DIR, `${basename}.yaml`)
  const outFile = path.join(OUT_DIR, `${slug}.md`)

  const src = fs.readFileSync(inFile, "utf-8")
  let data = yamlLoad(src)
  if (!data || typeof data !== "object") {
    return { basename, slug, skipped: true, reason: "empty-data" }
  }

  // If there is an i18n file and metadata.language is set (or an env var), normalize keys.
  const i18n = loadI18nMaps(basename)
  const desiredLocale = (process.env.CATALOG_I18N_LOCALE || SITE_LANG || "en").trim()
  if (i18n && desiredLocale && i18n[desiredLocale]) {
    data = normalizeKeys(data, i18n[desiredLocale].reverse)
  }

  const title = slugDisplayName[slug] || data?.metadata?.title || prettifyKey(slug)

  let md = ""
  md += `${MARKER}\n\n`
  md += `# ${title}\n\n`

  // Metadata table
  if (data.metadata) {
    md += renderMetadata(data.metadata)
    md += "\n"
  }

  // Render all other sections deterministically (alphabetical keys except metadata first)
  const keys = Object.keys(data).filter(k => k !== "metadata")
  keys.sort()
  const forward = i18n && desiredLocale && i18n[desiredLocale] ? i18n[desiredLocale].forward : null
  const labelForKey = k => {
    const s = String(k)
    const raw = forward?.[s] || s
    const spaced = raw.replace(/[_-]/g, " ")
    return capitalizeFirstUnicode(spaced, desiredLocale || "es")
  }
  for (const k of keys) {
    md += renderSection(k, data[k], labelForKey)
  }

  // Ensure out dir
  fs.mkdirSync(OUT_DIR, { recursive: true })

  if (fs.existsSync(outFile)) {
    const existing = fs.readFileSync(outFile, "utf-8")
    const canOverwrite =
      existing.includes("AUTO-GENERATED FILE - DO NOT EDIT") || looksLikeStub(existing) || existing.trim().length === 0
    if (!canOverwrite) {
      return { basename, slug, skipped: true, reason: "exists-manual" }
    }
  }

  fs.writeFileSync(outFile, md, "utf-8")
  return { basename, slug, skipped: false }
}

async function generateGrouped(groupKey, sources) {
  const slug = groupKey
  const outFile = path.join(OUT_DIR, `${slug}.md`)

  // Merge metadata from the first source; keep sections from all
  let merged = { metadata: {} }
  const i18nMaps = {}
  const desiredLocale = (process.env.CATALOG_I18N_LOCALE || SITE_LANG || "en").trim()

  for (const base of sources) {
    const srcPath = path.join(DATA_DIR, `${base}.yaml`)
    if (!fs.existsSync(srcPath)) return { basename: base, slug, skipped: true, reason: "missing-source" }
    const src = fs.readFileSync(srcPath, "utf-8")
    let data = yamlLoad(src)
    if (!data || typeof data !== "object") continue
    if (!merged.metadata || Object.keys(merged.metadata).length === 0) merged.metadata = data.metadata || {}
    const i18n = loadI18nMaps(base)
    i18nMaps[base] = i18n
    if (i18n && desiredLocale && i18n[desiredLocale]) {
      data = normalizeKeys(data, i18n[desiredLocale].reverse)
    }
    for (const [k, v] of Object.entries(data)) {
      if (k === "metadata") continue
      merged[k] = v
    }
  }

  const title = slugDisplayName[slug] || merged?.metadata?.title || prettifyKey(slug)
  let md = ""
  md += `${MARKER}\n\n`
  md += `# ${title}\n\n`
  if (merged.metadata) {
    md += renderMetadata(merged.metadata)
    md += "\n"
  }
  // Build a combined forward map for labels, preferring the first source that defines a key
  const combinedForward = {}
  for (const base of sources) {
    const i18n = i18nMaps[base]
    const fwd = i18n && desiredLocale && i18n[desiredLocale] ? i18n[desiredLocale].forward : null
    if (!fwd) continue
    for (const [k, v] of Object.entries(fwd)) if (!(k in combinedForward)) combinedForward[k] = v
  }
  const labelForKey = k => {
    const s = String(k)
    const raw = combinedForward?.[s] || s
    const spaced = raw.replace(/[_-]/g, " ")
    return capitalizeFirstUnicode(spaced, desiredLocale || "es")
  }
  const keys = Object.keys(merged)
    .filter(k => k !== "metadata")
    .sort()
  for (const k of keys) {
    md += renderSection(k, merged[k], labelForKey)
  }

  fs.mkdirSync(OUT_DIR, { recursive: true })
  if (fs.existsSync(outFile)) {
    const existing = fs.readFileSync(outFile, "utf-8")
    const canOverwrite =
      existing.includes("AUTO-GENERATED FILE - DO NOT EDIT") || looksLikeStub(existing) || existing.trim().length === 0
    if (!canOverwrite) return { basename: slug, slug, skipped: true, reason: "exists-manual" }
  }
  fs.writeFileSync(outFile, md, "utf-8")
  return { basename: slug, slug, skipped: false }
}

async function main() {
  const entries = fs.readdirSync(DATA_DIR)
  const basenames = entries.filter(f => f.endsWith(".yaml")).map(f => path.basename(f, ".yaml"))

  const targets = basenames.filter(b => fileToSlug[b])
  const results = []
  for (const b of targets) {
    try {
      results.push(await generateOneFromFile(b))
    } catch (e) {
      results.push({ basename: b, skipped: true, reason: "error", error: e?.message || String(e) })
    }
  }
  // Generate grouped pages
  for (const [groupKey, cfg] of Object.entries(groupedSources)) {
    try {
      results.push(await generateGrouped(cfg.slug, cfg.sources))
    } catch (e) {
      results.push({ basename: groupKey, skipped: true, reason: "error", error: e?.message || String(e) })
    }
  }

  const created = results.filter(r => !r.skipped)
  const skipped = results.filter(r => r.skipped)
  console.log(`Catalog generation complete. Created ${created.length}, skipped ${skipped.length}.`)
  if (skipped.length) {
    for (const s of skipped) {
      console.log(
        `- Skipped ${s.basename}${s.slug ? ` -> ${s.slug}` : ""}: ${s.reason}${s.error ? ` (${s.error})` : ""}`
      )
    }
  }
}

main().catch(err => {
  console.error("Generator failed:", err)
  process.exit(1)
})
