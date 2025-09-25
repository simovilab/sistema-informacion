<template>
  <section class="catalog-content">
    <div v-if="loading" class="cc-loading">Cargando catálogo…</div>
    <div v-else-if="error" class="cc-error">{{ error }}</div>
    <div v-else-if="!dataObj" class="cc-empty">No hay datos.</div>
    <div v-else>
      <!-- Metadata -->
      <header class="cc-header" v-if="dataObj.metadata">
        <h1 class="cc-title">{{ dataObj.metadata.title }}</h1>
        <table class="cc-meta">
          <tbody>
            <tr v-if="dataObj.metadata.version">
              <th>Versión</th>
              <td>{{ dataObj.metadata.version }}</td>
            </tr>
            <tr v-if="dataObj.metadata.date">
              <th>Fecha</th>
              <td>{{ dataObj.metadata.date }}</td>
            </tr>
            <tr v-if="dataObj.metadata.description">
              <th>Descripción</th>
              <td>{{ dataObj.metadata.description }}</td>
            </tr>
            <tr v-if="dataObj.metadata.author">
              <th>Autores</th>
              <td>
                <template v-if="Array.isArray(dataObj.metadata.author)">
                  {{ dataObj.metadata.author.join(", ") }}
                </template>
                <template v-else>{{ dataObj.metadata.author }}</template>
              </td>
            </tr>
            <tr v-if="dataObj.metadata.organization">
              <th>Organización</th>
              <td>{{ dataObj.metadata.organization }}</td>
            </tr>
            <tr v-if="dataObj.metadata.contact">
              <th>Contacto</th>
              <td>{{ dataObj.metadata.contact }}</td>
            </tr>
            <tr v-if="dataObj.metadata.license">
              <th>Licencia</th>
              <td>{{ dataObj.metadata.license }}</td>
            </tr>
          </tbody>
        </table>
      </header>

      <!-- Sections (all keys except metadata) -->
      <section v-for="sectionKey in sectionKeys" :key="sectionKey" class="cc-section">
        <h2 class="cc-section-title">{{ prettifyKey(sectionKey) }}</h2>

        <!-- Array section -->
        <template v-if="Array.isArray(dataObj[sectionKey])">
          <article v-for="(item, idx) in dataObj[sectionKey]" :key="idx" class="cc-item">
            <h3 class="cc-item-title">{{ item.name || item.id || prettifyKey(sectionKey) + " " + (idx + 1) }}</h3>
            <dl class="cc-dl">
              <template v-for="(val, key) in item" :key="key">
                <template v-if="String(key) !== 'name'">
                  <dt>{{ prettifyKey(key) }}</dt>
                  <dd>
                    <template v-if="isPrimitive(val)">
                      {{ val }}
                    </template>
                    <template v-else-if="Array.isArray(val)">
                      <template v-if="val.length === 0">—</template>
                      <template v-else-if="isPrimitive(val[0])">
                        {{ val.join(", ") }}
                      </template>
                      <template v-else>
                        <ul class="cc-list">
                          <li v-for="(sub, j) in val" :key="j">
                            <strong>{{ sub.name || sub.id || j + 1 }}</strong>
                            <dl class="cc-dl cc-dl-nested">
                              <template v-for="(sv, sk) in sub" :key="sk">
                                <dt>{{ prettifyKey(sk) }}</dt>
                                <dd>{{ formatValue(sv) }}</dd>
                              </template>
                            </dl>
                          </li>
                        </ul>
                      </template>
                    </template>
                    <template v-else>
                      <dl class="cc-dl cc-dl-nested">
                        <template v-for="(ov, ok) in val" :key="ok">
                          <dt>{{ prettifyKey(ok) }}</dt>
                          <dd>{{ formatValue(ov) }}</dd>
                        </template>
                      </dl>
                    </template>
                  </dd>
                </template>
              </template>
            </dl>
          </article>
        </template>

        <!-- Object section -->
        <template v-else-if="isObject(dataObj[sectionKey])">
          <dl class="cc-dl">
            <template v-for="(val, key) in dataObj[sectionKey]" :key="key">
              <dt>{{ prettifyKey(key) }}</dt>
              <dd>{{ formatValue(val) }}</dd>
            </template>
          </dl>
        </template>

        <!-- Primitive section -->
        <template v-else>
          <p>{{ formatValue(dataObj[sectionKey]) }}</p>
        </template>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue"

