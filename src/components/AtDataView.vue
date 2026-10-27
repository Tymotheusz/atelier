<script setup lang="ts" generic="R extends Record<string, any>">
/**
 * Vue de données personnalisable, à la Notion : vues enregistrées (tableau, board, liste, calendrier),
 * filtres, tris, regroupement, propriétés visibles et ordonnées, édition en place.
 *
 * Le composant ne modifie jamais `rows` : il émet `update`, `create`, `open` et `delete`,
 * le parent applique. Les vues (`v-model:views`, `v-model:active-view`) sont, elles, modifiées en place.
 */
import { computed, ref, shallowRef, watch, nextTick } from 'vue'
import AtIcon from './AtIcon.vue'
import AtButton from './AtButton.vue'
import AtPopover from './AtPopover.vue'
import AtPropertyValue from './AtPropertyValue.vue'
import AtPropertyEditor from './AtPropertyEditor.vue'
import type { Property, View, Layout, FilterRule } from '../dataview/types'
import {
  NONE, LAYOUTS, OPS, OP_LABEL, NO_VALUE, applyView, groupRows, monthGrid, shiftMonth, createView,
  defaultsFromFilters, getValue, isEmpty, isEditable, isOptionType, optionsOf, findOption, typeIcon,
  formatDate, formatMonth, fmtNumber, uid, today
} from '../dataview/logic'

const props = withDefaults(defineProps<{
  rows: R[]
  schema: Property<R>[]
  rowKey?: string
  newLabel?: string
  /** Masque la barre de vues (une seule vue imposée). */
  hideViews?: boolean
  /** Filtrer, Trier, Grouper et Propriétés en pictogramme seul (libellé en infobulle). Activé par défaut ; `false` affiche les libellés. */
  iconTools?: boolean
  /** Interdit d'ajouter, de dupliquer ou de supprimer une vue ; les vues restent paramétrables. */
  lockViews?: boolean
}>(), { rowKey: 'id', newLabel: 'Nouveau', iconTools: true })

const views = defineModel<View[]>('views', { default: () => [createView('Tableau', 'table')] })
const activeView = defineModel<string>('activeView', { default: '' })

const emit = defineEmits<{
  update: [row: R, key: string, value: unknown]
  create: [defaults: Partial<R>]
  open: [row: R]
  delete: [rows: R[]]
}>()

const id = (r: R) => r[props.rowKey] as string | number
const view = computed<View>(() => views.value.find(v => v.id === activeView.value) ?? views.value[0])
const pmap = computed(() => Object.fromEntries(props.schema.map(p => [p.key, p])) as Record<string, Property<R>>)
const titleProp = computed(() => props.schema.find(p => p.type === 'title'))
const tk = computed(() => titleProp.value?.key ?? props.rowKey)

const ordered = computed(() => {
  const keys = (view.value.order ?? []).filter(k => pmap.value[k])
  for (const p of props.schema) if (!keys.includes(p.key)) keys.push(p.key)
  const t = keys.indexOf(tk.value); if (t > 0) { keys.splice(t, 1); keys.unshift(tk.value) }
  return keys.map(k => pmap.value[k])
})
const visible = computed(() => ordered.value.filter(p => p.type === 'title' || !view.value.hidden.includes(p.key)))
const others = computed(() => visible.value.filter(p => p.type !== 'title'))
const groupable = computed(() => props.schema.filter(isOptionType))
const dateProps = computed(() => props.schema.filter(p => p.type === 'date'))
const statusProp = computed(() => props.schema.find(p => p.type === 'status'))

const search = ref('')
const sorted = computed(() => applyView(props.rows, props.schema, view.value, search.value))
const groupKey = computed(() => {
  const g = view.value.groupBy && pmap.value[view.value.groupBy] ? view.value.groupBy : null
  if (view.value.layout === 'board' && !g) return statusProp.value?.key ?? groupable.value[0]?.key ?? null
  return g
})
const gprop = computed(() => (groupKey.value && view.value.layout !== 'calendar' ? pmap.value[groupKey.value] : null))
const groups = computed(() => groupRows(sorted.value, gprop.value, view.value.layout === 'board'))
const groupRow = (key: string) => ({ [groupKey.value as string]: key === NONE ? null : key }) as Partial<R>
const activeFilters = computed(() => view.value.filters.filter(f => pmap.value[f.prop]))
const activeSorts = computed(() => view.value.sorts.filter(s => pmap.value[s.prop]))

