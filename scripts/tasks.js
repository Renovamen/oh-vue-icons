const path = require("path");
const fs = require("fs").promises;
const camelcase = require("camelcase");
const rimraf = require("rimraf");

const svgo = require("./svgo");
const { icons } = require("../iconpacks");
const { getIconFiles, convertSVG /* writeSVG */ } = require("./utils");
const {
  autoGenerateTemplate,
  packageJsonTemplate,
  iconDataTemplate,
  tsDefTemplate,
  tsDefImportTemplate
} = require("./templates");

const ignore = (err) => {
  if (err.code === "EEXIST") return;
  throw err;
};

const excludes = ["fa-font-awesome-logo-full"];

async function dirInit(DIST, ASSETS) {
  rimraf.sync(DIST);
  await fs.mkdir(DIST, { recursive: true }).catch(ignore);

  // rimraf.sync(ASSETS);
  // await fs.mkdir(ASSETS, { recursive: true }).catch(ignore);

  const write = (filePath, str) =>
    fs.writeFile(path.resolve(DIST, filePath), str, "utf8").catch(ignore);

  for (const icon of icons) {
    await fs.mkdir(path.resolve(DIST, icon.id)).catch(ignore);
    await write(`${icon.id}/index.js`, autoGenerateTemplate);
    await write(`${icon.id}/index.d.ts`, tsDefImportTemplate);
    await write(`${icon.id}/package.json`, packageJsonTemplate);
  }

  await write("index.js", autoGenerateTemplate);
  await write("index.d.ts", autoGenerateTemplate);
}

async function writeIconModule(icon, DIST, ASSETS) {
  const entryModule = `export * from "./${icon.id}";\n`;
  await fs.appendFile(path.resolve(DIST, "index.js"), entryModule, "utf8");
  await fs.appendFile(path.resolve(DIST, "index.d.ts"), entryModule, "utf8");

  // const svgDir = path.resolve(ASSETS, `${icon.id}`);
  // rimraf.sync(svgDir);
  // await fs.mkdir(svgDir, { recursive: true }).catch(ignore);

  const exists = new Set(); // for removing duplicate
  var iconNum = 0;

  for (const content of icon.contents) {
    const files = await getIconFiles(content);
    for (const file of files) {
      const svgStrRaw = await fs.readFile(file, "utf8");
      const svgStr = await svgo
        .optimize(svgStrRaw)
        .then((result) => result.data);

      const name =
        (content.nameFromPath && content.nameFromPath(file)) ||
        path
          .basename(file, path.extname(file))
          .replace(/_/g, "-")
          .replace(/\$/g, "");

      const rawName = (content.raw && content.raw(name)) || name;
      const prefixName = (content.prefix && content.prefix(rawName)) || rawName;
      const prefix = prefixName.replace(`-${rawName}`, "");

      if (excludes.includes(prefixName)) continue;

      const pascalName = camelcase(rawName, { pascalCase: true });
      const prefixPascalName =
        (content.formatter && content.formatter(pascalName)) || pascalName;
      if (exists.has(prefixPascalName)) continue; // remove duplicate
      exists.add(prefixPascalName);

      const iconData = await convertSVG(
        content.scale,
        prefixName,
        prefix,
        svgStr
      );

      await fs.appendFile(
        path.resolve(DIST, `${icon.id}/index.js`),
        iconDataTemplate(prefixPascalName, iconData),
        "utf8"
      );

      await fs.appendFile(
        path.resolve(DIST, `${icon.id}/index.d.ts`),
        tsDefTemplate(prefixPascalName),
        "utf8"
      );

      // await writeSVG(svgDir, iconData);

      exists.add(file);
    }
    iconNum += files.length;
  }

  console.log(`- ${iconNum} icons from ${icon.name} done`);
}

module.exports = {
  dirInit,
  writeIconModule
};
