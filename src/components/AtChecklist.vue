<script setup lang="ts">
/**
 * Ordered list of steps to check (a morning routine, an onboarding, a release procedure).
 * Controlled like AtDataView: never writes into `items`, emits `check` and lets the parent update the state.
 * The current step (`v-model:current`) is highlighted and unfolded with its note and the `actions` slot;
 * checking it done or skipped moves `current` to the next step to do.
 * With `keyboard`, J / K (↓ / ↑), Space, Enter and S work anywhere on the page while the list is mounted,
 * except while typing in a field, with a menu or modal open, or with Ctrl / ⌘ / Alt held.
 */
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import AtButton from './AtButton.vue'
import AtIcon from './AtIcon.vue'
import { SHORTCUT_LAYERS } from '../composables/useShortcut'
import { collapsedIds, nextTodo, orderChecklist, type ChecklistGroup, type ChecklistItem, type ChecklistState } from '../checklist'

const props = withDefaults(defineProps<{
  items: ChecklistItem[]
  groups?: ChecklistGroup[]
  numbered?: boolean
  collapseDone?: number
  keyboard?: boolean
}>(), { numbered: true, keyboard: false })
const current = defineModel<string | null>('current', { default: null })
const emit = defineEmits<{
  check: [id: string, state: ChecklistState]
  open: [item: ChecklistItem]
}>()
defineSlots<{
  meta?: (p: { item: ChecklistItem; current: boolean }) => any
  actions?: (p: { item: ChecklistItem }) => any
  empty?: () => any
}>()

type Row =
  | { kind: 'group'; key: string; group: ChecklistGroup }
  | { kind: 'more'; key: string; count: number }
  | { kind: 'item'; key: string; item: ChecklistItem; n: number }

const el = ref<HTMLElement>()
const expanded = ref(false)
const announce = ref('')

const ordered = computed(() => orderChecklist(props.items, props.groups))
const hidden = computed(() => (expanded.value ? new Set<string>() : collapsedIds(ordered.value, current.value, props.collapseDone)))
const rows = computed<Row[]>(() => {
  const byId = new Map((props.groups ?? []).map(g => [g.id, g]))
  const out: Row[] = []
  let lastGroup: string | null | undefined
  let more = false
  ordered.value.forEach((item, i) => {
    if (hidden.value.has(item.id)) {
      if (!more) out.push({ kind: 'more', key: '__more', count: hidden.value.size })
      more = true
      return
    }
    const group = item.group != null ? byId.get(item.group) : undefined
    const gid = group ? group.id : null
    if (gid !== lastGroup) {
      if (group) out.push({ kind: 'group', key: `group:${group.id}`, group })
      lastGroup = gid
    }
    out.push({ kind: 'item', key: item.id, item, n: i + 1 })
  })
  return out
})
watch(() => props.collapseDone, () => (expanded.value = false))

const moreLabel = (n: number) => (n > 1 ? `${n} faites masquées` : '1 faite masquée')

function setCurrent(id: string | null) { current.value = id }

function check(item: ChecklistItem, state: ChecklistState) {
  if (state === item.state) return
  emit('check', item.id, state)
  const done = ordered.value.filter(it => (it.id === item.id ? state : it.state) !== 'todo').length
  announce.value = `${done} sur ${ordered.value.length}`
  if (state !== 'todo' && item.id === current.value) setCurrent(nextTodo(ordered.value, item.id))
}

function onChange(item: ChecklistItem, e: Event) {
  const box = e.target as HTMLInputElement
  const want: ChecklistState = box.checked ? 'done' : 'todo'
  box.checked = item.state === 'done' // controlled: the parent's update re-checks it
  check(item, want)
}

const currentItem = () => ordered.value.find(it => it.id === current.value)

function move(step: number) {
  const list = ordered.value
  if (!list.length) return
  const i = current.value == null ? -1 : list.findIndex(it => it.id === current.value)
  const next = i < 0 ? (step > 0 ? 0 : list.length - 1) : Math.max(0, Math.min(list.length - 1, i + step))
  setCurrent(list[next].id)
  nextTick(() => el.value?.querySelector('[aria-current="step"]')?.scrollIntoView?.({ block: 'nearest' }))
}

