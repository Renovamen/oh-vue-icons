import admzip from 'adm-zip'
import path from 'path'
import svgpath from 'svgpath'
import xml2js from 'xml2js'
import fs from 'fs'
import { sync as mkdirpSync } from 'mkdirp'

const ZIP_PATH = './assets/svg/game-icons-svg.zip'

function genSVG(svg, toPath, color, verbose) {
    const parser = new xml2js.Parser()
    parser.parseString(svg, (err, root) => {
        if (err) throw err

        let viewBox = root.svg.$.viewBox.split(' ')
        let svgPath = root.svg.path[0].$.d
        let width = viewBox[2], height = viewBox[3]

        let newWidth = width * 1.15, newHeight = height * 1.15
        let newSVGPath = svgpath(svgPath)
                            .translate((newWidth - width) / 2, (newHeight - height) / 2)
                            .toString()
        let newSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 ${newWidth} ${newHeight}"><path fill="${color}" d="${newSVGPath}" /></svg>`
        
        fs.writeFileSync(toPath, newSVG)
        if (verbose) console.log(`Extracted ${toPath}`)
    })
}

function unzipFile(fromDir, toDir, color, verbose, callback) {
    mkdirpSync(toDir)
    let zip = new admzip(fromDir)
    let zipEntries = zip.getEntries()
    zipEntries.forEach(function(entry) {
		if(entry.entryName.slice(-4) === '.svg') {
            let fileName = entry.entryName.substring(entry.entryName.lastIndexOf("/") + 1)
            let toPath = path.join(toDir, 'game-' + fileName)
            genSVG(entry.getData().toString('utf8'), toPath, color, verbose)
		}
    })
    callback()
}

export default function game2svg(svgDir, callback, color = "currentColor", verbose = false) {
    unzipFile(ZIP_PATH, svgDir, color, verbose, callback)
}