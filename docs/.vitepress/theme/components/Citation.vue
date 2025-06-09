<template>
  <p :id="id" v-html="bibliography"></p>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  doi: { type: String, default: "" },
  citekey: { type: String, default: "" },
  id: { type: String, default: "bibliography" },
});

const bibliography = ref("Cargando referencia...");

onMounted(async () => {
  if (typeof window === "undefined") return; // SSR guard
  try {
    const { Cite } = await import("@citation-js/core");
    await import("@citation-js/plugin-doi");
    await import("@citation-js/plugin-csl");
    await import("@citation-js/plugin-bibtex");

    let cite;
    if (props.doi) {
      cite = await Cite.async(props.doi);
    } else if (props.citekey) {
      const bibtexText = await fetch(
        new URL("/references.bib", import.meta.url)
      ).then((r) => r.text());
      console.log("BibTeX loaded:", bibtexText);

      const bibCite = new Cite(bibtexText);
      console.log(
        "Parsed BibTeX entries:",
        bibCite.data.map((e) => e.id)
      );

      const entry = bibCite.data.find(
        (entry) => entry.id.toLowerCase() === props.citekey.toLowerCase()
      );
      if (!entry) {
        bibliography.value = `No se encontró la referencia con la clave: ${
          props.key
        }. IDs disponibles: ${bibCite.data.map((e) => e.id).join(", ")}`;
        throw new Error(
          `No se encontró la referencia con la clave: ${
            props.key
          }. IDs disponibles: ${bibCite.data.map((e) => e.id).join(", ")}`
        );
      }
      cite = new Cite(entry);
    } else {
      throw new Error("Debe proporcionar un DOI o una clave (key).");
    }

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
