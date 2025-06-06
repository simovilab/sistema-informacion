<template>
  <p :id="id" v-html="bibliography"></p>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  doi: { type: String, required: true },
  id: { type: String, default: "bibliography" },
});

const bibliography = ref("Cargando referencia...");

onMounted(async () => {
  try {
    const { Cite } = await import("@citation-js/core");
    await import("@citation-js/plugin-doi");
    await import("@citation-js/plugin-csl");
    const cite = await Cite.async(props.doi);
    bibliography.value = cite.format("bibliography", {
      format: "html",
      template: "apa",
      lang: "es-ES",
    });
  } catch (e) {
    bibliography.value = "Error cargando la referencia";
    console.error("Citation.js error:", e);
  }
});
</script>
