import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import analyze from "rollup-plugin-analyzer";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import { handeWarning } from "rollup";

const EMPTY_FILE_ID = "__rollup_empty__";

const ingoreCSS = {
  name: "ignore-css",
  resolveId: (source) => {
    if (source.endsWith(".css")) {
      return EMPTY_FILE_ID;
    }
    return null;
  },
  load: (id) => {
    return id === EMPTY_FILE_ID ? "" : null;
  }
};

const base = {
  input: "src/index.ts",
  plugins: [
    typescript(),
    postcss(),
    terser(),
    analyze({ summaryOnly: true, hideDeps: true })
  ],
  external: ["vue-demi"],
  onwarn: (warning) => {
    if (warning.code === "THIS_IS_UNDEFINED") return;
    handeWarning(warning);
  }
};

const config = [
  Object.assign({}, base, {
    output: {
      file: "dist/index.esm.min.js",
      format: "es",
      sourcemap: true
    }
  }),
  Object.assign({}, base, {
    output: {
      file: "dist/index.cjs.min.js",
      format: "cjs",
      exports: "named",
      sourcemap: true
    }
  }),
  {
    input: "src/index.ts",
    plugins: [ingoreCSS, dts()],
    output: {
      file: "dist/index.d.ts",
      format: "es"
    }
  }
];

export default config;
