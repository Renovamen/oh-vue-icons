import i18n from "./i18n";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Oh, Vue Icons!",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Include inline SVG icons from different popular icon packs in Vue 2 & 3 easily."
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }]
  },

  css: [
    "./assets/css/font.css",
    "./assets/css/markdown.css",
    "./assets/css/code-light.css",
    "./assets/css/code-dark.css"
  ],

  plugins: ["~/plugins/icons.ts"],

  // components: true,  // Auto import components

  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/composition-api/module",
    "vue-swatches/nuxt"
  ],

  modules: ["@nuxt/content", ["@nuxtjs/i18n", i18n]],

  build: {
    transpile: ["oh-vue-icons"]
  }
};
