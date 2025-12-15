#!/usr/bin/env node
/**
 * Simple CLI to convert between data formats (YAML ↔ JSON, CSV → JSON/YAML).
 *
 * Examples:
 *   node scripts/converter.mjs --from yaml --to json --input data.yaml --output data.json
 *   node scripts/converter.mjs --input data.json --to yaml > data.yaml   # infers source from extension
 *   cat data.yaml | node scripts/converter.mjs --from yaml --to json
 *
 * Currently supports YAML and JSON; the handler registry is extensible for future formats.
 */

import fs from "node:fs"
import path from "node:path"
import process from "node:process"
import yaml from "js-yaml"

/** @typedef {(text: string) => any} Loader */
/** @typedef {(data: any) => string} Dumper */

function parseCsvLine(line) {
  const cells = []
  let current = ""
  let inQuotes = false
  for (let i = 0; i < line.length; i += 1) {
    const ch = line[i]
    if (inQuotes) {
      if (ch === "\"") {
        const next = line[i + 1]
        if (next === "\"") {
          current += "\""
          i += 1
        } else {
          inQuotes = false
        }
      } else {
        current += ch
      }
    } else if (ch === ",") {
      cells.push(current)
      current = ""
    } else if (ch === "\"") {
      inQuotes = true
    } else {
      current += ch
    }
  }
  cells.push(current)
  return cells
}

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim() !== "")
  if (!lines.length) return []
  const rows = lines.map(parseCsvLine)
  const headers = rows[0]
  return rows.slice(1).map(cols => {
    const obj = {}
    headers.forEach((h, idx) => {
      obj[h] = cols[idx] === undefined ? "" : cols[idx]
    })
    return obj
  })
}

function escapeCsvCell(value) {
  const s = value === null || value === undefined ? "" : String(value)
  if (/[",\n]/.test(s)) {
    return '"' + s.replace(/"/g, '""') + '"'
  }
  return s
}

function dumpCsv(data) {
  if (!Array.isArray(data)) {
    throw new Error("CSV output expects an array of objects")
  }
  const headers = new Set()
  for (const row of data) {
    if (row && typeof row === "object") {
      Object.keys(row).forEach(k => headers.add(k))
    }
  }
  const headerList = Array.from(headers)
  const lines = [headerList.join(",")]
  for (const row of data) {
    const line = headerList.map(h => escapeCsvCell(row?.[h])).join(",")
    lines.push(line)
  }
  return lines.join("\n") + "\n"
}

/** @type {Record<string, { load: Loader, dump: Dumper }>} */
const HANDLERS = {
  json: {
    load: text => JSON.parse(text),
    dump: data => JSON.stringify(data, null, 2) + "\n",
  },
  yaml: {
    load: text => yaml.load(text),
    dump: data => yaml.dump(data, { sortKeys: false, noRefs: true }),
  },
  yml: {
    load: text => yaml.load(text),
    dump: data => yaml.dump(data, { sortKeys: false, noRefs: true }),
  },
  csv: {
    load: text => parseCsv(text),
    dump: data => dumpCsv(data),
  },
}

function guessFormat(filePath) {
  if (!filePath) return null
  const ext = path.extname(filePath).toLowerCase().replace(/^\./, "")
  return ext && HANDLERS[ext] ? ext : null
}

function readText(sourcePath) {
  if (!sourcePath || sourcePath === "-") return fs.readFileSync(0, "utf8")
  return fs.readFileSync(sourcePath, "utf8")
}

function writeText(targetPath, content) {
  if (!targetPath || targetPath === "-") {
    process.stdout.write(content)
    return
  }
  fs.writeFileSync(targetPath, content, "utf8")
}

function convert(text, srcFmt, dstFmt) {
  if (!HANDLERS[srcFmt]) throw new Error(`Unsupported source format: ${srcFmt}`)
  if (!HANDLERS[dstFmt]) throw new Error(`Unsupported target format: ${dstFmt}`)
  const data = HANDLERS[srcFmt].load(text)
  return HANDLERS[dstFmt].dump(data)
}

function parseArgs(argv) {
  const args = { srcFmt: null, dstFmt: null, inputPath: null, outputPath: null }
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    switch (arg) {
      case "--from":
        args.srcFmt = argv[++i]
        break
      case "--to":
        args.dstFmt = argv[++i]
        break
      case "--input":
      case "-i":
        args.inputPath = argv[++i]
        break
      case "--output":
      case "-o":
        args.outputPath = argv[++i]
        break
      case "-h":
      case "--help":
        printHelp()
        process.exit(0)
      default:
        console.error(`Unknown argument: ${arg}`)
        printHelp()
        process.exit(1)
    }
  }
  return args
}

function printHelp() {
  console.log(`Usage: node scripts/converter.mjs [--from fmt] --to fmt [--input file|-] [--output file|-]

Options:
  --from,    source format (json|yaml|csv). Optional if inferred from --input extension.
  --to,      target format (json|yaml|csv). Required.
  --input, -i   input file path, or '-' for stdin. Defaults to '-'.
  --output, -o  output file path, or '-' for stdout. Defaults to '-'.
  --help, -h    show this help.
`)
}

function main() {
  const args = parseArgs(process.argv.slice(2))

  const inputPath = args.inputPath || "-"
  const dstFmt = args.dstFmt ? args.dstFmt.toLowerCase() : null
  if (!dstFmt) {
    console.error("--to is required (json|yaml)")
    process.exit(1)
  }

  let srcFmt = args.srcFmt ? args.srcFmt.toLowerCase() : null
  if (!srcFmt) {
    const guessed = inputPath !== "-" ? guessFormat(inputPath) : null
    if (!guessed) {
      console.error("Could not infer source format; set --from")
      process.exit(1)
    }
    srcFmt = guessed
  }

  const text = readText(inputPath)
  let output
  try {
    output = convert(text, srcFmt, dstFmt)
  } catch (err) {
    console.error(`Conversion failed: ${err.message || err}`)
    process.exit(1)
  }

  writeText(args.outputPath || "-", output)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
