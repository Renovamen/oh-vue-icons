// split Remix icons into individual SVG files

import fs from "fs"
import glyphs2json from "../lib/glyphs2json"
import { sync as mkdirpSync } from "mkdirp"
import minimist from "minimist"

function loadAliases(css) {
  const re = /.ai-([a-z0-9-]+)\s*:before{content:\s*"\\([0-9a-f]+)"}/g
  const m = {} // unicode hex -> [alias0, alias1, alias2, ...]

  let match
  while ((match = re.exec(css)) !== null) {
    const alias = match[1]
    const unicode_hex = match[2]

    if (!(unicode_hex in m)) m[unicode_hex] = []
    m[unicode_hex].push(alias)
  }

  return m
}

function loadFile(path) {
  return fs.readFileSync(
    require.resolve(`academicons/${path}`),
    "utf8"
  )
}

function extractGlyphs(path, aliases, { dir, color, verbose }) {
  let glyphs = glyphs2json(loadFile(path), 'ai')

  mkdirpSync(dir)

  for (let g of glyphs) {
    for (let alias of aliases[g.unicode_hex] || []) {
      const path = `${dir}/ai-${alias}.svg`
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 ${g.width} ${g.height}"><path fill="${color}" d="${g.path}" /></svg>`
      fs.writeFileSync(path, svg)

      if (verbose) console.log(`Extracted ${path}`)
    }
  }
}

export default function splitSVG(dir, color = "currentColor", verbose = false) {
  const aliases = loadAliases(loadFile("css/academicons.min.css"))

  extractGlyphs("fonts/academicons.svg", aliases, {
    dir,
    color,
    verbose
  })
}

function run() {
  const args = minimist(process.argv.slice(2))
  const usage = `Usage: ${process.argv[1]} --dir OUTPUT_DIR [--color '#000'] [--verbose]`

  if (args.help || args.h) {
    console.log(usage)
    return
  }

  if (!args.dir) {
    console.log(usage)
    return
  }

  splitSVG(args.dir || args.d, args.color || args.c, args.verbose || args.v)
}

if (require.main === module) run()