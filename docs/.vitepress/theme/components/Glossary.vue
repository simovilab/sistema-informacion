<template>
  <section class="glossary">
    <dl>
      <template v-for="(definition, term) in sortedGlossary" :key="term">
        <dt>{{ term }}</dt>
        <dd>{{ definition }}</dd>
      </template>
    </dl>
  </section>
</template>

<script setup>
import rawGlossary from "../data/glossary.json";

// Remove repeated definitions and sort alphabetically by term
const uniqueEntries = Object.entries(rawGlossary).filter(
  ([term, def], idx, arr) => arr.findIndex(([, d]) => d === def) === idx
);

const sortedGlossary = Object.fromEntries(
  uniqueEntries.sort(([a], [b]) => a.localeCompare(b, "es"))
);
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
</style>
