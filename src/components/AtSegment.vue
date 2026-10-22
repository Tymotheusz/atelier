<script setup lang="ts" generic="V extends string | number">
import AtIcon from './AtIcon.vue'
import type { TabItem } from '../types'

const model = defineModel<V>()
defineProps<{ items: (TabItem<V> & { iconOnly?: boolean })[]; label?: string }>()
</script>

<template>
  <div class="at-segment" role="group" :aria-label="label">
    <button
      v-for="t in items"
      :key="String(t.value)"
      type="button"
      :aria-pressed="model === t.value"
      :aria-label="t.iconOnly ? t.label : undefined"
      :title="t.iconOnly ? t.label : undefined"
      :disabled="t.disabled"
      @click="model = t.value"
    >
      <AtIcon v-if="t.icon" :name="t.icon" /><template v-if="!t.iconOnly">{{ t.label }}</template>
    </button>
  </div>
</template>
