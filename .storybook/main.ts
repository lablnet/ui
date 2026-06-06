import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (viteConfig) => {
    if (viteConfig.resolve) {
      viteConfig.resolve.alias = {
        ...viteConfig.resolve.alias,
        "@": resolve(__dirname, "../src"),
      };
    }
    return viteConfig;
  },
};
export default config;
