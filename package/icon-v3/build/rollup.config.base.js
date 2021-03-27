import babel from "@rollup/plugin-babel";
import cjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import analyze from "rollup-plugin-analyzer";
import postcss from "rollup-plugin-postcss";
import vue from "rollup-plugin-vue";

export default {
  input: "src/components/index.js",
  plugins: [
    vue(),
    postcss(),
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    cjs(),
    terser(),
    analyze({ summaryOnly: true, hideDeps: true })
  ]
};
