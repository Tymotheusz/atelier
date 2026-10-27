<script setup lang="ts">
import { ref, watch, nextTick, onBeforeUnmount, computed } from 'vue'

/**
 * Surface flottante ancrée. Deux usages :
 * - slot #trigger="{ toggle, open }" : le popover gère son déclencheur ;
 * - prop `anchor` (élément) + v-model:open : ancrage externe (cellules, menus contextuels).
 */
const open = defineModel<boolean>('open', { default: false })
const props = withDefaults(defineProps<{
  anchor?: HTMLElement | null
  align?: 'start' | 'end'
  /** `bottom` : sous l'ancre (au-dessus s'il manque de place). `right` : à droite de l'ancre, bas contre bas. */
  placement?: 'bottom' | 'right'
  offset?: number
}>(), { align: 'start', placement: 'bottom', offset: 4 })
const emit = defineEmits<{ close: [] }>()

const triggerEl = ref<HTMLElement>()
const el = ref<HTMLElement>()
const pos = ref({ top: -9999, left: -9999 })
const anchorEl = computed(() => props.anchor ?? (triggerEl.value?.firstElementChild as HTMLElement | null) ?? triggerEl.value ?? null)

function place() {
  const a = anchorEl.value, p = el.value
  if (!a || !p) return
  const r = a.getBoundingClientRect(), w = p.offsetWidth, h = p.offsetHeight
  if (props.placement === 'right') {
    const left = Math.max(8, Math.min(r.right + props.offset, window.innerWidth - w - 8))
    const top = Math.max(8, Math.min(r.bottom - h, window.innerHeight - h - 8))
    if (Math.abs(top - pos.value.top) > 0.5 || Math.abs(left - pos.value.left) > 0.5) pos.value = { top, left }
    return
  }
  let left = props.align === 'end' ? r.right - w : r.left
  left = Math.max(8, Math.min(left, window.innerWidth - w - 8))
  let top = r.bottom + props.offset
  if (top + h > window.innerHeight - 8) top = Math.max(8, r.top - h - props.offset)
  if (Math.abs(top - pos.value.top) > 0.5 || Math.abs(left - pos.value.left) > 0.5) pos.value = { top, left }
}
function close() { if (open.value) { open.value = false; emit('close') } }
function toggle() { open.value ? close() : (open.value = true) }

function onDown(e: MouseEvent) {
  const t = e.target as Node
  if (el.value?.contains(t) || anchorEl.value?.contains(t)) return
  if ((t as HTMLElement).closest?.('.at-pop')) return // popover imbriqué
  close()
}
function onKey(e: KeyboardEvent) { if (e.key === 'Escape') { e.stopPropagation(); close(); anchorEl.value?.focus?.() } }
let ro: ResizeObserver | null = null

function bind() {
  setTimeout(() => document.addEventListener('mousedown', onDown), 0)
  document.addEventListener('keydown', onKey, true)
  window.addEventListener('resize', place)
  window.addEventListener('scroll', place, true)
  nextTick(() => { place(); if (el.value) { ro = new ResizeObserver(place); ro.observe(el.value) } })
}
function unbind() {
  document.removeEventListener('mousedown', onDown)
  document.removeEventListener('keydown', onKey, true)
  window.removeEventListener('resize', place)
  window.removeEventListener('scroll', place, true)
  ro?.disconnect(); ro = null
  pos.value = { top: -9999, left: -9999 }
}
watch(open, v => (v ? bind() : unbind()), { immediate: true })
onBeforeUnmount(unbind)
defineExpose({ place, close, toggle })
</script>

<template>
  <span v-if="$slots.trigger" ref="triggerEl" style="display: contents"><slot name="trigger" :toggle="toggle" :open="open" /></span>
  <Teleport to="body">
    <div v-if="open" ref="el" class="at-pop" :style="{ top: pos.top + 'px', left: pos.left + 'px' }">
      <slot :close="close" />
    </div>
  </Teleport>
</template>
