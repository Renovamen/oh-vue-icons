import analyze from "rollup-plugin-analyzer";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

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
    esbuild(),
    postcss(),
    analyze({ summaryOnly: true, hideDeps: true })
  ],
  external: ["vue-demi"]
};

const config = [
  Object.assign({}, base, {
    output: {
      file: "dist/index.mjs",
      format: "es",
      sourcemap: true
    }
  }),
  Object.assign({}, base, {
    output: {
      file: "dist/index.cjs",
      format: "cjs",
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
