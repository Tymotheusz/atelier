<script setup lang="ts">
/**
 * Elapsed time of a step against its planned duration: a small ring and tabular text, in a pill button.
 * Indicative only: it does not count (the parent passes `seconds`), never blocks, never rings.
 * Past the target, the ring is full and turns `warning`, and the text says how much over (« +0:40 »).
 * Clicking emits `toggle` (pause / resume); `paused` is reflected by `aria-pressed`.
 */
import { computed } from 'vue'
import { formatDuration } from '../checklist'

const props = withDefaults(defineProps<{
  seconds: number
  target?: number | null
  size?: 'sm' | 'md'
  paused?: boolean
}>(), { target: null, size: 'sm', paused: false })
const emit = defineEmits<{ toggle: [] }>()

const R = 8
const CIRC = 2 * Math.PI * R
const hasTarget = computed(() => props.target != null && props.target > 0)
const over = computed(() => hasTarget.value && props.seconds > (props.target as number))
/** Share of the ring drawn: elapsed / target, full when over; without target, the seconds of the current minute. */
const ratio = computed(() => {
  const s = Math.max(0, props.seconds || 0)
  if (hasTarget.value) return Math.min(1, s / (props.target as number))
  return (Math.floor(s) % 60) / 60
})
const offset = computed(() => CIRC * (1 - ratio.value))

const text = computed(() => {
  const s = formatDuration(props.seconds)
  if (props.paused) return `En pause · ${s}`
  if (!hasTarget.value) return s
  if (over.value) return `+${formatDuration(props.seconds - (props.target as number))}`
  return `${s} / ${formatDuration(props.target as number)}`
})
const label = computed(() => {
  const s = formatDuration(props.seconds)
  let what = `${s} écoulées`
  if (hasTarget.value) what += ` sur ${formatDuration(props.target as number)} prévues`
  if (over.value) what += `, ${formatDuration(props.seconds - (props.target as number))} de plus`
  return `Pause du minuteur (${what})`
})
</script>

<template>
  <button
    type="button"
    :class="['at-timer', size === 'md' && 'at-timer--md', over && 'at-timer--over', paused && 'at-timer--paused']"
    :aria-pressed="paused" :aria-label="label" @click="emit('toggle')"
  >
    <svg class="at-timer__ring" viewBox="0 0 20 20" aria-hidden="true">
      <circle class="at-timer__track" cx="10" cy="10" :r="R" fill="none" stroke-width="2.5" />
      <circle
        class="at-timer__val" cx="10" cy="10" :r="R" fill="none" stroke-width="2.5" stroke-linecap="round"
        :stroke-dasharray="CIRC" :stroke-dashoffset="offset" :opacity="ratio > 0 ? 1 : 0"
      />
    </svg>
    <span class="at-timer__text">{{ text }}</span>
  </button>
</template>