/* ---------- Vues ---------- */
const tabRefs = ref<Record<string, HTMLElement>>({})
const menu = ref<string | null>(null)
const anchor = ref<HTMLElement | null>(null)
function openMenu(kind: string, el: HTMLElement | null | undefined) {
  if (menu.value === kind && anchor.value === el) { menu.value = null; return }
  anchor.value = el ?? null; menu.value = kind
}
const menuOpen = (kind: string) => computed({ get: () => menu.value === kind, set: v => { if (!v && menu.value === kind) menu.value = null } })
const mAdd = menuOpen('add'), mFilter = menuOpen('filter'), mSort = menuOpen('sort'), mGroup = menuOpen('group'), mProps = menuOpen('props'), mSettings = menuOpen('settings')

function selectView(v: View) {
  if (v.id === view.value.id) openMenu('settings', tabRefs.value[v.id])
  else activeView.value = v.id
}
const defaultGroup = () => statusProp.value?.key ?? groupable.value[0]?.key ?? null
function addView(layout: Layout) {
  if (props.lockViews) return
  const v = createView(LAYOUTS.find(l => l.value === layout)!.label, layout, { groupBy: layout === 'board' ? defaultGroup() : null })
  views.value.push(v); activeView.value = v.id; menu.value = null
  nextTick(() => openMenu('settings', tabRefs.value[v.id]))
}
function setLayout(l: Layout) { view.value.layout = l; if (l === 'board' && !view.value.groupBy) view.value.groupBy = defaultGroup() }
function duplicateView() {
  if (props.lockViews) return
  const v: View = JSON.parse(JSON.stringify(view.value)); v.id = uid(); v.name = view.value.name + ' (copie)'
  views.value.push(v); activeView.value = v.id; menu.value = null
}
function deleteView() {
  if (props.lockViews || views.value.length < 2) return
  const i = views.value.indexOf(view.value); views.value.splice(i, 1)
  activeView.value = views.value[Math.max(0, i - 1)].id; menu.value = null
}
watch(() => view.value.id, () => { sel.value = []; menu.value = null })

/* ---------- Filtres et tris ---------- */
function addFilter() {
  const p = props.schema.find(x => x.type !== 'title' && x.type !== 'progress') ?? props.schema[0]
  view.value.filters.push({ id: uid(), prop: p.key, op: OPS[p.type][0], value: '' })
}
function filterPropChange(f: FilterRule) { f.op = OPS[pmap.value[f.prop].type][0]; f.value = '' }
const opsFor = (f: FilterRule) => OPS[pmap.value[f.prop]?.type] ?? []
const needsValue = (f: FilterRule) => !NO_VALUE.includes(f.op)
function valueKind(f: FilterRule) {
  const p = pmap.value[f.prop]
  if (!p) return 'text'
  if (isOptionType(p) || p.type === 'multi') return 'options'
  if (p.type === 'date') return 'date'
  if (p.type === 'number' || p.type === 'progress') return 'number'
  return 'text'
}
function summary(f: FilterRule) {
  const p = pmap.value[f.prop]; let val = ''
  if (needsValue(f)) {
    const k = valueKind(f)
    val = k === 'options' ? (findOption(p, undefined, f.value)?.label ?? '…') : k === 'date' ? (formatDate(f.value) || '…') : (f.value === '' ? '…' : f.value)
  }
  return { name: p.name, op: OP_LABEL[f.op], val }
}
function addSort() {
  const used = view.value.sorts.map(s => s.prop)
  const p = props.schema.find(x => !used.includes(x.key)) ?? props.schema[0]
  view.value.sorts.push({ id: uid(), prop: p.key, dir: 'asc' })
}
const removeFrom = <T,>(list: T[], item: T) => { const i = list.indexOf(item); if (i >= 0) list.splice(i, 1) }
function clearRules() { view.value.filters.splice(0); view.value.sorts.splice(0) }
function setGroup(k: string | null) { view.value.groupBy = k; view.value.collapsed = []; if (view.value.layout !== 'board') menu.value = null }

/* ---------- Propriétés ---------- */
function toggleHidden(p: Property) { const h = view.value.hidden; const i = h.indexOf(p.key); i < 0 ? h.push(p.key) : h.splice(i, 1) }
function showAll(on: boolean) { view.value.hidden = on ? [] : props.schema.filter(p => p.type !== 'title').map(p => p.key) }
const dragProp = ref<number | null>(null), dropProp = ref<number | null>(null)
function propDrop(j: number) {
  if (dragProp.value == null) return
  const keys = ordered.value.map(p => p.key)
  const [k] = keys.splice(dragProp.value, 1); keys.splice(j, 0, k)
  view.value.order = keys; dragProp.value = null; dropProp.value = null
}

