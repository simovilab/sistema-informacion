import DefaultTheme from "vitepress/theme";
import Citation from "./components/Citation.vue";
import Glossary from "./components/Glossary.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Citation", Citation);
    app.component("Glossary", Glossary);
  },
};
