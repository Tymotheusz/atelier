<script setup lang="ts">
import { computed } from 'vue'
import type { Tone } from '../types'
const props = withDefaults(
  defineProps<{
    value: number
    max?: number
    showLabel?: boolean
    label?: string
    /** `bar` : barre horizontale ; `ring` : roue de 16 px, pour une ligne de liste ou de navigation. */
    variant?: 'bar' | 'ring'
    /** Couleur de l'avancement ; `accent` par défaut. */
    tone?: 'accent' | Tone
  }>(),
  { max: 100, showLabel: true, variant: 'bar', tone: 'accent' },
)
const pct = computed(() => Math.max(0, Math.min(100, Math.round((props.value / props.max) * 100))))
</script>

<template>
  <span
    class="at-progress"
    :class="[variant === 'ring' && 'at-progress--ring', tone !== 'accent' && `at-progress--${tone}`]"
    role="progressbar"
    :aria-valuenow="pct"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-label="label"
  >
    <template v-if="variant === 'ring'">
      <span v-if="showLabel" class="at-progress__label">{{ pct }} %</span>
      <svg class="at-progress__ring" viewBox="0 0 16 16" aria-hidden="true">
        <circle class="at-progress__ring-track" cx="8" cy="8" r="6" />
        <circle v-if="pct" class="at-progress__ring-val" cx="8" cy="8" r="6" pathLength="100" :stroke-dasharray="`${pct} 100`" />
      </svg>
    </template>
    <template v-else>
      <span class="at-progress__track"><span class="at-progress__bar" :style="{ width: pct + '%' }" /></span>
      <span v-if="showLabel" class="at-progress__label">{{ pct }} %</span>
    </template>
  </span>
</template>
