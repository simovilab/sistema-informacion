<template>
  <div class="mermaid-container">
    <div v-if="renderedSvg" v-html="renderedSvg"></div>
    <pre v-else class="mermaid-code">{{ code }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from "vue"

interface Props {
  code: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: () => `mermaid-${Math.random().toString(36).substring(2, 9)}`,
})

const renderedSvg = ref<string>("")
const isDark = ref<boolean>(false)

// Function to render the mermaid diagram
const renderMermaid = async () => {
  if (!props.code?.trim()) return

  try {
    // Dynamic import to avoid SSR issues
    const mermaid = await import("mermaid")

    // For Mermaid v8, use the default export
    const mermaidInstance = mermaid.default || mermaid

    console.log("VitePress dark mode:", isDark.value)

    mermaidInstance.initialize({
      startOnLoad: false,
      theme: "base", // Use base theme for custom styling
      securityLevel: "loose",

      // Add font family configuration to inherit VitePress font
      fontFamily:
        "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",

      // Custom theme variables that match VitePress colors
      themeVariables: {
        // Also set font family in theme variables
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",

        // Primary colors using VitePress brand colors
        primaryColor: isDark.value ? "#a8b1ff" : "#3451b2", // --vp-c-brand-1
        primaryTextColor: isDark.value ? "#dfdfd6" : "#3c3c43", // Black on light colors, white on dark colors
        primaryBorderColor: isDark.value ? "#5c73e7" : "#3a5ccc", // --vp-c-brand-2

        // Secondary colors using VitePress success colors
        secondaryColor: isDark.value ? "#3dd68c" : "#18794e", // --vp-c-success-1

        // Tertiary colors using VitePress purple colors
        tertiaryColor: isDark.value ? "#c8abfa" : "#6f42c1", // --vp-c-purple-1

        // Background colors
        background: isDark.value ? "#1b1b1f" : "#ffffff", // --vp-c-bg
        mainBkg: isDark.value ? "#161618" : "#f6f6f7", // --vp-c-bg-alt
        secondBkg: isDark.value ? "#202127" : "#f6f6f7", // --vp-c-bg-soft
        tertiaryBkg: isDark.value ? "#32363f" : "#ebebef", // --vp-c-gray-3

        // Line and edge colors
        lineColor: isDark.value ? "#3c3f44" : "#c2c2c4", // --vp-c-border
        edgeLabelBackground: isDark.value ? "#202127" : "#ffffff", // --vp-c-bg-elv

        // Text colors
        textColor: isDark.value ? "#dfdfd6" : "#3c3c43", // --vp-c-text-1

        // Node border colors
        nodeBorder: isDark.value ? "#3c3f44" : "#c2c2c4", // --vp-c-border
        clusterBkg: isDark.value ? "#202127" : "#f6f6f7", // --vp-c-bg-soft
        clusterBorder: isDark.value ? "#3c3f44" : "#c2c2c4", // --vp-c-border

        // Special state colors
        activeTaskBkgColor: isDark.value ? "#3dd68c" : "#30a46c", // --vp-c-success-2
        activeTaskBorderColor: isDark.value ? "#30a46c" : "#18794e", // --vp-c-success-1

        // Grid and section colors
        gridColor: isDark.value ? "#2e2e32" : "#e2e2e3", // --vp-c-divider
        section0: isDark.value ? "#161618" : "#f6f6f7", // --vp-c-bg-alt
        section1: isDark.value ? "#202127" : "#ffffff", // --vp-c-bg-elv
        section2: isDark.value ? "#32363f" : "#f6f6f7", // --vp-c-bg-soft
        section3: isDark.value ? "#414853" : "#ebebef", // --vp-c-gray variants

        // Actor colors for sequence diagrams
        actor0: isDark.value ? "#a8b1ff" : "#3451b2", // --vp-c-brand-1
        actor1: isDark.value ? "#3dd68c" : "#18794e", // --vp-c-success-1
        actor2: isDark.value ? "#c8abfa" : "#6f42c1", // --vp-c-purple-1
        actor3: isDark.value ? "#f9b44e" : "#915930", // --vp-c-yellow-1

        // Actor line colors
        actorLineColor: isDark.value ? "#3c3f44" : "#c2c2c4", // --vp-c-border

        // Label colors
        labelColor: isDark.value ? "#dfdfd6" : "#3c3c43", // --vp-c-text-1
        labelTextColor: isDark.value ? "#dfdfd6" : "#3c3c43", // --vp-c-text-1

        // Loop colors
        loopTextColor: isDark.value ? "#dfdfd6" : "#3c3c43", // --vp-c-text-1

        // Note colors
        noteBkgColor: isDark.value ? "#202127" : "#f6f6f7", // --vp-c-bg-soft
        noteTextColor: isDark.value ? "#dfdfd6" : "#3c3c43", // --vp-c-text-1
        noteBorderColor: isDark.value ? "#3c3f44" : "#c2c2c4", // --vp-c-border

        // Activation colors
        activationBkgColor: isDark.value ? "#3c3f44" : "#e2e2e3", // --vp-c-divider
        activationBorderColor: isDark.value ? "#515c67" : "#c2c2c4", // --vp-c-border
      },

      // Flowchart specific configuration
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: "basis",
      },
    })

    // Clean up the code by ensuring proper line breaks
    const cleanCode = props.code.trim()

    // Use the simpler render method for v8
    const renderResult = await mermaidInstance.render(props.id, cleanCode)
    renderedSvg.value = renderResult.svg
  } catch (error) {
    console.error("Mermaid rendering error:", error)
    console.log("Mermaid code that failed:", props.code)
  }
}

onMounted(async () => {
  // Only run on client side
  if (typeof window === "undefined") return

  await nextTick()

  // Check initial dark mode state
  isDark.value = document.documentElement.classList.contains("dark")

  // Initial render
  await renderMermaid()

  // Watch for dark mode changes using MutationObserver
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        const newIsDark = document.documentElement.classList.contains("dark")
        if (newIsDark !== isDark.value) {
          isDark.value = newIsDark
        }
      }
    })
  })

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  })
})

// Watch for isDark changes and re-render the diagram
watch(isDark, async () => {
  await renderMermaid()
})
</script>

<style scoped>
.mermaid-container {
  margin: 1rem 0;
}

.mermaid-code {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 0.375rem;
  overflow-x: auto;
  white-space: pre;
}

/* Force font inheritance on Mermaid SVG elements */
:deep(.mermaid svg) {
  max-width: 100%;
  height: auto;
  font-family: inherit !important;
}

:deep(.mermaid text) {
  font-family: inherit !important;
}

:deep(.mermaid .label text) {
  font-family: inherit !important;
}
</style>
