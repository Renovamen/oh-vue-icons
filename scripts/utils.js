const glob = require("glob-promise");
const path = require("path");
const fs = require("fs").promises;
const cheerio = require("cheerio");

const attrToString = (attr) => {
  let str = "";
  for (let key in attr) str += ` ${key}="${attr[key]}"`;
  return str;
};

const fillAttrWhiteList = ["hi"];

const cleanAttr = (attr, prefix) => {
  if (attr.fill && !fillAttrWhiteList.includes(prefix)) delete attr.fill;
  delete attr.viewBox;
  return attr;
};

async function getIconFiles(content) {
  let files = await glob(content.files);
  files = files.sort(function (a, b) {
    const namea = a.substr(a.lastIndexOf("/") + 1),
      nameb = b.substr(b.lastIndexOf("/") + 1);
    return namea.localeCompare(nameb);
  });
  return files;
}

async function convertSVG(scale, name, prefix, svg) {
  const $ = cheerio.load(svg, {
    xmlMode: true,
    xml: {
      normalizeWhitespace: true
    }
  });

  let attr = $("svg")[0].attribs;

  const viewbox = attr["viewBox"].split(" ");
  const initW = Number(viewbox[2]),
    initH = Number(viewbox[3]);
  attr = cleanAttr(attr, prefix);

  if (!scale) scale = 1;
  const width = Number(
    (initW > initH ? initW * scale : initH * scale).toFixed(3)
  );
  const height = Number(
    (initW > initH ? initW * scale : initH * scale).toFixed(3)
  );

  const minX = Number((-(width - initW) / 2).toFixed(3));
  const minY = Number((-(height - initH) / 2).toFixed(3));

  const raw = svg.match(/<svg(.*?)>(.*?)<\/svg>/)[2];

  const data = {
    name: name,
    minX: minX,
    minY: minY,
    width: width,
    height: height,
    raw: raw
  };
  if (JSON.stringify(attr) !== "{}") data.attr = attr;
  return data;
}

async function writeSVG(dir, icon) {
  const filePath = path.resolve(dir, `${icon.name}.svg`);
  const attr = icon.attr ? attrToString(icon.attr) : "";
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="${icon.minX} ${icon.minY} ${icon.width} ${icon.height}"${attr}>${icon.raw}</svg>`;
  await fs.writeFile(filePath, svg);
}

module.exports = {
  getIconFiles,
  convertSVG,
  writeSVG
};
