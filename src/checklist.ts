/**
 * Pure logic of AtChecklist and AtTimer: ordering of the steps, next step, hidden steps, durations.
 * No Vue here, so it is tested on its own (tests/checklist.test.ts).
 */

/** État d'une étape de checklist. */
export type ChecklistState = 'todo' | 'done' | 'skipped'

/** Étape d'une checklist (`AtChecklist`). */
export interface ChecklistItem {
  id: string
  title: string
  /** Lien de l'étape : affiche le bouton « Ouvrir », et Entrée émet `open`. */
  href?: string | null
  /** Texte simple affiché sous l'étape courante (retours à la ligne gardés). */
  note?: string
  /** Identifiant du groupe (`ChecklistGroup.id`). */
  group?: string | null
  state: ChecklistState
}

/** Intertitre d'une checklist : regroupe les étapes dont `group` vaut `id`. */
export interface ChecklistGroup {
  id: string
  label: string
  hint?: string
}

/**
 * Steps in display order: groups in the order of `groups`, the items of each group in array order,
 * then the items without a known group. Without `groups`, the array order.
 */
export function orderChecklist(items: ChecklistItem[], groups?: ChecklistGroup[] | null): ChecklistItem[] {
  if (!groups?.length) return items.slice()
  const known = new Set(groups.map(g => g.id))
  const out: ChecklistItem[] = []
  for (const g of groups) for (const it of items) if (it.group === g.id) out.push(it)
  for (const it of items) if (it.group == null || !known.has(it.group)) out.push(it)
  return out
}

/**
 * Step that becomes current once `fromId` is no longer to do: the next `todo` after it,
 * otherwise the first `todo` of the list, otherwise null. `fromId` itself is never returned.
 */
export function nextTodo(ordered: ChecklistItem[], fromId: string | null): string | null {
  const i = fromId == null ? -1 : ordered.findIndex(it => it.id === fromId)
  const todo = (it: ChecklistItem) => it.state === 'todo' && it.id !== fromId
  for (let j = i + 1; j < ordered.length; j++) if (todo(ordered[j])) return ordered[j].id
  for (let j = 0; j < ordered.length; j++) if (todo(ordered[j])) return ordered[j].id
  return null
}

/**
 * Ids of the steps folded away by `collapseDone`: the done or skipped steps placed before the current one
 * (before the end of the list if there is none), except the `keep` last of them.
 */
export function collapsedIds(ordered: ChecklistItem[], current: string | null | undefined, keep: number | null | undefined): Set<string> {
  const hidden = new Set<string>()
  if (keep == null || keep < 0) return hidden
  let end = current == null ? -1 : ordered.findIndex(it => it.id === current)
  if (end < 0) end = ordered.length
  const finished = ordered.slice(0, end).filter(it => it.state !== 'todo')
  for (const it of finished.slice(0, Math.max(0, finished.length - Math.floor(keep)))) hidden.add(it.id)
  return hidden
}

/** Durée lisible : `m:ss`, `h:mm:ss` au-delà d'une heure ; négatif ou invalide → `0:00`. */
export function formatDuration(seconds: number): string {
  const s = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = String(s % 60).padStart(2, '0')
  return h ? `${h}:${String(m).padStart(2, '0')}:${sec}` : `${m}:${sec}`
}
