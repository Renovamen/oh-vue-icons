import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";

export default defineConfig({
  shortcuts: [
    [
      "sidebar-li",
      "leading-9 list-none cursor-pointer ml-0 px-4 hover:text-blue-600 dark:hover:text-blue-400"
    ],
    [
      "tool-btn",
      "h-8 border border-solid border-gray-500 outline-none rounded hover:bg-gray-100 dark:(border-gray-400 hover:bg-gray-700)"
    ],
    ["tool-title", "m-3 ml-0 mr-4 text-left"],
    ["tool-section", "p-2 mx-2"],
    ["hide-on-mobile", "hidden lg:block"],
    ["show-on-mobile", "block lg:hidden"],
    ["homepage", "max-w-home xl:max-w-home-xl"]
  ],
  rules: [
    ["max-w-home-xl", { "max-width": "750px" }],
    ["max-w-home", { "max-width": "500px" }]
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: "Kumbh Sans:400,500,700",
        mono: "DM Mono"
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: "prose prose-sm m-auto text-left dark:text-gray-100".split(" ")
});