/* ---------- Tableau ---------- */
const width = (p: Property) => view.value.widths[p.key] ?? p.width ?? 160
const tableWidth = computed(() => 36 + visible.value.reduce((s, p) => s + width(p), 0) + 44)
const resizing = ref<string | null>(null)
function startResize(e: MouseEvent, p: Property) {
  const x0 = e.clientX, w0 = width(p); resizing.value = p.key
  const mv = (ev: MouseEvent) => { view.value.widths[p.key] = Math.max(70, Math.round(w0 + ev.clientX - x0)) }
  const up = () => { resizing.value = null; window.removeEventListener('mousemove', mv); window.removeEventListener('mouseup', up) }
  window.addEventListener('mousemove', mv); window.addEventListener('mouseup', up)
}
const sel = ref<(string | number)[]>([])
const allSel = computed(() => sorted.value.length > 0 && sorted.value.every(r => sel.value.includes(id(r))))
const someSel = computed(() => sel.value.length > 0 && !allSel.value)
function toggleSel(r: R) { const i = sel.value.indexOf(id(r)); i < 0 ? sel.value.push(id(r)) : sel.value.splice(i, 1) }
function toggleAll() { sel.value = allSel.value ? [] : sorted.value.map(id) }
function bulkDelete() { emit('delete', props.rows.filter(r => sel.value.includes(id(r)))); sel.value = [] }
const isCollapsed = (key: string) => view.value.collapsed.includes(key)
function toggleGroup(key: string) { const c = view.value.collapsed; const i = c.indexOf(key); i < 0 ? c.push(key) : c.splice(i, 1) }
function calc(p: Property<R>) {
  const rs = sorted.value
  if (p.type === 'title') return { label: 'Total', value: String(rs.length) }
  if (p.type === 'number') return { label: 'Somme', value: fmtNumber.format(rs.reduce((a, r) => a + (Number(getValue(r, p)) || 0), 0)) + (p.suffix ?? '') }
  if (p.type === 'progress' && rs.length) return { label: 'Moyenne', value: Math.round(rs.reduce((a, r) => a + Number(getValue(r, p)), 0) / rs.length) + ' %' }
  if (p.type === 'date' && p.overdue) { const n = rs.filter(r => p.overdue!(r)).length; return n ? { label: 'En retard', value: String(n) } : null }
  if (p.type === 'checkbox') return { label: 'Cochées', value: String(rs.filter(r => getValue(r, p)).length) }
  return null
}

/* ---------- Édition ---------- */
const editor = shallowRef<{ row: R; prop: Property<R> } | null>(null)
const editorAnchor = ref<HTMLElement | null>(null)
const editorOpen = ref(false)
function cellClick(e: MouseEvent, r: R, p: Property<R>) {
  if (p.type === 'title') { emit('open', r); return }
  if (!isEditable(p)) return
  if (p.type === 'checkbox') { emit('update', r, p.key, !r[p.key]); return }
  editorAnchor.value = e.currentTarget as HTMLElement; editor.value = { row: r, prop: p }; editorOpen.value = true
}
function create(extra: Partial<R> = {}) { emit('create', { ...defaultsFromFilters(view.value, props.schema), ...extra } as Partial<R>) }

/* ---------- Glisser-déposer ---------- */
const dragId = ref<string | number | null>(null)
const dragOver = ref<string | null>(null)
function dragStart(e: DragEvent, r: R) { dragId.value = id(r); if (e.dataTransfer) { e.dataTransfer.effectAllowed = 'move'; e.dataTransfer.setData('text/plain', String(id(r))) } }
function dragEnd() { dragId.value = null; dragOver.value = null }
const dragged = () => props.rows.find(r => id(r) === dragId.value)
function dropGroup(key: string) { const r = dragged(); if (r && groupKey.value) emit('update', r, groupKey.value, key === NONE ? null : key); dragEnd() }
function dropDay(iso: string) { const r = dragged(); if (r && dateKey.value) emit('update', r, dateKey.value, iso); dragEnd() }

