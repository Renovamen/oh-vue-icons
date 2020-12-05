import fs from 'fs'
import path from 'path'
import mkdirp from 'mkdirp'
import rimraf from 'rimraf'
import stringify from 'stringify-object'
import icons from '../assets/icons.json'

const MODULE_TPL = fs.readFileSync(
  path.resolve(__dirname, './icon.tpl'),
  'utf8'
)
const ICON_PATH = path.resolve(__dirname, '../src/icons')
rimraf.sync(ICON_PATH)

let setIndexModule = ''
let iconsets = Object.keys(icons)
let cntSVGs = 0

iconsets.forEach(function(iconset) {
  let indexModule = ''
  let names = Object.keys(icons[iconset])

  names.forEach(function(name) {
    let icon = {}
    icon[iconset + '/' + name] = icons[iconset][name]
    let filePath = path.join(ICON_PATH, `${iconset}/${name}.js`)
    let dirname = path.dirname(filePath)
    let dirmatch = name.match(new RegExp('/', 'g'))
    let dirnum = dirmatch ? dirmatch.length + 1 : 1

    if (!fs.existsSync(dirname)) mkdirp.sync(dirname)
  
    fs.writeFileSync(
      filePath,
      MODULE_TPL.replace(
        '${namespace}',
        '../'.repeat(dirnum)
      ).replace('${icon}', stringify(icon, { indent: '  ' }))
    )
    indexModule += `import './${name}'\n`
  })

  fs.writeFileSync(ICON_PATH + `/${iconset}/index.js`, indexModule)
  setIndexModule += `import './${iconset}/index.js'\n`
  cntSVGs += names.length
})

fs.writeFileSync(ICON_PATH + '/index.js', setIndexModule)
console.log(cntSVGs + ' icon modules generated.')