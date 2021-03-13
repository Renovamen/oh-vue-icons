const path = require("path");
const fs = require("fs").promises;
const camelcase = require("camelcase");
const rimraf = require("rimraf");

const { icons } = require("../iconpacks");
const { getIconFiles, convertSVG, writeSVG } = require("./utils");
const svgo = require("./svgo");

const ignore = err => {
  if (err.code === "EEXIST") return;
  throw err;
};

const excludes = ["fa-font-awesome-logo-full"];

async function dirInit(DIST, ASSETS) {
  rimraf.sync(DIST);
  await fs.mkdir(DIST, { recursive: true }).catch(ignore);

  rimraf.sync(ASSETS);
  await fs.mkdir(ASSETS, { recursive: true }).catch(ignore);

  const write = (filePath, str) =>
    fs.writeFile(path.resolve(DIST, filePath), str, "utf8").catch(ignore);

  for (const icon of icons) {
    await fs.mkdir(path.resolve(DIST, icon.id)).catch(ignore);
    await write(`${icon.id}/index.js`, "// THIS FILE IS AUTO GENERATED\n");
    await write(
      `${icon.id}/package.json`,
      JSON.stringify(
        {
          sideEffects: false,
          module: "./index.js"
        },
        null,
        2
      ) + "\n"
    );
  }

  await write("index.js", "// THIS FILE IS AUTO GENERATED\n");
}

async function writeIconModule(icon, DIST, ASSETS) {
  const entryModule = `export * from './${icon.id}';\n`;
  await fs.appendFile(path.resolve(DIST, "index.js"), entryModule, "utf8");

  const svgDir = path.resolve(ASSETS, `${icon.id}`);
  rimraf.sync(svgDir);
  await fs.mkdir(svgDir, { recursive: true }).catch(ignore);

  const exists = new Set(); // for remove duplicate
  var iconNum = 0;

  for (const content of icon.contents) {
    const files = await getIconFiles(content);
    for (const file of files) {
      const svgStrRaw = await fs.readFile(file, "utf8");
      const svgStr = await svgo.optimize(svgStrRaw).then(result => result.data);

      let rawName = path
        .basename(file, path.extname(file))
        .replace(/_/g, "-")
        .replace(/\$/g, "");
      switch (icon.id) {
        case "pi":
          rawName = rawName.substr(4);
          break;
        case "oi":
          rawName = rawName.slice(0, -3);
          break;
      }
      if (excludes.indexOf(icon.id + "-" + rawName) !== -1) continue;

      const pascalName = camelcase(rawName, { pascalCase: true });
      const name =
        (content.formatter && content.formatter(pascalName)) || pascalName;
      if (exists.has(name)) continue; // for remove duplicate
      exists.add(name);

      const prefixName = (content.prefix && content.prefix(rawName)) || rawName;
      const iconData = await convertSVG(content.scale, prefixName, svgStr);

      await fs.appendFile(
        path.resolve(DIST, `${icon.id}/index.js`),
        `export const ${name} = ${JSON.stringify(iconData)};\n`,
        "utf8"
      );

      await writeSVG(svgDir, iconData);

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
