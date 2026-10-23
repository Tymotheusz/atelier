/** Coloration syntaxique minimale pour les extraits de la documentation (Vue et TypeScript). */

const ESC: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;' }
const esc = (s: string) => s.replace(/[&<>]/g, c => ESC[c])

const RE = new RegExp([
  '(?<c><!--[\\s\\S]*?-->|/\\*[\\s\\S]*?\\*/|(?<![:/\\w])//[^\\n]*)',
  '(?<s>"[^"\\n]*"|\'[^\'\\n]*\'|`[^`]*`)',
  '(?<i>\\{\\{[^{}]*\\}\\})',
  '(?<t></?[A-Za-z][\\w.-]*|(?<![=!<>])/?>)',
  '(?<a>[@:#]?[A-Za-z][\\w.-]*(?==))',
  '(?<k>\\b(?:import|export|default|from|const|let|function|return|interface|type|as|new|await|async|true|false|null|undefined)\\b)',
  '(?<n>\\b\\d+(?:[.,]\\d+)?\\b)'
].join('|'), 'g')

/** Retire l'indentation commune et les lignes vides de bord. */
export function dedent(code: string) {
  const lines = code.replace(/\t/g, '  ').split('\n')
  while (lines.length && !lines[0].trim()) lines.shift()
  while (lines.length && !lines[lines.length - 1].trim()) lines.pop()
  const pad = Math.min(...lines.filter(l => l.trim()).map(l => l.match(/^ */)![0].length))
  return lines.map(l => l.slice(pad)).join('\n')
}

/** Rend du HTML prêt à être inséré : le code est échappé puis enrobé de `<span class="hl-*">`. */
export function highlight(code: string) {
  let out = '', last = 0
  for (const m of code.matchAll(RE)) {
    const g = m.groups!
    const kind = (Object.keys(g) as (keyof typeof g)[]).find(k => g[k] != null)
    if (!kind) continue
    out += esc(code.slice(last, m.index))
    out += `<span class="hl-${String(kind)}">${esc(m[0])}</span>`
    last = m.index + m[0].length
  }
  return out + esc(code.slice(last))
}
