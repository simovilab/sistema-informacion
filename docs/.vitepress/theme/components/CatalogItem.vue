<template>
  <span class="catalog-reference">
    <a :href="catalogUrl" class="catalog-link">
      <span class="catalog-badge" :style="badgeStyle">
        <span v-if="iconName" class="catalog-icon">{{ iconName }}</span>
        {{ catalogId }}
      </span>
      <i>{{ itemName }}</i>
    </a>
  </span>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import { useData } from "vitepress"

interface CatalogItemRec {
  id: string
  name: string
  [key: string]: any
}

interface CatalogData {
  [key: string]: CatalogItemRec[]
}

const props = defineProps({
  catalog: { type: String, required: true },
  item: { type: String, required: true },
})

const itemName = ref("")
const itemId = ref("")

// Get VitePress site config
const { site } = useData()

// Function to create a slug from text (similar to how Markdown generates anchors)
const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

// Map catalog names to Spanish URL slugs (colors/icons are configured in format.json)
const slugMap: Record<string, string> = {
  principles: "principios",
  stakeholders: "partes-interesadas",
  actors: "actores",
  organizations: "organizaciones",
  applications: "aplicaciones",
  requirements: "requisitos",
  // data is represented by entities/components; default to entidades-datos for linking
  data: "entidades-datos",
  technology: "tecnologias",
  standards: "estandares",
  interfaces: "interfaces",
}

const catalogId = computed(() => `${props.catalog}:${props.item.padStart(3, "0")}`)

const metaSlug = computed(() => slugMap[props.catalog] || props.catalog)

// Map catalog prop -> YAML filename (without extension)
const catalogFileMap: Record<string, string> = {
  principles: "principles",
  stakeholders: "stakeholders",
  actors: "actors",
  organizations: "organizations",
  applications: "applications",
  requirements: "requirements",
  // data is represented by entities/components; default to entities for linking
  data: "entities",
  technology: "technologies",
  standards: "standards",
  interfaces: "interfaces",
}

const targetFile = computed(() => catalogFileMap[props.catalog] ?? props.catalog)

// Resolve locale folder for YAML data based on site language
const localeFolder = computed(() => {
  const lang = (site.value?.lang || "en").toLowerCase()
  return lang.startsWith("es") ? "es" : "en"
})

// Anchor derived from the found item's id (matches pre-generated pages)
const anchorFromId = (id: string) =>
  id
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")

const catalogUrl = computed(() => {
  const base = site.value.base || "/"
  const anchor = itemId.value ? anchorFromId(itemId.value) : createSlug(itemName.value || catalogId.value)
  return `${base}catalogos/${metaSlug.value}#${anchor}`
})

// Icon and color loaded from shared format.json
const iconName = ref("")
const badgeColor = ref("var(--vp-c-default-soft)")
const badgeStyle = computed(() => ({ "--catalog-badge-bg": badgeColor.value }))

onMounted(async () => {
  try {
    // Load formatting (icons/colors) from shared JSON
    try {
      const formatJson = await fetch(new URL(`../data/catalogs/format.json`, import.meta.url)).then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      // Prefer the explicit catalog key; fallback to the underlying file key (e.g., entities)
      const fmtKey = (formatJson[props.catalog] ? props.catalog : targetFile.value) as string
      const fmt = (formatJson && (formatJson as any)[fmtKey]) || null
      if (fmt) {
        if (fmt.icon) iconName.value = String(fmt.icon)
        if (fmt.color) badgeColor.value = String(fmt.color)
      }
    } catch (e) {
      // Formatting is optional; ignore errors
      console.warn("format.json not available or invalid:", (e as any)?.message || e)
    }

    const loadYaml = async (loc: string) => {
      const url = new URL(`../data/catalogs/${loc}/${targetFile.value}.yaml`, import.meta.url)
      const r = await fetch(url)
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      return r.text()
    }
    let yamlText: string
    try {
      yamlText = await loadYaml(localeFolder.value)
    } catch (e) {
      if (localeFolder.value !== "en") {
        try {
          yamlText = await loadYaml("en")
        } catch (e2) {
          throw e2
        }
      } else {
        throw e
      }
    }
    const { load } = await import("js-yaml")
    const data = load(yamlText) as any

    // Collect candidate arrays of objects
    const candidates: CatalogItemRec[] = []
    const tryAdd = (arr: any) => {
      if (Array.isArray(arr) && arr.length && typeof arr[0] === "object") {
        for (const it of arr) candidates.push(it as CatalogItemRec)
      }
    }
    for (const v of Object.values(data || {})) tryAdd(v)

    // Prefer exact id match; fallback to suffix (e.g., :001)
    const suffix = `:${props.item.padStart(3, "0")}`
    const found =
      candidates.find(it => it.id === catalogId.value) || candidates.find(it => String(it.id).endsWith(suffix))

    if (found) {
      itemName.value = found.name || String(found.id)
      itemId.value = String(found.id)
    } else {
      itemName.value = `Item ${catalogId.value} not found`
      itemId.value = catalogId.value
      console.warn(`Catalog item ${catalogId.value} not found in ${targetFile.value}.yaml`)
    }
  } catch (error) {
    itemName.value = `Error loading catalog`
    itemId.value = catalogId.value
    console.error(`Error loading catalog ${props.catalog}:`, error)
  }
})
</script>

<style scoped>
/* Component currently relies on global catalog-* styles defined in custom.css */
</style>