const props = defineProps<{ catalog: string }>()

const loading = ref(true)
const error = ref<string | null>(null)
const dataObj = ref<any>(null)

// Map catalog keys to YAML filenames (without extension)
const catalogFileMap: Record<string, string> = {
  // Data catalogs
  data: "data-entity-component",
  "data-entity-component": "data-entity-component",
  // Business/Applications/Technology catalogs
  principles: "principles",
  applications: "application-portfolio",
  stakeholders: "stakeholder",
  requirements: "requirements",
  technology: "technology-portfolio",
  standards: "technology-standards",
  interfaces: "interface",
  actors: "organization-actor",
}

const targetFile = computed(() => catalogFileMap[props.catalog] ?? props.catalog)

onMounted(async () => {
  try {
    // Load YAML text from theme data folder
    const url = new URL(`../data/${targetFile.value}.yaml`, import.meta.url)
    const yamlText = await fetch(url).then(r => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`)
      return r.text()
    })
    // Parse YAML
    const { load } = await import("js-yaml")
    dataObj.value = load(yamlText)
  } catch (e: any) {
    error.value = `Error cargando catálogo "${props.catalog}": ${e?.message || e}`
  } finally {
    loading.value = false
  }
})

const sectionKeys = computed(() => {
  if (!dataObj.value || typeof dataObj.value !== "object") return []
  return Object.keys(dataObj.value).filter(k => k !== "metadata")
})

const isObject = (v: any) => v && typeof v === "object" && !Array.isArray(v)
const isPrimitive = (v: any) => v === null || ["string", "number", "boolean"].includes(typeof v)

const prettifyKey = (k: unknown) => {
  const s = String(k)
  return s.replace(/[_-]/g, " ").replace(/\b\w/g, c => c.toUpperCase())
}

const formatValue = (v: any): string => {
  if (isPrimitive(v)) return String(v)
  if (Array.isArray(v)) {
    if (v.length === 0) return "—"
    if (isPrimitive(v[0])) return v.join(", ")
    // Array of objects – show compact JSON
    return v.map(x => x.name || x.id || JSON.stringify(x)).join("; ")
  }
  // Object – compact JSON for now
  try {
    return JSON.stringify(v)
  } catch {
    return String(v)
  }
}
</script>

<style scoped>
.catalog-content {
  margin: 0.5rem 0;
}
.cc-loading,
.cc-error,
.cc-empty {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}
.cc-error {
  color: var(--vp-c-danger-1);
}

.cc-header {
  margin-bottom: 1rem;
}
.cc-title {
  margin: 0.25rem 0 0.5rem;
  font-size: 1.8rem;
  line-height: 1.2;
}

.cc-meta {
  width: 100%;
  border-collapse: collapse;
  margin: 0.5rem 0 1rem;
}
.cc-meta th,
.cc-meta td {
  text-align: left;
  padding: 0.25rem 0.5rem;
}
.cc-meta th {
  width: 10rem;
  color: var(--vp-c-text-2);
  font-weight: 600;
}
.cc-meta tr {
  border-bottom: 1px solid var(--vp-c-divider);
}

.cc-section {
  margin: 1.25rem 0;
}
.cc-section-title {
  font-size: 1.4rem;
  margin: 0.75rem 0;
}
.cc-item {
  margin: 0.75rem 0 1rem;
}
.cc-item-title {
  font-size: 1.1rem;
  margin: 0.25rem 0 0.5rem;
}

.cc-dl {
  display: grid;
  grid-template-columns: minmax(10rem, 20rem) 1fr;
  gap: 0.25rem 0.75rem;
}
.cc-dl dt {
  color: var(--vp-c-text-2);
  font-weight: 600;
}
.cc-dl dd {
  margin: 0;
}
.cc-dl-nested {
  grid-template-columns: minmax(8rem, 16rem) 1fr;
  margin: 0.25rem 0;
}

.cc-list {
  margin: 0.25rem 0 0.5rem 1.25rem;
}
</style>
