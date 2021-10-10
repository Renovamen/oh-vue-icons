const autoGenerateTemplate = "// THIS FILE IS AUTO GENERATED\n";

const packageJsonTemplate =
  JSON.stringify(
    {
      sideEffects: false,
      module: "./index.js"
    },
    null,
    2
  ) + "\n";

const tsDefImportTemplate = `${autoGenerateTemplate}import { IconType } from "../../types/icons";\n`;

const tsDefTemplate = (name) => {
  return `export declare const ${name}: IconType;\n`;
};

const iconDataTemplate = (name, data) => {
  return `export const ${name} = ${JSON.stringify(data)};\n`;
};

module.exports = {
  autoGenerateTemplate,
  packageJsonTemplate,
  iconDataTemplate,
  tsDefTemplate,
  tsDefImportTemplate
};
