<template>
  <div class="structurizr-embed">
    <iframe
      id="myEmbeddedDiagram"
      :src="src"
      width="100%"
      marginwidth="0"
      marginheight="0"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true"
      style="border: 1px solid #ddd"
    ></iframe>
  </div>
</template>

<script setup>
import { onMounted } from "vue"

const props = defineProps({
  src: {
    type: String,
    default:
      "https://structurizr.simovi.org/embed/1?diagram=SystemLandscape-001&diagramSelector=false&iframe=myEmbeddedDiagram",
  },
  scriptSrc: {
    type: String,
    default: "https://structurizr.simovi.org/static/js/structurizr-embed.js",
  },
})

onMounted(() => {
  // Load the Structurizr embed script
  if (props.scriptSrc && !document.querySelector(`script[src="${props.scriptSrc}"]`)) {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = props.scriptSrc
    document.head.appendChild(script)
  }
})
</script>

<style scoped>
.structurizr-embed {
  margin: 20px 0;
}
</style>
