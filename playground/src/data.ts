import { reactive, computed, watch } from 'vue'
import { addDays, today, uid, createView, filter, sort, type Property, type PropertyOption, type View } from '@tymotheusz/atelier'

export interface Project { id: string; name: string; status: string; category: string; owner: string | null; start: string | null; end: string | null; color: string; icon: string; desc: string }
export interface Milestone { id: string; projectId: string; name: string; status: string; due: string | null; goal: string }
export interface Task { id: string; projectId: string; milestoneId: string | null; title: string; status: string; priority: string; assignee: string | null; due: string | null; estimate: number | null; tags: string[]; done: boolean; desc: string }
export type Coll = 'projects' | 'milestones' | 'tasks'

const d = (n: number | null) => (n == null ? null : addDays(today(), n))

/* ---------- Options ---------- */
export const STATUS_TASK: PropertyOption[] = [
  { value: 'todo', label: 'À faire', tone: 'neutral' }, { value: 'doing', label: 'En cours', tone: 'info' },
  { value: 'blocked', label: 'Bloqué', tone: 'danger' }, { value: 'review', label: 'En revue', tone: 'warning' },
  { value: 'done', label: 'Terminé', tone: 'success' }]
const STATUS_PROJECT: PropertyOption[] = [
  { value: 'planned', label: 'Planifié', tone: 'neutral' }, { value: 'active', label: 'Actif', tone: 'info' },
  { value: 'paused', label: 'En pause', tone: 'warning' }, { value: 'done', label: 'Terminé', tone: 'success' }]
const STATUS_MS: PropertyOption[] = [
  { value: 'todo', label: 'À venir', tone: 'neutral' }, { value: 'doing', label: 'En cours', tone: 'info' }, { value: 'done', label: 'Atteint', tone: 'success' }]
const PRIO: PropertyOption[] = [
  { value: 'low', label: 'Basse', color: 'gray' }, { value: 'med', label: 'Moyenne', color: 'yellow' },
  { value: 'high', label: 'Haute', color: 'orange' }, { value: 'urgent', label: 'Urgente', color: 'red' }]
const TAGS: PropertyOption[] = [
  { value: 'front', label: 'Front', color: 'blue' }, { value: 'back', label: 'Back', color: 'purple' },
  { value: 'design', label: 'Design', color: 'pink' }, { value: 'contenu', label: 'Contenu', color: 'brown' },
  { value: 'infra', label: 'Infra', color: 'gray' }, { value: 'bug', label: 'Bug', color: 'red' }]
const CATS: PropertyOption[] = [{ value: 'perso', label: 'Perso', color: 'blue' }, { value: 'side', label: 'Side project', color: 'purple' }, { value: 'pro', label: 'Pro', color: 'orange' }]
const PEOPLE: PropertyOption[] = [{ value: 'u1', label: 'Timothée' }, { value: 'u2', label: 'Marie' }, { value: 'u3', label: 'Lucas' }]

/* ---------- Données d'exemple ---------- */
function seed() {
  const projects: Project[] = [
    { id: 'p1', name: 'Atelier DS', status: 'active', category: 'perso', owner: 'u1', start: d(-24), end: d(40), color: 'chart-1', icon: 'layers', desc: 'Design system : tokens, CSS et composants Vue.' },
    { id: 'p2', name: 'missel.fr v2', status: 'active', category: 'side', owner: 'u1', start: d(-45), end: d(25), color: 'chart-2', icon: 'book', desc: 'Nouvelle maquette, éditeur de livret et offre payante.' },
    { id: 'p3', name: 'Blog technique', status: 'planned', category: 'perso', owner: 'u1', start: d(10), end: d(70), color: 'chart-3', icon: 'pen', desc: 'Retours d’expérience et notes techniques.' }
  ]
  const milestones: Milestone[] = [
    { id: 'm1', projectId: 'p1', name: 'Fondations', status: 'done', due: d(-5), goal: 'Tokens, typographie et contrastes validés.' },
    { id: 'm2', projectId: 'p1', name: 'Composants Vue', status: 'doing', due: d(18), goal: 'Table, Board, Menu, Select, DatePicker.' },
    { id: 'm3', projectId: 'p1', name: 'Documentation', status: 'todo', due: d(40), goal: '' },
    { id: 'm4', projectId: 'p2', name: 'Éditeur de livret', status: 'doing', due: d(12), goal: 'Composer et exporter un livret en PDF.' },
    { id: 'm5', projectId: 'p2', name: 'Lancement', status: 'todo', due: d(25), goal: '' },
    { id: 'm6', projectId: 'p3', name: 'Premiers articles', status: 'todo', due: d(45), goal: '' }
  ]
  const T = (projectId: string, milestoneId: string | null, title: string, status: string, priority: string, assignee: string | null, due: number | null, estimate: number | null, tags: string[]): Task =>
    ({ id: uid(), projectId, milestoneId, title, status, priority, assignee, due: d(due), estimate, tags, done: status === 'done', desc: '' })
  const tasks: Task[] = [
    T('p1', 'm1', 'Définir les tokens de couleur', 'done', 'high', 'u1', -12, 4, ['design']),
    T('p1', 'm1', 'Contrastes clair / sombre', 'done', 'high', 'u1', -6, 2, ['design']),
    T('p1', 'm2', 'Composant DataView', 'doing', 'urgent', 'u1', 3, 10, ['front']),
    T('p1', 'm2', 'Popover et Menu', 'review', 'high', 'u1', 1, 6, ['front']),
    T('p1', 'm2', 'Select avec recherche', 'todo', 'med', 'u1', 10, 5, ['front']),
    T('p1', 'm2', 'DatePicker', 'todo', 'low', null, 16, 4, ['front']),
    T('p1', 'm3', 'Site de documentation', 'todo', 'med', 'u1', 35, 8, ['contenu', 'front']),
    T('p2', 'm4', 'Export PDF du livret', 'doing', 'urgent', 'u1', 2, 8, ['back']),
    T('p2', 'm4', 'Glisser-déposer des lectures', 'blocked', 'high', 'u1', -2, 5, ['front']),
    T('p2', 'm4', 'Relecture des textes propres', 'todo', 'med', 'u2', 8, 3, ['contenu']),
    T('p2', 'm5', 'Page tarifs', 'todo', 'med', 'u1', 20, 3, ['front', 'contenu']),
    T('p2', 'm5', 'Configurer le paiement', 'todo', 'high', 'u1', 22, 4, ['back']),
    T('p3', 'm6', 'Choisir le générateur statique', 'todo', 'med', 'u1', 12, 2, ['infra']),
    T('p3', 'm6', 'Article : pourquoi un DS perso', 'todo', 'med', 'u1', 30, 4, ['contenu'])
  ]
  return { projects, milestones, tasks }
}

