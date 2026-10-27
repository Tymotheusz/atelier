/** Logique pure du fil de commentaires : dates relatives et mentions. */

const pad = (n: number) => String(n).padStart(2, '0')
const MONTHS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.']
const dayStart = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()

/** « à l'instant », « il y a 5 min », « il y a 2 h », « hier à 16:40 », « 12 oct. à 9:05 », « 12 oct. 2025 ». */
export function formatRelative(iso: string, now: Date = new Date()): string {
  const d = new Date(iso)
  if (isNaN(d.getTime())) return ''
  const s = Math.round((now.getTime() - d.getTime()) / 1000)
  const time = `${d.getHours()}:${pad(d.getMinutes())}`
  if (s < 45) return 'à l’instant'
  if (s < 3600) return `il y a ${Math.max(1, Math.round(s / 60))} min`
  const days = Math.round((dayStart(now) - dayStart(d)) / 86400000)
  if (days === 0) return `il y a ${Math.round(s / 3600)} h`
  if (days === 1) return `hier à ${time}`
  const date = `${d.getDate()} ${MONTHS[d.getMonth()]}`
  return d.getFullYear() === now.getFullYear() ? `${date} à ${time}` : `${date} ${d.getFullYear()}`
}

export interface TextPart { text: string; mention?: boolean }
/** Découpe un texte autour des mentions `@Prénom` des personnes connues (la plus longue d'abord). */
export function splitMentions(text: string, people: string[]): TextPart[] {
  const names = [...people].filter(Boolean).sort((a, b) => b.length - a.length)
  if (!names.length) return [{ text }]
  const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const re = new RegExp(`@(?:${names.map(esc).join('|')})(?![\\p{L}\\p{N}])`, 'gu')
  const out: TextPart[] = []
  let last = 0
  for (const m of text.matchAll(re)) {
    if (m.index! > last) out.push({ text: text.slice(last, m.index) })
    out.push({ text: m[0], mention: true })
    last = m.index! + m[0].length
  }
  if (last < text.length) out.push({ text: text.slice(last) })
  return out
}

/** Mention en cours de saisie juste avant le curseur : `@Ch|` → `{ start, query: 'Ch' }`. */
export function mentionAt(text: string, caret: number): { start: number; query: string } | null {
  const m = /(^|\s)@([\p{L}\p{N}-]*)$/u.exec(text.slice(0, caret))
  return m ? { start: caret - m[2].length - 1, query: m[2] } : null
}