/* ---------- Calendrier ---------- */
const dateKey = computed(() => (view.value.dateProp && pmap.value[view.value.dateProp] ? view.value.dateProp : dateProps.value[0]?.key ?? null))
const month = computed(() => view.value.month ?? today().slice(0, 7))
const days = computed(() => monthGrid(month.value).map(d => ({ ...d, today: d.iso === today(), rows: dateKey.value ? sorted.value.filter(r => r[dateKey.value!] === d.iso) : [] })))
const undated = computed(() => (dateKey.value ? sorted.value.filter(r => !r[dateKey.value!]).length : 0))
const TONE: Record<string, string> = { neutral: 'var(--ink-subtle)', info: 'var(--info)', success: 'var(--success)', warning: 'var(--warning)', danger: 'var(--danger)' }
const toneOf = (r: R) => { const p = statusProp.value; const o = p ? findOption(p, r, r[p.key]) : undefined; return TONE[o?.tone ?? 'neutral'] }
const isDone = (r: R) => { const p = statusProp.value; if (!p) return false; const o = optionsOf(p, r); return o.length > 0 && r[p.key] === o[o.length - 1].value }
/** Attributs d'un bouton d'outil : en mode pictogramme, le libellé passe en aria-label et infobulle. */
const tool = (label: string, n = 0) => (props.iconTools
  ? { iconOnly: !n, label, title: label, 'aria-label': n ? `${label} (${n})` : label }
  : {})
const layoutIcon = (l: Layout) => LAYOUTS.find(x => x.value === l)?.icon ?? 'table'
const noneLabel = computed(() => (gprop.value ? `Sans ${gprop.value.name.toLowerCase()}` : ''))
</script>

