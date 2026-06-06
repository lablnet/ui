import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Lablnet UI",
  description: "A premium React UI library styled with Tailwind CSS and Radix UI",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }]
  ],
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/getting-started" },
      { text: "Components", link: "/components/button" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Getting Started", link: "/guide/getting-started" },
          { text: "Customization", link: "/guide/customization" },
        ],
      },
      {
        text: "Components",
        items: [
          { text: "Accordion", link: "/components/accordion" },
          { text: "Avatar", link: "/components/avatar" },
          { text: "Badge", link: "/components/badge" },
          { text: "Button", link: "/components/button" },
          { text: "Card", link: "/components/card" },
          { text: "Checkbox", link: "/components/checkbox" },
          { text: "Dialog", link: "/components/dialog" },
          { text: "Dropdown Menu", link: "/components/dropdown" },
          { text: "Input", link: "/components/input" },
          { text: "Label", link: "/components/label" },
          { text: "Menubar", link: "/components/menubar" },
          { text: "MultiSelect", link: "/components/multi-select" },
          { text: "Progress", link: "/components/progress" },
          { text: "Radio Group", link: "/components/radio" },
          { text: "Select", link: "/components/select" },
          { text: "Selectize (Combobox)", link: "/components/selectize" },
          { text: "Separator", link: "/components/separator" },
          { text: "Sidepanel (Sheet)", link: "/components/sidepanel" },
          { text: "Sidebar Layout", link: "/components/sidebar" },
          { text: "Slider", link: "/components/slider" },
          { text: "SweetAlert (Swal)", link: "/components/swal" },
          { text: "Switch", link: "/components/switch" },
          { text: "Table", link: "/components/table" },
          { text: "Tabs", link: "/components/tabs" },
          { text: "Toast", link: "/components/toast" },
          { text: "Tooltip", link: "/components/tooltip" },
          { text: "Top Bar", link: "/components/topbar" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/lablnet/ui" },
    ],
  },
  vite: {
    server: {
      proxy: {
        "/storybook": {
          target: "http://localhost:6006",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/storybook/, ""),
        },
      },
    },
  },
});
