<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{ value: number; max?: number; showLabel?: boolean; label?: string }>(), { max: 100, showLabel: true })
const pct = computed(() => Math.max(0, Math.min(100, Math.round((props.value / props.max) * 100))))
</script>

<template>
  <span class="at-progress" role="progressbar" :aria-valuenow="pct" aria-valuemin="0" aria-valuemax="100" :aria-label="label">
    <span class="at-progress__track"><span class="at-progress__bar" :style="{ width: pct + '%' }" /></span>
    <span v-if="showLabel" class="at-progress__label">{{ pct }} %</span>
  </span>
</template>
