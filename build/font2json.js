import fs from "fs"
import path from "path"
import rimraf from "rimraf"
import mkdirp from "mkdirp"

import fa2svg from "./font2svg/fa"
import ri2svg from "./font2svg/ri"
import ai2svg from "./font2svg/ai"

const BASE_DIR = "../assets/svg"

let icons = {}

function extractIcons(svgDir, namespace = "", toNamespace = namespace, iconset = "fa") {
    let prefix = toNamespace ? `${toNamespace}/` : ""
    fs.readdirSync(path.join(svgDir, namespace), "utf8")
        .filter(file => {
            return !fs.statSync(path.resolve(svgDir, namespace, file)).isDirectory()
        })
        .forEach(function(file) {
            let filePath = path.resolve(svgDir, namespace, file)

            let dirname = path.dirname(filePath)
            if (!fs.existsSync(dirname)) mkdirp.sync(dirname)

            let svg = fs.readFileSync(filePath, "utf8")
            let sizeMatch = svg.match(
                / viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/
            )
            let dMatch = svg.match(/ d="([^"]+)"/)
            if (!sizeMatch || !dMatch) return

            let icon = {}
            let name = file.replace(iconset + "-", "").replace(/\.svg$/, "")
            icons[iconset + '/' + prefix + name] = {
                width: parseInt(sizeMatch[1], 10),
                height: parseInt(sizeMatch[2], 10),
                paths: [
                    {
                        d: dMatch[1]
                    }
                ]
            }
        })
}

function fa2json() {
    const FA_SVG_DIR = path.resolve(__dirname, path.join(BASE_DIR, 'fa'))
    rimraf.sync(FA_SVG_DIR)
    
    fa2svg(FA_SVG_DIR)
    extractIcons(FA_SVG_DIR, '', 'regular', 'fa')
    extractIcons(FA_SVG_DIR, 'brands', 'brands', 'fa')
    extractIcons(FA_SVG_DIR, 'solid', '', 'fa')
}

function ri2json() {
    const RI_SVG_DIR = path.resolve(__dirname, path.join(BASE_DIR, 'ri'))
    rimraf.sync(RI_SVG_DIR)
    
    ri2svg(RI_SVG_DIR)
    extractIcons(RI_SVG_DIR, '', '', 'ri')
}

function ai2json() {
    const AI_SVG_DIR = path.resolve(__dirname, path.join(BASE_DIR, 'ai'))
    rimraf.sync(AI_SVG_DIR)
    
    ai2svg(AI_SVG_DIR)
    extractIcons(AI_SVG_DIR, '', '', 'ai')
}

fa2json()
ri2json()
ai2json()

fs.writeFileSync(
  path.resolve(__dirname, '../assets/icons.json'),
  JSON.stringify(icons, null, '  '),
  "utf8"
)