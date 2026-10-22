import type { Property, PropertyOption, View, FilterRule, FilterOp, Layout } from './types'

export const NONE = '__none'

const pad = (n: number) => String(n).padStart(2, '0')
export const toISODate = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
export const today = () => toISODate(new Date())
export const addDays = (iso: string, n: number) => { const d = new Date(iso + 'T00:00'); d.setDate(d.getDate() + n); return toISODate(d) }

export const uid = () => Math.random().toString(36).slice(2, 10)
export const isEmpty = (v: unknown) => v == null || v === '' || (Array.isArray(v) && v.length === 0)

export const getValue = <R>(row: R, p: Property<R>) => (p.compute ? p.compute(row) : (row as any)[p.key])
export const optionsOf = <R>(p: Property<R>, row?: R): PropertyOption[] => (typeof p.options === 'function' ? p.options(row) : p.options ?? [])
export const findOption = <R>(p: Property<R>, row: R | undefined, v: unknown) => optionsOf(p, row).find(o => o.value === v)
export const isEditable = (p: Property) => !p.compute && !p.readonly && p.type !== 'progress'
export const OPTION_TYPES = ['status', 'select', 'relation', 'person'] as const
export const isOptionType = (p: Property) => (OPTION_TYPES as readonly string[]).includes(p.type)

export const TYPE_ICON: Record<string, string> = {
  title: 'text', text: 'text', status: 'status', select: 'select', multi: 'tags', person: 'person',
  relation: 'link', date: 'calendar', number: 'hash', progress: 'progress', checkbox: 'checkbox'
}
export const typeIcon = (p: Property) => p.icon ?? TYPE_ICON[p.type] ?? 'text'

export const LAYOUTS: { value: Layout; label: string; icon: string }[] = [
  { value: 'table', label: 'Tableau', icon: 'table' },
  { value: 'board', label: 'Board', icon: 'board' },
  { value: 'list', label: 'Liste', icon: 'list' },
  { value: 'calendar', label: 'Calendrier', icon: 'calendar' }
]

export const OPS: Record<string, FilterOp[]> = {
  title: ['contains', 'notcontains', 'empty', 'notempty'],
  text: ['contains', 'notcontains', 'empty', 'notempty'],
  status: ['is', 'isnot', 'empty', 'notempty'],
  select: ['is', 'isnot', 'empty', 'notempty'],
  relation: ['is', 'isnot', 'empty', 'notempty'],
  person: ['is', 'isnot', 'empty', 'notempty'],
  multi: ['contains', 'notcontains', 'empty', 'notempty'],
  date: ['past', 'week', 'before', 'after', 'is', 'empty', 'notempty'],
  number: ['eq', 'gt', 'lt', 'empty', 'notempty'],
  progress: ['eq', 'gt', 'lt'],
  checkbox: ['checked', 'unchecked']
}
export const OP_LABEL: Record<FilterOp, string> = {
  contains: 'contient', notcontains: 'ne contient pas', empty: 'est vide', notempty: 'n’est pas vide',
  is: 'est', isnot: 'n’est pas', before: 'avant le', after: 'après le', past: 'est dépassée',
  week: 'dans les 7 jours', eq: '=', gt: '>', lt: '<', checked: 'est cochée', unchecked: 'n’est pas cochée'
}
export const NO_VALUE: FilterOp[] = ['empty', 'notempty', 'past', 'week', 'checked', 'unchecked']

export function matchRule<R>(row: R, p: Property<R>, r: FilterRule, now = today()): boolean {
  const v = getValue(row, p) as any
  if (!NO_VALUE.includes(r.op) && isEmpty(r.value)) return true // règle incomplète : ignorée
  const s = (x: unknown) => String(x ?? '').toLowerCase()
  switch (r.op) {
    case 'empty': return isEmpty(v)
    case 'notempty': return !isEmpty(v)
    case 'contains': return p.type === 'multi' ? (v ?? []).includes(r.value) : s(v).includes(s(r.value))
    case 'notcontains': return p.type === 'multi' ? !(v ?? []).includes(r.value) : !s(v).includes(s(r.value))
    case 'is': return v === r.value
    case 'isnot': return v !== r.value
    case 'before': return !!v && v < r.value
    case 'after': return !!v && v > r.value
    case 'past': return !!v && v < now
    case 'week': return !!v && v >= now && v <= addDays(now, 7)
    case 'eq': return Number(v) === Number(r.value)
    case 'gt': return Number(v) > Number(r.value)
    case 'lt': return Number(v) < Number(r.value)
    case 'checked': return !!v
    case 'unchecked': return !v
  }
  return true
}