<template>
  <section class="at-dv">
    <div class="at-dv-viewsbar">
      <template v-if="!hideViews">
        <div class="at-tabs" role="tablist" aria-label="Vues">
          <button
            v-for="v in views" :key="v.id" :ref="el => { if (el) tabRefs[v.id] = el as HTMLElement }"
            type="button" class="at-tab" role="tab" :aria-selected="v.id === view.id"
            :title="v.id === view.id ? 'Paramètres de la vue' : undefined" @click="selectView(v)"
          ><AtIcon :name="layoutIcon(v.layout)" />{{ v.name }}</button>
        </div>
        <AtButton v-if="!lockViews" variant="ghost" size="sm" icon="plus" icon-only label="Ajouter une vue" @click="openMenu('add', $event.currentTarget as HTMLElement)" />
      </template>
      <div class="at-toolbar at-dv-toolbar">
        <AtButton v-bind="tool('Filtrer', activeFilters.length)" variant="ghost" size="sm" icon="filter" :class="{ 'is-on': activeFilters.length }" @click="openMenu('filter', $event.currentTarget as HTMLElement)">
          <template v-if="!iconTools">Filtrer</template><span v-if="activeFilters.length" class="at-dv-n">{{ activeFilters.length }}</span>
        </AtButton>
        <AtButton v-bind="tool('Trier', activeSorts.length)" variant="ghost" size="sm" icon="sort" :class="{ 'is-on': activeSorts.length }" @click="openMenu('sort', $event.currentTarget as HTMLElement)">
          <template v-if="!iconTools">Trier</template><span v-if="activeSorts.length" class="at-dv-n">{{ activeSorts.length }}</span>
        </AtButton>
        <AtButton v-if="view.layout !== 'calendar'" v-bind="tool('Grouper')" variant="ghost" size="sm" icon="group" :class="{ 'is-on': view.groupBy }" @click="openMenu('group', $event.currentTarget as HTMLElement)">Grouper</AtButton>
        <AtButton v-bind="tool('Propriétés')" variant="ghost" size="sm" icon="eye" @click="openMenu('props', $event.currentTarget as HTMLElement)">Propriétés</AtButton>
        <div class="at-input-wrap at-dv-search"><AtIcon name="search" /><input v-model="search" class="at-input" placeholder="Rechercher" aria-label="Rechercher dans la vue"></div>
        <AtButton v-if="!hideViews" variant="ghost" size="sm" icon="sliders" icon-only label="Paramètres de la vue" @click="openMenu('settings', $event.currentTarget as HTMLElement)" />
        <AtButton variant="primary" size="sm" icon="plus" @click="create()">{{ newLabel }}</AtButton>
      </div>
    </div>

    <div v-if="activeFilters.length || activeSorts.length" class="at-dv-chips">
      <button v-for="f in activeFilters" :key="f.id" type="button" class="at-dv-chip" @click="openMenu('filter', $event.currentTarget as HTMLElement)">
        <AtIcon name="filter" />{{ summary(f).name }} {{ summary(f).op }} <b>{{ summary(f).val }}</b>
      </button>
      <button v-for="s in activeSorts" :key="s.id" type="button" class="at-dv-chip" @click="openMenu('sort', $event.currentTarget as HTMLElement)">
        <AtIcon name="sort" />{{ pmap[s.prop].name }} <b>{{ s.dir === 'asc' ? '↑' : '↓' }}</b>
      </button>
      <AtButton variant="ghost" size="sm" @click="clearRules">Tout effacer</AtButton>
    </div>

    <!-- ===== Tableau ===== -->
    <template v-if="view.layout === 'table'">
      <div class="at-table-wrap">
        <table class="at-table at-dv-table" :style="{ width: tableWidth + 'px', minWidth: '100%' }">
          <colgroup><col style="width: 36px"><col v-for="p in visible" :key="p.key" :style="{ width: width(p) + 'px' }"><col style="width: 44px"></colgroup>
          <thead>
            <tr>
              <th class="at-cell-check"><input type="checkbox" class="at-check" aria-label="Tout sélectionner" :checked="allSel" :indeterminate="someSel" @change="toggleAll"></th>
              <th v-for="p in visible" :key="p.key" :class="{ 'at-num': p.type === 'number' }">
                <span class="at-th"><AtIcon :name="typeIcon(p)" />{{ p.name }}</span>
                <span :class="['at-dv-resize', resizing === p.key && 'on']" aria-hidden="true" @mousedown.prevent="startResize($event, p)" />
              </th>
              <th class="at-cell-check"><AtButton variant="ghost" size="sm" icon="plus" icon-only label="Afficher des propriétés" @click="openMenu('props', $event.currentTarget as HTMLElement)" /></th>
            </tr>
          </thead>
          <tbody v-for="g in groups" :key="g.key">
            <tr v-if="gprop" class="at-dv-grouprow">
              <td :colspan="visible.length + 2">
                <button type="button" class="at-dv-grouphead" :aria-expanded="!isCollapsed(g.key)" @click="toggleGroup(g.key)">
                  <AtIcon name="chevron-down" :class="{ 'at-rot': isCollapsed(g.key) }" />
                  <AtPropertyValue v-if="g.option" :prop="gprop" :row="groupRow(g.key)" /><span v-else class="at-pv-empty">{{ noneLabel }}</span>
                  <span class="at-count">{{ g.rows.length }}</span>
                </button>
              </td>
            </tr>
            <template v-if="!isCollapsed(g.key)">
              <tr v-for="r in g.rows" :key="id(r)" :aria-selected="sel.includes(id(r)) ? 'true' : undefined">
                <td class="at-cell-check"><input type="checkbox" class="at-check" aria-label="Sélectionner la ligne" :checked="sel.includes(id(r))" @change="toggleSel(r)"></td>
                <td
                  v-for="p in visible" :key="p.key"
                  :class="{ 'at-num': p.type === 'number', 'at-dv-titlecell': p.type === 'title', 'is-edit': p.type !== 'title' && isEditable(p) }"
                  @click="cellClick($event, r, p)"
                >
                  <AtPropertyValue :prop="p" :row="r" />
                  <button v-if="p.type === 'title'" type="button" class="at-dv-open" @click.stop="emit('open', r)">Ouvrir</button>
                </td>
                <td />
              </tr>
              <tr class="at-dv-newrow">
                <td /><td :colspan="visible.length + 1"><button type="button" class="at-dv-new" @click="create(gprop ? groupRow(g.key) : {})"><AtIcon name="plus" />{{ newLabel }}</button></td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <td />
              <td v-for="p in visible" :key="p.key" :class="{ 'at-num': p.type === 'number' }"><template v-if="calc(p)">{{ calc(p)!.label }} <b>{{ calc(p)!.value }}</b></template></td>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>
      <div v-if="sel.length" class="at-dv-bulk" role="toolbar" aria-label="Actions de sélection">
        <span><b class="at-num">{{ sel.length }}</b> sélectionnée{{ sel.length > 1 ? 's' : '' }}</span>
        <AtButton variant="danger" size="sm" icon="trash" @click="bulkDelete">Supprimer</AtButton>
        <AtButton variant="ghost" size="sm" @click="sel = []">Désélectionner</AtButton>
      </div>
    </template>

    <!-- ===== Board ===== -->
    <div v-else-if="view.layout === 'board'" class="at-dv-board">
      <div v-if="!gprop" class="at-empty">Ce board a besoin d’une propriété statut, select, relation ou personne pour former ses colonnes.</div>
      <template v-else>
        <div
          v-for="g in groups" :key="g.key" :class="['at-dv-col', dragOver === g.key && 'over']"
          @dragover.prevent="dragOver = g.key" @dragleave.self="dragOver = null" @drop.prevent="dropGroup(g.key)"
        >
          <div class="at-dv-colhead">
            <AtPropertyValue v-if="g.option" :prop="gprop" :row="groupRow(g.key)" /><span v-else class="at-pv-empty">{{ noneLabel }}</span>
            <span class="at-count">{{ g.rows.length }}</span><span class="at-spacer" />
            <AtButton variant="ghost" size="sm" icon="plus" icon-only :label="`Ajouter dans ${g.option?.label ?? noneLabel}`" @click="create(groupRow(g.key))" />
          </div>
          <div class="at-dv-cards">
            <button
              v-for="r in g.rows" :key="id(r)" type="button" :class="['at-dv-card', dragId === id(r) && 'dragging']" draggable="true"
              @dragstart="dragStart($event, r)" @dragend="dragEnd" @click="emit('open', r)"
            >
              <span class="at-dv-cardtitle">{{ r[tk] || 'Sans titre' }}</span>
              <span v-if="others.some(p => !isEmpty(getValue(r, p)) || p.type === 'checkbox')" class="at-dv-cardprops">
                <template v-for="p in others" :key="p.key"><AtPropertyValue v-if="!isEmpty(getValue(r, p))" :prop="p" :row="r" /></template>
              </span>
            </button>
            <button type="button" class="at-dv-new" @click="create(groupRow(g.key))"><AtIcon name="plus" />{{ newLabel }}</button>
          </div>
        </div>
      </template>
    </div>

    <!-- ===== Liste ===== -->
    <div v-else-if="view.layout === 'list'">
      <div v-if="!sorted.length" class="at-empty">Aucun élément ne correspond à cette vue.<AtButton size="sm" icon="plus" @click="create()">{{ newLabel }}</AtButton></div>
      <div v-else class="at-dv-list">
        <template v-for="g in groups" :key="g.key">
          <div v-if="gprop" class="at-dv-lgroup">
            <button type="button" class="at-dv-grouphead" :aria-expanded="!isCollapsed(g.key)" @click="toggleGroup(g.key)">
              <AtIcon name="chevron-down" :class="{ 'at-rot': isCollapsed(g.key) }" />
              <AtPropertyValue v-if="g.option" :prop="gprop" :row="groupRow(g.key)" /><span v-else class="at-pv-empty">{{ noneLabel }}</span>
              <span class="at-count">{{ g.rows.length }}</span>
            </button>
          </div>
          <template v-if="!isCollapsed(g.key)">
            <button v-for="r in g.rows" :key="id(r)" type="button" class="at-dv-li" @click="emit('open', r)">
              <span class="at-pv-title">{{ r[tk] || 'Sans titre' }}</span>
              <span class="at-dv-liprops"><template v-for="p in others" :key="p.key"><AtPropertyValue v-if="!isEmpty(getValue(r, p))" :prop="p" :row="r" /></template></span>
            </button>
          </template>
        </template>
        <div class="at-dv-newline"><button type="button" class="at-dv-new" @click="create()"><AtIcon name="plus" />{{ newLabel }}</button></div>
      </div>
    </div>

    <!-- ===== Calendrier ===== -->
    <template v-else>
      <div class="at-dv-calhead">
        <span class="at-dv-calmonth">{{ formatMonth(month) }}</span>
        <AtButton variant="ghost" size="sm" icon="chevron-left" icon-only label="Mois précédent" @click="view.month = shiftMonth(month, -1)" />
        <AtButton size="sm" @click="view.month = today().slice(0, 7)">Aujourd’hui</AtButton>
        <AtButton variant="ghost" size="sm" icon="chevron-right" icon-only label="Mois suivant" @click="view.month = shiftMonth(month, 1)" />
        <span class="at-dv-calnote"><template v-if="dateKey">Par {{ pmap[dateKey].name.toLowerCase() }}<template v-if="undated"> · {{ undated }} sans date</template></template><template v-else>Aucune propriété date</template></span>
      </div>
      <div class="at-dv-calwrap">
        <div class="at-dv-calgrid"><div v-for="d in ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']" :key="d" class="at-dv-dow">{{ d }}</div></div>
        <div class="at-dv-calgrid">
          <div
            v-for="d in days" :key="d.iso" :class="['at-dv-day', d.outside && 'out', d.today && 'today', dragOver === d.iso && 'over']"
            @dragover.prevent="dragOver = d.iso" @drop.prevent="dropDay(d.iso)"
          >
            <div class="at-dv-daynum">
              <span>{{ d.day }}</span>
              <button v-if="dateKey" type="button" class="at-dv-dayadd" :aria-label="`Ajouter le ${formatDate(d.iso)}`" @click="create({ [dateKey]: d.iso } as Partial<R>)"><AtIcon name="plus" /></button>
            </div>
            <button
              v-for="r in d.rows" :key="id(r)" type="button" :class="['at-dv-calitem', isDone(r) && 'done']" draggable="true"
              @dragstart="dragStart($event, r)" @dragend="dragEnd" @click="emit('open', r)"
            ><span class="dot" :style="{ background: toneOf(r) }" /><span>{{ r[tk] || 'Sans titre' }}</span></button>
          </div>
        </div>
      </div>
    </template>

    <!-- ===== Menus ===== -->
    <AtPopover v-model:open="mAdd" :anchor="anchor">
      <div class="at-menu" role="menu">
        <div class="at-menu-label">Nouvelle vue</div>
        <button v-for="l in LAYOUTS" :key="l.value" type="button" class="at-menu-item" role="menuitem" @click="addView(l.value)"><AtIcon :name="l.icon" />{{ l.label }}</button>
      </div>
    </AtPopover>

    <AtPopover v-model:open="mFilter" :anchor="anchor" align="end">
      <div class="at-menu at-menu-pad" style="min-width: 320px">
        <span class="at-menu-title">Filtres · toutes les conditions</span>
        <div class="at-rules">
          <span v-if="!view.filters.length" class="at-menu-empty">Aucun filtre : la vue affiche toutes les lignes.</span>
          <div v-for="f in view.filters" :key="f.id" class="at-rule">
            <div class="at-select"><select v-model="f.prop" aria-label="Propriété" @change="filterPropChange(f)"><option v-for="p in schema" :key="p.key" :value="p.key">{{ p.name }}</option></select><AtIcon name="chevron-down" /></div>
            <div class="at-select"><select v-model="f.op" aria-label="Condition"><option v-for="o in opsFor(f)" :key="o" :value="o">{{ OP_LABEL[o] }}</option></select><AtIcon name="chevron-down" /></div>
            <template v-if="needsValue(f)">
              <div v-if="valueKind(f) === 'options'" class="at-select">
                <select v-model="f.value" aria-label="Valeur"><option value="">Choisir…</option><option v-for="o in optionsOf(pmap[f.prop])" :key="o.value" :value="o.value">{{ o.label }}</option></select><AtIcon name="chevron-down" />
              </div>
              <input v-else-if="valueKind(f) === 'date'" v-model="f.value" type="date" class="at-input" aria-label="Date">
              <input v-else-if="valueKind(f) === 'number'" v-model="f.value" type="number" class="at-input" aria-label="Valeur">
              <input v-else v-model="f.value" class="at-input" placeholder="Texte" aria-label="Valeur">
            </template>
            <span v-else />
            <AtButton variant="ghost" size="sm" icon="x" icon-only label="Retirer le filtre" @click="removeFrom(view.filters, f)" />
          </div>
        </div>
        <div class="at-menu-actions"><AtButton variant="ghost" size="sm" icon="plus" @click="addFilter">Ajouter un filtre</AtButton></div>
      </div>
    </AtPopover>

    <AtPopover v-model:open="mSort" :anchor="anchor" align="end">
      <div class="at-menu at-menu-pad" style="min-width: 300px">
        <span class="at-menu-title">Tris, appliqués dans l’ordre</span>
        <div class="at-rules">
          <span v-if="!view.sorts.length" class="at-menu-empty">Aucun tri : ordre des données.</span>
          <div v-for="s in view.sorts" :key="s.id" class="at-rule sort">
            <div class="at-select"><select v-model="s.prop" aria-label="Propriété"><option v-for="p in schema" :key="p.key" :value="p.key">{{ p.name }}</option></select><AtIcon name="chevron-down" /></div>
            <div class="at-select"><select v-model="s.dir" aria-label="Sens"><option value="asc">Croissant</option><option value="desc">Décroissant</option></select><AtIcon name="chevron-down" /></div>
            <AtButton variant="ghost" size="sm" icon="x" icon-only label="Retirer le tri" @click="removeFrom(view.sorts, s)" />
          </div>
        </div>
        <div class="at-menu-actions"><AtButton variant="ghost" size="sm" icon="plus" @click="addSort">Ajouter un tri</AtButton></div>
      </div>
    </AtPopover>

    <AtPopover v-model:open="mGroup" :anchor="anchor" align="end">
      <div class="at-menu" role="menu">
        <div class="at-menu-label">{{ view.layout === 'board' ? 'Colonnes du board' : 'Grouper par' }}</div>
        <button v-if="view.layout !== 'board'" type="button" class="at-menu-item" @click="setGroup(null)"><AtIcon name="x" />Aucun groupe<AtIcon v-if="!view.groupBy" name="check" class="at-menu-check" /></button>
        <button v-for="p in groupable" :key="p.key" type="button" class="at-menu-item" @click="setGroup(p.key)"><AtIcon :name="typeIcon(p)" />{{ p.name }}<AtIcon v-if="groupKey === p.key" name="check" class="at-menu-check" /></button>
      </div>
    </AtPopover>

    <AtPopover v-model:open="mProps" :anchor="anchor" align="end">
      <div class="at-menu" style="min-width: 260px">
        <div class="at-menu-label">Propriétés affichées · glisser pour ordonner</div>
        <div
          v-for="(p, i) in ordered" :key="p.key" :class="['at-menu-item', 'at-pi', dropProp === i && 'drop']" :draggable="p.type !== 'title'"
          @dragstart="dragProp = i" @dragover.prevent="dropProp = i" @drop.prevent="propDrop(i)" @dragend="dragProp = null; dropProp = null"
        >
          <AtIcon name="grip" class="grip" /><AtIcon :name="typeIcon(p)" /><span class="at-pi-name">{{ p.name }}</span>
          <input
            type="checkbox" role="switch" class="at-switch" :aria-label="`Afficher ${p.name}`"
            :checked="p.type === 'title' || !view.hidden.includes(p.key)" :disabled="p.type === 'title'" @change="toggleHidden(p)"
          >
        </div>
        <div class="at-menu-sep" />
        <div class="at-menu-actions" style="padding: 4px">
          <AtButton variant="ghost" size="sm" @click="showAll(true)">Tout afficher</AtButton>
          <AtButton variant="ghost" size="sm" @click="showAll(false)">Tout masquer</AtButton>
        </div>
      </div>
    </AtPopover>

    <AtPopover v-model:open="mSettings" :anchor="anchor">
      <div class="at-menu at-menu-pad" style="width: 320px">
        <span class="at-menu-title">Paramètres de la vue</span>
        <input v-model="view.name" class="at-input" aria-label="Nom de la vue" placeholder="Nom de la vue">
        <div class="at-layout-grid" role="group" aria-label="Disposition">
          <button v-for="l in LAYOUTS" :key="l.value" type="button" class="at-layout-opt" :aria-pressed="view.layout === l.value" @click="setLayout(l.value)"><AtIcon :name="l.icon" />{{ l.label }}</button>
        </div>
        <div v-if="view.layout !== 'calendar'" class="at-field-row">
          <span>{{ view.layout === 'board' ? 'Colonnes' : 'Grouper par' }}</span>
          <div class="at-select">
            <select :value="view.groupBy ?? ''" aria-label="Grouper par" @change="setGroup(($event.target as HTMLSelectElement).value || null)">
              <option v-if="view.layout !== 'board'" value="">Aucun</option>
              <option v-for="p in groupable" :key="p.key" :value="p.key">{{ p.name }}</option>
            </select><AtIcon name="chevron-down" />
          </div>
        </div>
        <div v-else class="at-field-row">
          <span>Date utilisée</span>
          <div class="at-select">
            <select :value="dateKey ?? ''" aria-label="Date utilisée" @change="view.dateProp = ($event.target as HTMLSelectElement).value"><option v-for="p in dateProps" :key="p.key" :value="p.key">{{ p.name }}</option></select><AtIcon name="chevron-down" />
          </div>
        </div>
        <template v-if="!lockViews">
          <div class="at-menu-sep" />
          <button type="button" class="at-menu-item" @click="duplicateView"><AtIcon name="copy" />Dupliquer la vue</button>
          <button type="button" class="at-menu-item at-menu-item--danger" :disabled="views.length < 2" @click="deleteView"><AtIcon name="trash" />Supprimer la vue</button>
        </template>
      </div>
    </AtPopover>

    <AtPropertyEditor
      v-model:open="editorOpen" :prop="editor?.prop ?? null" :row="editor?.row" :anchor="editorAnchor"
      @update="v => editor && emit('update', editor.row, editor.prop.key, v)"
    />
  </section>
</template>
