// Génère src/styles/tokens.css et src/tokens.ts à partir de tokens/tokens.json.
import { readFileSync, writeFileSync } from 'node:fs'

const t = JSON.parse(readFileSync(new URL('../tokens/tokens.json', import.meta.url), 'utf8'))
const themes = t.color.themes.map(th => th.id)
const [first, second] = themes
const val = (tok, theme) => (typeof tok.value === 'string' ? tok.value : (tok.value[theme] ?? tok.value[first]))
const css = v => String(v).replace(/^\{(.+)\}$/, 'var(--$1)')

const themed = [...t.color.tokens, ...(t.shadow?.tokens ?? [])]
const decl = theme => themed.map(tok => `  --${tok.name}: ${css(val(tok, theme))};`).join('\n')

const scalar = []
for (const [fam, block] of Object.entries(t)) {
  if (['name', 'version', 'color', 'type', 'shadow'].includes(fam) || !block?.tokens) continue
  for (const tok of block.tokens) scalar.push(`  --${tok.name}: ${tok.value};`)
}
for (const [k, v] of Object.entries(t.type.families)) scalar.push(`  --font-${k}: ${v};`)

const faces = t.type.fonts.map(f => `@font-face {
  font-family: "${f.family}";
  src: url("../fonts/${f.file.split('/').pop()}") format("woff2");
  font-weight: ${f.weight};
  font-style: ${f.style ?? 'normal'};
  font-display: swap;
}`).join('\n')

const styles = t.type.groups.flatMap(g => g.styles.map(s => {
  const fam = s.family ?? g.family
  return `.${s.name} { font-family: var(--font-${fam}); font-size: ${s.fontSize}; line-height: ${s.lineHeight}; font-weight: ${s.fontWeight};${s.letterSpacing ? ` letter-spacing: ${s.letterSpacing};` : ''}${s.name === 't-overline' ? ' text-transform: uppercase;' : ''}${s.name === 't-stat' ? ' font-variant-numeric: tabular-nums;' : ''} }`
})).join('\n')

const out = `/* ${t.name} — généré depuis tokens/tokens.json par scripts/build-tokens.mjs. Ne pas éditer à la main. */
${faces}

:root, [data-theme="${first}"] {
${decl(first)}
${scalar.join('\n')}
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="${first}"]) {
${decl(second).replace(/^/gm, '  ')}
    color-scheme: dark;
  }
}

[data-theme="${second}"] {
${decl(second)}
  color-scheme: dark;
}

/* Styles typographiques */
${styles}
`
writeFileSync(new URL('../src/styles/tokens.css', import.meta.url), out)

const ts = `// Généré depuis tokens/tokens.json par scripts/build-tokens.mjs. Ne pas éditer à la main.
export const tokens = ${JSON.stringify(t, null, 2)} as const

export type ColorToken = ${t.color.tokens.map(c => `'${c.name}'`).join(' | ')}

/** Référence CSS d'un token : cssVar('accent') → 'var(--accent)'. */
export const cssVar = (name: string) => \`var(--\${name})\`

/** Couleurs de séries pour les graphiques, dans l'ordre d'usage. */
export const chartColors = ['chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5'].map(cssVar)
`
writeFileSync(new URL('../src/tokens.ts', import.meta.url), ts)
console.log(`tokens: ${t.color.tokens.length} couleurs, ${scalar.length} valeurs, ${t.type.groups.reduce((a, g) => a + g.styles.length, 0)} styles`)