export function compareRows<R>(p: Property<R>, a: R, b: R): number {
  const va = getValue(a, p) as any, vb = getValue(b, p) as any
  const ea = isEmpty(va), eb = isEmpty(vb)
  if (ea || eb) return ea === eb ? 0 : ea ? 1 : -1 // vides en dernier
  if (isOptionType(p)) { const o = optionsOf(p).map(x => x.value); return o.indexOf(va) - o.indexOf(vb) }
  if (p.type === 'number' || p.type === 'progress') return va - vb
  if (p.type === 'checkbox') return Number(vb) - Number(va)
  if (p.type === 'multi') return va.length - vb.length
  return String(va).localeCompare(String(vb), 'fr')
}

/** Recherche plein texte sur le titre + filtres (ET) + tris successifs. */
export function applyView<R>(rows: R[], schema: Property<R>[], view: View, search = ''): R[] {
  const map = Object.fromEntries(schema.map(p => [p.key, p]))
  const title = schema.find(p => p.type === 'title')
  const q = search.trim().toLowerCase()
  const out = rows.filter(r =>
    (!q || !title || String((r as any)[title.key] ?? '').toLowerCase().includes(q)) &&
    view.filters.every(f => !map[f.prop] || matchRule(r, map[f.prop], f)))
  const sorts = view.sorts.filter(s => map[s.prop])
  if (!sorts.length) return out
  return out.sort((a, b) => {
    for (const s of sorts) {
      const p = map[s.prop]
      const ea = isEmpty(getValue(a, p)), eb = isEmpty(getValue(b, p))
      if (ea !== eb) return ea ? 1 : -1 // vides en dernier, quel que soit le sens
      if (ea) continue
      const c = compareRows(p, a, b); if (c) return s.dir === 'desc' ? -c : c
    }
    return 0
  })
}

export interface Group<R> { key: string; option: PropertyOption | null; rows: R[] }

/** Regroupe selon une propriété à options. `keepEmpty` garde les groupes vides (colonnes de board). */
export function groupRows<R>(rows: R[], p: Property<R> | null, keepEmpty = false): Group<R>[] {
  if (!p) return [{ key: NONE, option: null, rows }]
  const groups: Group<R>[] = optionsOf(p).map(o => ({ key: o.value, option: o, rows: [] }))
  const none: Group<R> = { key: NONE, option: null, rows: [] }
  const idx = Object.fromEntries(groups.map(g => [g.key, g]))
  for (const r of rows) (idx[getValue(r, p) as string] ?? none).rows.push(r)
  if (none.rows.length || keepEmpty) groups.push(none)
  return keepEmpty ? groups : groups.filter(g => g.rows.length)
}

/** Jours d'une grille de mois (lundi en premier), 5 ou 6 semaines. */
export function monthGrid(month: string) {
  const [y, m] = month.split('-').map(Number)
  const first = new Date(y, m - 1, 1)
  const dow = (first.getDay() + 6) % 7
  const days: { iso: string; day: number; outside: boolean }[] = []
  for (let i = 0; i < 42; i++) {
    const d = new Date(y, m - 1, 1 - dow + i)
    days.push({ iso: toISODate(d), day: d.getDate(), outside: d.getMonth() !== m - 1 })
  }
  return days[35].outside ? days.slice(0, 35) : days
}
export const shiftMonth = (month: string, n: number) => { const [y, m] = month.split('-').map(Number); const d = new Date(y, m - 1 + n, 1); return `${d.getFullYear()}-${pad(d.getMonth() + 1)}` }

export function createView(name: string, layout: Layout = 'table', extra: Partial<View> = {}): View {
  return { id: uid(), name, layout, filters: [], sorts: [], groupBy: null, dateProp: null, hidden: [], order: [], widths: {}, collapsed: [], month: null, ...extra }
}
export const filter = (prop: string, op: FilterOp, value = ''): FilterRule => ({ id: uid(), prop, op, value })
export const sort = (prop: string, dir: 'asc' | 'desc' = 'asc') => ({ id: uid(), prop, dir })

/** Valeurs par défaut d'une nouvelle ligne déduites des filtres « est » / « contient » de la vue. */
export function defaultsFromFilters<R>(view: View, schema: Property<R>[]) {
  const d: Record<string, unknown> = {}
  for (const f of view.filters) {
    const p = schema.find(x => x.key === f.prop)
    if (!p || !isEditable(p) || isEmpty(f.value)) continue
    if (f.op === 'is') d[f.prop] = f.value
    if (f.op === 'contains' && p.type === 'multi') d[f.prop] = [f.value]
  }
  return d
}

const fmtShort = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short' })
const fmtLong = new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
export const fmtNumber = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 1 })
export function formatDate(iso?: string | null) {
  if (!iso) return ''
  const d = new Date(iso + 'T00:00')
  return (d.getFullYear() === new Date().getFullYear() ? fmtShort : fmtLong).format(d)
}
export const formatMonth = (month: string) => { const [y, m] = month.split('-').map(Number); return new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(new Date(y, m - 1, 1)) }
