// Assemble les feuilles distribuées dans dist/ et copie les polices.
import { readFileSync, writeFileSync, mkdirSync, cpSync } from 'node:fs'

const r = p => readFileSync(new URL(p, import.meta.url), 'utf8')
const dist = new URL('../dist/', import.meta.url)
mkdirSync(dist, { recursive: true })
cpSync(new URL('../src/fonts/', import.meta.url), new URL('fonts/', dist), { recursive: true })

const tokens = r('../src/styles/tokens.css').replaceAll('../fonts/', './fonts/')
const components = r('../src/styles/components.css')
writeFileSync(new URL('tokens.css', dist), tokens)
writeFileSync(new URL('components.css', dist), components)
writeFileSync(new URL('atelier.css', dist), `${tokens}\n${components}`)
console.log('css: dist/atelier.css, dist/tokens.css, dist/components.css, dist/fonts/')
