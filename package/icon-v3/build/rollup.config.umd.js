import base from "./rollup.config.base";

const config = Object.assign({}, base, {
  output: {
    exports: "named",
    name: "oh-vue-icons",
    format: "umd",
    file: "dist/icon.umd.js",
    globals: {
      vue: "vue"
    }
  },
  external: ["vue"]
});

export default config;
