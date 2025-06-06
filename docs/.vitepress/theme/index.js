import DefaultTheme from "vitepress/theme";
import Citation from "./components/Citation.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Citation", Citation);
  },
};
