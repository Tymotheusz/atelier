// Génère les fichiers de marque de brand/ depuis src/brand.ts (construction, glyphes) et tokens/tokens.json (couleurs),
// plus le favicon du playground. Node lit src/brand.ts directement (types effacés à l'import, Node ≥ 22.18).
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { LOGO_TILE, WORDMARK, brandGrid, logoApps } from '../src/brand.ts'

const root = new URL('../', import.meta.url)
const tokens = JSON.parse(readFileSync(new URL('tokens/tokens.json', root), 'utf8'))
const color = (name, theme) => {
  const t = tokens.color.tokens.find(c => c.name === name)
  if (!t) throw new Error(`Token de couleur inconnu : ${name}`)
  return t.value[theme]
}

const S = brandGrid.size
const n = v => String(Math.round(v * 100) / 100)
const glyphAttrs = `fill="none" stroke-width="${brandGrid.stroke}" stroke-linecap="round" stroke-linejoin="round"`
const header = (w, h, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n(w)} ${n(h)}" width="${n(w)}" height="${n(h)}" role="img" aria-label="${title}">\n<title>${title}</title>\n`

/** Marque monochrome : la tuile en currentColor, le glyphe évidé (masque). Pour tout fond, toute couleur. */
function mono(id, app, withWordmark = false) {
  const w = withWordmark ? S + brandGrid.gap + WORDMARK.width : S
  const mask = `at-logo-${id}`
  return header(w, S, withWordmark ? 'Atelier' : app.name) +
    `<mask id="${mask}" maskUnits="userSpaceOnUse" x="0" y="0" width="${S}" height="${S}">\n` +
    `  <path d="${LOGO_TILE}" fill="#fff"/>\n` +
    `  <g ${glyphAttrs} stroke="#000" color="#000">${app.glyph}</g>\n` +
    `</mask>\n` +
    `<g fill="currentColor">\n` +
    `  <path d="${LOGO_TILE}" mask="url(#${mask})"/>\n` +
    (withWordmark ? `  <path transform="translate(${n(S + brandGrid.gap)} ${n(S / 2 + WORDMARK.capHeight / 2)})" d="${WORDMARK.d}"/>\n` : '') +
    `</g>\n</svg>\n`
}

/** Marque en couleur, autonome (favicon, documents) : valeurs des tokens, thème sombre par prefers-color-scheme. */
function colored(app, withWordmark = false) {
  const w = withWordmark ? S + brandGrid.gap + WORDMARK.width : S
  const rule = th => `.tile{fill:${color(app.color, th)}}.glyph{stroke:${color('bg', th)};color:${color('bg', th)}}.name{fill:${color('ink', th)}}`
  return header(w, S, withWordmark ? 'Atelier' : app.name) +
    `<style>${rule('light')}@media (prefers-color-scheme: dark){${rule('dark')}}</style>\n` +
    `<path class="tile" d="${LOGO_TILE}"/>\n` +
    `<g class="glyph" ${glyphAttrs}>${app.glyph}</g>\n` +
    (withWordmark ? `<path class="name" transform="translate(${n(S + brandGrid.gap)} ${n(S / 2 + WORDMARK.capHeight / 2)})" d="${WORDMARK.d}"/>\n` : '') +
    `</svg>\n`
}

const out = new URL('brand/', root)
rmSync(out, { recursive: true, force: true })
for (const dir of ['', 'mono/', 'color/']) mkdirSync(new URL(dir, out), { recursive: true })

const notice = '<!-- Généré par scripts/build-brand.mjs depuis src/brand.ts et tokens/tokens.json. Ne pas éditer à la main. -->\n'
const write = (path, svg) => writeFileSync(new URL(path, out), svg.replace('>\n', '>\n' + notice))

write('atelier-logo.svg', mono('atelier-logo', logoApps.atelier, true))
write('color/atelier-logo.svg', colored(logoApps.atelier, true))
for (const [id, app] of Object.entries(logoApps)) {
  write(`mono/${id}.svg`, mono(id, app))
  write(`color/${id}.svg`, colored(app))
}

const pub = new URL('playground/public/', root)
mkdirSync(pub, { recursive: true })
writeFileSync(new URL('favicon.svg', pub), colored(logoApps.atelier))

console.log(`brand: ${Object.keys(logoApps).length} apps → brand/mono, brand/color, brand/atelier-logo.svg, playground/public/favicon.svg`)
