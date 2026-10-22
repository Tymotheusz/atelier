<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  value: string | number
  /** Variation déjà formatée, ex. "+12,4 %". */
  delta?: string
  /** Sens métier de la variation : 'up' = bonne nouvelle, 'down' = mauvaise. */
  trend?: 'up' | 'down'
  /** Série pour la sparkline (au moins 2 points). */
  spark?: number[]
  foot?: string
}>()

const W = 220, H = 32
const path = computed(() => {
  const v = props.spark
  if (!v || v.length < 2) return null
  const mn = Math.min(...v), mx = Math.max(...v), span = mx - mn || 1
  const pts = v.map((y, i) => [2 + (i * (W - 4)) / (v.length - 1), H - 3 - ((y - mn) / span) * (H - 8)])
  const line = 'M' + pts.map(p => p.map(n => n.toFixed(1)).join(' ')).join(' L')
  const last = pts[pts.length - 1]
  return { line, area: `${line} L${last[0].toFixed(1)} ${H} L2 ${H} Z`, end: last }
})
</script>

<template>
  <div class="at-stat">
    <span class="at-stat__label">{{ label }}</span>
    <div class="at-stat__row">
      <span class="at-stat__value"><slot name="value">{{ value }}</slot></span>
      <span v-if="delta" :class="['at-stat__delta', trend && `at-stat__delta--${trend}`]">{{ delta }}</span>
    </div>
    <svg v-if="path" class="at-stat__spark" :viewBox="`0 0 ${W} ${H}`" preserveAspectRatio="none" aria-hidden="true">
      <path class="area" :d="path.area" />
      <path class="line" :d="path.line" vector-effect="non-scaling-stroke" />
      <circle class="end" :cx="path.end[0]" :cy="path.end[1]" r="2.5" />
    </svg>
    <span v-if="foot || $slots.foot" class="at-stat__foot"><slot name="foot">{{ foot }}</slot></span>
  </div>
</template>
