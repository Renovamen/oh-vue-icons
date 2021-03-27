import base from "./rollup.config.base";

const config = Object.assign({}, base, {
  output: {
    exports: "named",
    name: "oh-vue-icons",
    format: "esm",
    file: "dist/icon.es.js",
    globals: {
      vue: "vue"
    }
  },
  external: ["vue"]
});

export default config;
