<template>
  <section class="glossary">
    <dl>
      <template v-for="entry in sortedGlossary" :key="entry.term">
        <dt>{{ entry.term }}</dt>
        <dd>
          <i>{{ entry.definition }}</i> <br />
          <span v-if="entry.translation">({{ entry.translation }})</span>
          <br />
          {{ entry.description }}
        </dd>
      </template>
    </dl>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as yaml from "js-yaml";

interface GlossaryEntry {
  term: string;
  definition: string;
  translation: string;
  description: string;
}

const sortedGlossary = ref<GlossaryEntry[]>([]);

onMounted(async () => {
  try {
    // Load YAML file as text
    const yamlText = await fetch(
      new URL("../data/glossary.yaml", import.meta.url)
    ).then((r) => r.text());

    // Parse YAML
    const rawGlossary = yaml.load(yamlText) as GlossaryEntry[];

    // Remove repeated terms and sort alphabetically
    const uniqueEntries = rawGlossary.filter(
      (entry, idx, arr) => arr.findIndex((e) => e.term === entry.term) === idx
    );

    sortedGlossary.value = uniqueEntries.sort((a, b) =>
      a.term.localeCompare(b.term, "es")
    );
  } catch (error) {
    console.error("Error loading glossary:", error);
  }
});
</script>

<style scoped>
.glossary dl {
  margin: 0;
}
.glossary dt {
  font-weight: bold;
  margin-top: 1em;
}
.glossary dd {
  margin-left: 1em;
  margin-bottom: 0.5em;
}
.glossary dd strong {
  color: #2c3e50;
}
</style>
