<template>
  <span class="catalog-reference">
    <a :href="catalogUrl" class="catalog-link">
      <span class="catalog-badge">{{ catalogId }}</span>
      <i>{{ itemName }}</i>
    </a>
  </span>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue"
import { useData } from "vitepress"

interface CatalogItem {
  id: string
  name: string
  [key: string]: any
}

interface CatalogData {
  [key: string]: CatalogItem[]
}

const props = defineProps({
  catalog: { type: String, required: true },
  item: { type: String, required: true },
})

const catalogData = ref<CatalogData>({})
const itemName = ref("")

// Get VitePress site config
const { site } = useData()

// Function to create a slug from text (similar to how Markdown generates anchors)
const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize("NFD") // Decompose accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritical marks
    .replace(/[^\w\s-]/g, "") // Remove special characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim()
}

// Map catalog names to Spanish URLs
const catalogUrlMap: Record<string, string> = {
  principles: "principios",
  applications: "aplicaciones",
  "technology-portfolio": "portafolio-tecnologias",
  stakeholders: "actores",
  requirements: "requisitos",
  // Add more catalog mappings as needed
}

const catalogId = computed(() => `${props.catalog}:${props.item.padStart(3, "0")}`)

const catalogUrl = computed(() => {
  const spanishName = catalogUrlMap[props.catalog] || props.catalog
  const base = site.value.base || "/"
  const anchor = itemName.value ? createSlug(itemName.value) : catalogId.value.toLowerCase()
  return `${base}catalogos/${spanishName}#${anchor}`
})

onMounted(async () => {
  try {
    // Load YAML file as text and parse it
    const yamlText = await fetch(new URL(`../data/${props.catalog}.yaml`, import.meta.url)).then(r => r.text())

    // Parse YAML using js-yaml
    const { load } = await import("js-yaml")
    const data = load(yamlText) as any

    // Find the specific item
    const items = data.principles || data.applications || data.stakeholders || data.requirements || []
    const item = items.find(
      (item: CatalogItem) => item.id === catalogId.value || item.id.endsWith(`:${props.item.padStart(3, "0")}`)
    )

    if (item) {
      itemName.value = item.name
    } else {
      itemName.value = `Item ${catalogId.value} not found`
      console.warn(`Catalog item ${catalogId.value} not found`)
    }
  } catch (error) {
    itemName.value = `Error loading catalog`
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
  background: var(--vp-c-default-soft);
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

/* Ensure it works well inline with text */
.catalog-reference {
  margin: 0 0.125rem;
}
</style>
