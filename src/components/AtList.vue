<script setup lang="ts" generic="T">
/**
 * Keyboard-selectable list (listbox): J / K or ↓ / ↑ move the active item, Enter opens it.
 * With `global`, these keys work anywhere on the page while the list is mounted (through useShortcut,
 * so not while typing in a field or with a menu or modal open); otherwise only while the list has the focus.
 * The active item is a key (`v-model:active`); the parent decides what happens when it disappears.
 */
import { computed, nextTick, ref, watch } from 'vue'
import { useId } from '../composables/useId'
import { useShortcut } from '../composables/useShortcut'

const props = defineProps<{
  items: T[]
  rowKey: string | ((item: T) => string)
  global?: boolean
  label?: string
}>()
const active = defineModel<string | null>('active', { default: null })
const emit = defineEmits<{ open: [item: T] }>()
defineSlots<{
  item?: (p: { item: T; active: boolean; index: number }) => any
  empty?: () => any
}>()

const el = ref<HTMLElement>()
const listId = useId('at-list')
const keyOf = (item: T) => (typeof props.rowKey === 'function' ? props.rowKey(item) : String((item as any)?.[props.rowKey]))
const keys = computed(() => props.items.map(keyOf))
const index = computed(() => (active.value == null ? -1 : keys.value.indexOf(active.value)))
const optionId = (i: number) => `${listId}-${i}`
const fallback = (item: T) => { const o = item as any; return String(o?.label ?? o?.title ?? o?.name ?? keyOf(item)) }

function move(step: number) {
  const n = keys.value.length
  if (!n) return
  const i = index.value
  const next = i < 0 ? (step > 0 ? 0 : n - 1) : Math.max(0, Math.min(n - 1, i + step))
  active.value = keys.value[next]
}
function go(i: number) { if (keys.value.length) active.value = keys.value[Math.max(0, Math.min(keys.value.length - 1, i))] }
function openActive() { const i = index.value; if (i >= 0) emit('open', props.items[i]) }

function onKey(e: KeyboardEvent) {
  if (e.ctrlKey || e.metaKey || e.altKey) return
  const k = e.key.toLowerCase()
  if (k === 'arrowdown' || k === 'j') move(1)
  else if (k === 'arrowup' || k === 'k') move(-1)
  else if (k === 'home') go(0)
  else if (k === 'end') go(keys.value.length - 1)
  else if (k === 'enter') openActive()
  else return
  e.preventDefault() // also keeps the global shortcuts from handling it twice
}

if (props.global) {
  const when = () => props.items.length > 0
  useShortcut(['j', 'arrowdown'], () => move(1), { when })
  useShortcut(['k', 'arrowup'], () => move(-1), { when })
  useShortcut('enter', openActive, { when: () => index.value >= 0 })
}

watch(index, i => {
  if (i < 0) return
  nextTick(() => document.getElementById(optionId(i))?.scrollIntoView?.({ block: 'nearest' }))
})
defineExpose({ focus: () => el.value?.focus(), move })
</script>

<template>
  <div
    ref="el" class="at-list" role="listbox" tabindex="0" :aria-label="label"
    :aria-activedescendant="index >= 0 ? optionId(index) : undefined" @keydown="onKey"
  >
    <div
      v-for="(item, i) in items" :id="optionId(i)" :key="keys[i]"
      :class="['at-list__item', i === index && 'is-active']" role="option" :aria-selected="i === index"
      @click="active = keys[i]" @dblclick="emit('open', item)"
    >
      <slot name="item" :item="item" :active="i === index" :index="i">{{ fallback(item) }}</slot>
    </div>
    <div v-if="!items.length" class="at-list__empty"><slot name="empty">Aucun élément</slot></div>
  </div>
</template>