function defaultViews(): Record<string, View[]> {
  return {
    projects: [createView('Tous les projets', 'table', { hidden: ['start'] }), createView('Par statut', 'board', { groupBy: 'status', hidden: ['start', 'end', 'owner'] })],
    tasks: [
      createView('Par projet', 'table', { groupBy: 'projectId', hidden: ['tags', 'done'] }),
      createView('Kanban', 'board', { groupBy: 'status', hidden: ['status', 'milestoneId', 'estimate', 'done'] }),
      createView('Calendrier', 'calendar'),
      createView('En retard', 'list', { filters: [filter('due', 'past'), filter('status', 'isnot', 'done')], sorts: [sort('due')], hidden: ['tags', 'estimate', 'done'] })
    ],
    projectTasks: [
      createView('Tableau', 'table', { groupBy: 'milestoneId', hidden: ['done'] }),
      createView('Board', 'board', { groupBy: 'status', hidden: ['status', 'milestoneId', 'estimate', 'done'] }),
      createView('Calendrier', 'calendar'),
      createView('Mes tâches', 'list', { filters: [filter('assignee', 'is', 'u1'), filter('status', 'isnot', 'done')], sorts: [sort('due')], hidden: ['assignee', 'tags', 'done'] })
    ],
    milestones: [createView('Toutes', 'table', { sorts: [sort('due')] }), createView('Calendrier', 'calendar')]
  }
}

/** Icônes proposées pour un projet. */
export const PROJECT_ICONS = ['folder', 'layers', 'book', 'pen', 'palette', 'code', 'globe', 'box', 'bolt', 'star', 'chart', 'doc', 'calendar', 'flag']
export const PROJECT_COLORS = ['chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5'] as const

/* ---------- Store persistant (navigateur) ---------- */
const KEY = 'atelier-playground-v1'
function load() { try { const r = localStorage.getItem(KEY); return r ? JSON.parse(r) : null } catch { return null } }
function fresh() {
  const views = defaultViews()
  return { ...seed(), views, active: Object.fromEntries(Object.entries(views).map(([k, v]) => [k, v[0].id])) as Record<string, string> }
}
export const store = reactive<ReturnType<typeof fresh>>({ ...fresh(), ...(load() ?? {}) })
watch(store, s => { try { localStorage.setItem(KEY, JSON.stringify(s)) } catch { /* indisponible */ } }, { deep: true })
export function reset() { try { localStorage.removeItem(KEY) } catch { /* */ } Object.assign(store, fresh()) }

export const openTasks = computed(() => store.tasks.filter(t => t.status !== 'done'))
export const tasksOf = (pid: string) => store.tasks.filter(t => t.projectId === pid)
export const progressOf = (list: Task[]) => (list.length ? Math.round((100 * list.filter(t => t.status === 'done').length) / list.length) : 0)

