module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("nightwind")]
}
