import DefaultTheme from "vitepress/theme";
import StorybookPreview from "./components/StorybookPreview.vue";
import type { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("StorybookPreview", StorybookPreview);
  },
} satisfies Theme;