/* ---------- Keyboard, at document level ---------- */
const TEXT_FIELD = 'textarea, select, [contenteditable=""], [contenteditable="true"], input:not([type="checkbox"]):not([type="radio"]):not([type="button"]):not([type="submit"]):not([type="reset"])'
const ACTIVABLE = 'button, a[href], summary, input, [role="button"], [role="link"], [role="checkbox"], [role="switch"], [role="menuitem"], [role="option"], [role="tab"]'

function onKeydown(e: KeyboardEvent) {
  if (e.defaultPrevented || e.isComposing || e.ctrlKey || e.metaKey || e.altKey) return
  const t = e.target as HTMLElement | null
  if (t?.closest?.(TEXT_FIELD)) return
  if (document.querySelector(`${SHORTCUT_LAYERS}, dialog[open]`)) return
  const key = (e.key ?? '').toLowerCase()
  // Space and Enter on a focused control keep their own action (the checkbox toggles itself).
  if ((key === ' ' || key === 'enter') && t?.closest?.(ACTIVABLE)) return
  const item = currentItem()
  if (key === 'j' || key === 'arrowdown') move(1)
  else if (key === 'k' || key === 'arrowup') move(-1)
  else if (key === ' ') { if (!item) return; check(item, item.state === 'done' ? 'todo' : 'done') }
  else if (key === 'enter') { if (!item?.href) return; emit('open', item) }
  else if (key === 's') { if (!item || item.state === 'skipped') return; check(item, 'skipped') }
  else return
  e.preventDefault()
}

let listening = false
function listen(on: boolean) {
  if (typeof document === 'undefined' || on === listening) return
  if (on) document.addEventListener('keydown', onKeydown)
  else document.removeEventListener('keydown', onKeydown)
  listening = on
}
watch(() => props.keyboard, on => listen(!!on), { immediate: true })
onBeforeUnmount(() => listen(false))

defineExpose({ move })
</script>

<template>
  <div ref="el" :class="['at-checklist', !numbered && 'at-checklist--plain']">
    <ol v-if="items.length" class="at-checklist__list">
      <template v-for="row in rows" :key="row.key">
        <li v-if="row.kind === 'group'" class="at-checklist__group" role="presentation">
          <span class="at-checklist__group-label">{{ row.group.label }}</span>
          <span v-if="row.group.hint" class="at-checklist__group-hint">{{ row.group.hint }}</span>
        </li>
        <li v-else-if="row.kind === 'more'" class="at-checklist__more" role="presentation">
          <button type="button" class="at-checklist__more-btn" @click="expanded = true">
            <AtIcon name="chevron-right" />{{ moreLabel(row.count) }}
          </button>
        </li>
        <li
          v-else
          :class="[
            'at-checklist__item',
            `at-checklist__item--${row.item.state}`,
            row.item.id === current && 'at-checklist__item--current'
          ]"
          :aria-current="row.item.id === current ? 'step' : undefined"
        >
          <div class="at-checklist__line">
            <span v-if="numbered" class="at-checklist__num" aria-hidden="true">{{ row.n }}</span>
            <input
              type="checkbox" class="at-check at-checklist__check" :checked="row.item.state === 'done'"
              :aria-label="row.item.title" @change="onChange(row.item, $event)"
            >
            <button type="button" class="at-checklist__title" @click="setCurrent(row.item.id)">
              <span class="at-checklist__text">{{ row.item.title }}</span>
              <span v-if="row.item.state === 'skipped'" class="at-checklist__skipped">passée</span>
            </button>
            <span v-if="$slots.meta" class="at-checklist__meta"><slot name="meta" :item="row.item" :current="row.item.id === current" /></span>
            <AtButton
              v-if="row.item.href" variant="ghost" size="sm" icon="arrow" icon-only
              :label="`Ouvrir « ${row.item.title} »`" title="Ouvrir" class="at-checklist__open" @click="emit('open', row.item)"
            />
          </div>
          <div v-if="row.item.id === current && (row.item.note || $slots.actions)" class="at-checklist__body">
            <p v-if="row.item.note" class="at-checklist__note">{{ row.item.note }}</p>
            <div v-if="$slots.actions" class="at-checklist__actions"><slot name="actions" :item="row.item" /></div>
          </div>
        </li>
      </template>
    </ol>
    <div v-else class="at-checklist__empty"><slot name="empty">Aucune étape</slot></div>
    <p class="at-sr-only" aria-live="polite">{{ announce }}</p>
  </div>
</template>
