import DefaultTheme from "vitepress/theme"
import "./custom.css"
import "uno.css"
import Citation from "./components/Citation.vue"
import Glossary from "./components/Glossary.vue"
import Mermaid from "./components/Mermaid.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: import("vue").App }) {
    app.component("Citation", Citation)
    app.component("Glossary", Glossary)
    app.component("Mermaid", Mermaid)
  },
}
