const glob = require('glob-promise')
const SVGO = require('svgo')
const xml2js = require('xml2js')
const svgpath = require ('svgpath')
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

const optimizeSVG = new SVGO({
  plugins: [
    {
      cleanupAttrs: true
    },
    {
      removeDoctype: true
    },
    {
      removeXMLProcInst: true
    },
    {
      removeComments: true
    },
    {
      removeMetadata: true
    },
    {
      removeTitle: true
    },
    {
      removeDesc: true
    },
    {
      removeUselessDefs: true
    },
    {
      removeEditorsNSData: true
    },
    {
      removeEmptyAttrs: true
    },
    {
      removeHiddenElems: true
    },
    {
      removeEmptyText: true
    },
    {
      removeEmptyContainers: true
    },
    {
      removeViewBox: false
    },
    {
      cleanupEnableBackground: true
    },
    {
      convertStyleToAttrs: true
    },
    {
      convertColors: {
        currentColor: true
      }
    },
    {
      convertPathData: true
    },
    {
      convertTransform: true
    },
    {
      removeUnknownsAndDefaults: true
    },
    {
      removeNonInheritableGroupAttrs: true
    },
    {
      removeUselessStrokeAndFill: true
    },
    {
      removeUnusedNS: true
    },
    {
      cleanupIDs: true
    },
    {
      cleanupNumericValues: true
    },
    {
      moveElemsAttrsToGroup: true
    },
    {
      moveGroupAttrsToElems: true
    },
    {
      collapseGroups: true
    },
    {
      removeRasterImages: false
    },
    {
      mergePaths: true
    },
    {
      convertShapeToPath: true
    },
    {
      sortAttrs: true
    },
    {
      removeDimensions: true
    },
    {
      removeAttributesBySelector: {
        selector: "*:not(svg)",
        attributes: ["stroke"]
      },
    },
    {
      removeAttrs: { attrs: "data.*" }
    }
  ]
})

function modifySVG(prefix, width, height, d) {
  let newW = width > height ? width : height
  let newH = width > height ? width : height

  switch(prefix) {
    case 'game':
      newW = newW * 1.15, newH = newH * 1.15
      break
    case 'fa':
      newW = newW * 1.17, newH = newH * 1.17
      break
    case 'ai':
      newW = newW * 1.17, newH = newH * 1.17
      break
    case 'si':
      newW = newW * 1.28, newH = newH * 1.28
      break
  }
  
  let newD = svgpath(d).translate((newW - width) / 2, (newH - height) / 2).toString()
  
  return {
    width: newW,
    height: newH,
    d: newD
  }
}

async function parseSVG(prefix, name, svg) {
  var icon = {}
  const parser = new xml2js.Parser()
  parser.parseString(svg, (err, root) => {
    if (err) throw err
  
    const viewBox = root.svg.$.viewBox.split(' ')
    let width = viewBox[2]
    let height = viewBox[3]
    let d = root.svg.path ?
            root.svg.path[0].$.d :
            root.svg.g[0].path.slice(-1)[0].$.d
    icon = modifySVG(prefix, width, height, d)
    icon.name = name
  })
  return icon
}

async function writeSVG(dir, icon) {
  const filePath = path.resolve(dir, `${icon.name}.svg`)
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 ${icon.width} ${icon.height}"><path d="${icon.d}" /></svg>`
  await fs.writeFile(filePath, svg)
}

module.exports = {
  getIconFiles,
  optimizeSVG,
  parseSVG,
  writeSVG
}
