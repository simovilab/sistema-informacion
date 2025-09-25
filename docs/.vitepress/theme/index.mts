import DefaultTheme from "vitepress/theme"
import "./custom.css"
import "uno.css"
import Citation from "./components/Citation.vue"
import Glossary from "./components/Glossary.vue"
import Mermaid from "./components/Mermaid.vue"
import Ref from "./components/Ref.vue"
import Concept from "./components/Concept.vue"
import CatalogItem from "./components/CatalogItem.vue"
import Catalog from "./components/Catalog.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: import("vue").App }) {
    app.component("Citation", Citation)
    app.component("Glossary", Glossary)
    app.component("Mermaid", Mermaid)
    app.component("Ref", Ref)
    app.component("Concept", Concept)
    app.component("CatalogItem", CatalogItem)
    app.component("Catalog", Catalog)
  },
}
