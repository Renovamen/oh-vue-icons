const glob = require('glob-promise')
const path = require('path')
const fs = require('fs').promises

async function getIconFiles(content) {
  let files = await glob(content.files)
  files = files.sort(function(a, b) {
    const namea = a.substr(a.lastIndexOf('/') + 1), nameb = b.substr(b.lastIndexOf('/') + 1)
    return namea.localeCompare(nameb)
  })
  return files
}

async function convertSVG(prefix, name, svg) {
  const svgMatch = svg.match(
    /<svg viewBox="(.*?)">(.*?)<\/svg>/
  )

  if(!svgMatch) console.log(name, svg)

  const viewbox = svgMatch[1].split(' ')
  const initW = Number(viewbox[2]), initH = Number(viewbox[3])
  const raw = svgMatch[2]

  let width = initW > initH ? initW : initH
  let height = initW > initH ? initW : initH

  switch(prefix) {
    case 'ai':
      width = width * 1.17, height = height * 1.17
      break
    case 'ci':
      width = width * 1.2, height = height * 1.2
      break
    case 'fa':
      width = width * 1.17, height = height * 1.17
      break
    case 'gi':
      width = width * 1.14, height = height * 1.14
      break
    case 'si':
      width = width * 1.28, height = height * 1.28
      break
  }

  const minX = Number((- (width - initW) / 2).toFixed(3))
  const minY = Number((- (height - initH) / 2).toFixed(3))

  return {
    name: name,
    minX: minX,
    minY: minY,
    width: width,
    height: height,
    raw: raw
  }
}

async function writeSVG(dir, icon) {
  const filePath = path.resolve(dir, `${icon.name}.svg`)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="${icon.minX} ${icon.minY} ${icon.width} ${icon.height}">${icon.raw}</svg>`
  await fs.writeFile(filePath, svg)
}

module.exports = {
  getIconFiles,
  convertSVG,
  writeSVG
}
