<script setup lang="ts">
/**
 * Regularity grid: one square per day, in array order, three levels (nothing, started, finished).
 * No notion of failure: level 0 is neutral, never red. The level is also carried by the tooltip,
 * the accessible name and the legend, never by colour alone.
 */
import { computed } from 'vue'
import type { StreakDay } from '../types'
import { formatDate } from '../dataview/logic'

const props = withDefaults(defineProps<{
  days: StreakDay[]
  columns?: number
  tone?: 'success' | 'accent'
  summary?: string
  legend?: boolean
  labels?: [string, string, string]
}>(), { columns: 10, tone: 'success', legend: true, labels: () => ['Rien', 'Commencée', 'Terminée'] })
const emit = defineEmits<{ select: [date: string] }>()

const ISO = /^\d{4}-\d{2}-\d{2}$/
const dayName = (d: StreakDay) => d.label ?? (ISO.test(d.date) ? formatDate(d.date) : d.date)
const title = (d: StreakDay) => `${dayName(d)} : ${props.labels[d.level] ?? ''}`
const gridStyle = computed(() => ({ '--at-streak-columns': String(Math.max(1, Math.floor(props.columns) || 1)) }))
</script>

<template>
  <div :class="['at-streak', tone === 'accent' && 'at-streak--accent']">
    <div class="at-streak__grid" role="group" :aria-label="summary || 'Régularité'" :style="gridStyle">
      <button
        v-for="d in days" :key="d.date" type="button"
        :class="['at-streak__day', d.level > 0 && `at-streak__day--${d.level}`]"
        :title="title(d)" :aria-label="title(d)" @click="emit('select', d.date)"
      />
    </div>
    <div v-if="legend || summary" class="at-streak__foot">
      <p v-if="summary" class="at-streak__summary">{{ summary }}</p>
      <ul v-if="legend" class="at-streak__legend">
        <li v-for="(l, i) in labels" :key="i"><span :class="['at-streak__swatch', i > 0 && `at-streak__day--${i}`]" aria-hidden="true" />{{ l }}</li>
      </ul>
    </div>
  </div>
</template>