/* ---------- Schémas ---------- */
export function taskSchema(projectId?: string): Property<Task>[] {
  const s: Property<Task>[] = [
    { key: 'title', name: 'Nom', type: 'title', width: 300 },
    { key: 'status', name: 'Statut', type: 'status', options: STATUS_TASK, width: 130 },
    { key: 'priority', name: 'Priorité', type: 'select', options: PRIO, width: 120 }
  ]
  if (!projectId) s.push({ key: 'projectId', name: 'Projet', type: 'relation', width: 170, required: true, options: () => store.projects.map(p => ({ value: p.id, label: p.name || 'Sans titre', mark: `var(--${p.color})` })) })
  s.push(
    { key: 'milestoneId', name: 'Milestone', type: 'relation', icon: 'flag', width: 180, options: row => store.milestones.filter(m => m.projectId === (row?.projectId ?? projectId) || (!row && !projectId)).map(m => ({ value: m.id, label: m.name || 'Sans titre' })) },
    { key: 'assignee', name: 'Assigné à', type: 'person', options: PEOPLE, width: 140 },
    { key: 'due', name: 'Échéance', type: 'date', width: 120, overdue: r => !!r.due && r.due < today() && r.status !== 'done' },
    { key: 'estimate', name: 'Estimation', type: 'number', suffix: ' h', width: 110 },
    { key: 'tags', name: 'Étiquettes', type: 'multi', options: TAGS, width: 180 },
    { key: 'done', name: 'Fait', type: 'checkbox', width: 70 })
  return s
}
export const projectSchema: Property<Project>[] = [
  { key: 'name', name: 'Nom', type: 'title', width: 240 },
  { key: 'status', name: 'Statut', type: 'status', options: STATUS_PROJECT, width: 120 },
  { key: 'category', name: 'Catégorie', type: 'select', options: CATS, width: 130 },
  { key: 'owner', name: 'Responsable', type: 'person', options: PEOPLE, width: 140 },
  { key: 'progress', name: 'Avancement', type: 'progress', width: 170, compute: r => progressOf(tasksOf(r.id)) },
  { key: 'open', name: 'Tâches ouvertes', type: 'number', width: 130, compute: r => tasksOf(r.id).filter(t => t.status !== 'done').length },
  { key: 'start', name: 'Début', type: 'date', width: 110 },
  { key: 'end', name: 'Fin', type: 'date', width: 110, overdue: r => !!r.end && r.end < today() && r.status !== 'done' }
]
export const milestoneSchema: Property<Milestone>[] = [
  { key: 'name', name: 'Nom', type: 'title', width: 240 },
  { key: 'status', name: 'Statut', type: 'status', options: STATUS_MS, width: 120 },
  { key: 'due', name: 'Échéance', type: 'date', width: 120, overdue: r => !!r.due && r.due < today() && r.status !== 'done' },
  { key: 'progress', name: 'Avancement', type: 'progress', width: 170, compute: r => progressOf(store.tasks.filter(t => t.milestoneId === r.id)) },
  { key: 'count', name: 'Tâches', type: 'number', width: 90, compute: r => store.tasks.filter(t => t.milestoneId === r.id).length },
  { key: 'goal', name: 'Objectif', type: 'text', width: 280 }
]

/* ---------- Mutations ---------- */
export function update(coll: Coll, row: any, key: string, value: unknown) {
  row[key] = value
  if (coll === 'tasks') {
    if (key === 'done') row.status = value ? 'done' : (row.status === 'done' ? 'todo' : row.status)
    if (key === 'status') row.done = value === 'done'
    if (key === 'milestoneId' && value) { const m = store.milestones.find(x => x.id === value); if (m) row.projectId = m.projectId }
    if (key === 'projectId') { const m = store.milestones.find(x => x.id === row.milestoneId); if (m && m.projectId !== value) row.milestoneId = null }
  }
}
export function create(coll: Coll, defaults: Record<string, unknown>): any {
  let r: any
  if (coll === 'tasks') r = { id: uid(), projectId: store.projects[0]?.id, milestoneId: null, title: '', status: 'todo', priority: 'med', assignee: 'u1', due: null, estimate: null, tags: [], done: false, desc: '' }
  else if (coll === 'projects') r = { id: uid(), name: '', status: 'planned', category: 'perso', owner: 'u1', start: today(), end: null, color: `chart-${(store.projects.length % 5) + 1}`, icon: 'folder', desc: '' }
  else r = { id: uid(), projectId: '', name: '', status: 'todo', due: null, goal: '' }
  Object.assign(r, defaults)
  if (coll === 'tasks' && r.milestoneId) { const m = store.milestones.find(x => x.id === r.milestoneId); if (m) r.projectId = m.projectId }
  ;(store[coll] as any[]).push(r)
  return store[coll].find((x: any) => x.id === r.id)
}
export function remove(coll: Coll, ids: string[]) {
  const set = new Set(ids)
  if (coll === 'projects') { store.tasks = store.tasks.filter(t => !set.has(t.projectId)); store.milestones = store.milestones.filter(m => !set.has(m.projectId)) }
  if (coll === 'milestones') store.tasks.forEach(t => { if (t.milestoneId && set.has(t.milestoneId)) t.milestoneId = null })
  ;(store as any)[coll] = (store[coll] as any[]).filter(r => !set.has(r.id))
}
