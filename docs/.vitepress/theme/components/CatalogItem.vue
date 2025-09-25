<template>
  <span class="catalog-reference">
    <a :href="catalogUrl" class="catalog-link">
      <span class="catalog-badge" :style="badgeStyle">{{ catalogId }}</span>
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

// Map catalog names to Spanish URL slugs and a badge color
const catalogMeta: Record<string, { slug: string; color: string }> = {
  principles: { slug: "principios", color: "#F0F9EB" },
  stakeholders: { slug: "partes-interesadas", color: "#E6F4FF" },
  actors: { slug: "actores-y-organizaciones", color: "#F9F0FF" },
  applications: { slug: "aplicaciones", color: "#FFF0F6" },
  requirements: { slug: "requisitos", color: "#FFF7E6" },
  data: { slug: "datos", color: "#E6FFFB" },
  technology: { slug: "tecnologias", color: "#F5F5F5" },
  standards: { slug: "estandares", color: "#FFFBE6" },
  interfaces: { slug: "interfaces", color: "#F0F5FF" },
}

const catalogId = computed(() => `${props.catalog}:${props.item.padStart(3, "0")}`)

const meta = computed(() => catalogMeta[props.catalog] || { slug: props.catalog, color: "var(--vp-c-default-soft)" })

// Map catalog prop -> YAML filename (without extension)
const catalogFileMap: Record<string, string> = {
  principles: "principles",
  stakeholders: "stakeholder",
  actors: "organization-actor",
  applications: "application-portfolio",
  requirements: "requirements",
  data: "data-entity-component",
  technology: "technology-portfolio",
  standards: "technology-standards",
  interfaces: "interface",
}

const targetFile = computed(() => catalogFileMap[props.catalog] ?? props.catalog)

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
  return `${base}catalogos/${meta.value.slug}#${anchor}`
})

const badgeStyle = computed(() => ({ "--catalog-badge-bg": meta.value.color }))

onMounted(async () => {
  try {
    const yamlText = await fetch(new URL(`../data/${targetFile.value}.yaml`, import.meta.url)).then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      return r.text()
    })
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
.catalog-reference {
  display: inline;
  vertical-align: baseline;
}
.catalog-badge {
  display: inline;
  padding: 0.0625rem 0.25rem;
  background: var(--catalog-badge-bg, var(--vp-c-default-soft));
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.75rem;
  font-size: 0.6875rem;
  font-family: var(--vp-font-family-mono);
  color: var(--vp-c-text-2);
  white-space: nowrap;
  line-height: 1;
  vertical-align: middle;
  margin-right: 0.25rem;
}
.catalog-link {
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: color 0.2s ease;
  line-height: inherit;
  vertical-align: baseline;
}
.catalog-link:hover {
  color: var(--vp-c-brand-1);
}
.catalog-reference {
  margin: 0 0.125rem;
}
</style>
