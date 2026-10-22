<script setup lang="ts" generic="V extends string | number">
import AtIcon from './AtIcon.vue'
import type { TabItem } from '../types'

const model = defineModel<V>()
defineProps<{ items: TabItem<V>[]; label?: string }>()
</script>

<template>
  <div class="at-tabs" role="tablist" :aria-label="label">
    <button
      v-for="t in items"
      :key="String(t.value)"
      class="at-tab"
      role="tab"
      type="button"
      :aria-selected="model === t.value"
      :disabled="t.disabled"
      @click="model = t.value"
    >
      <AtIcon v-if="t.icon" :name="t.icon" />{{ t.label }}
      <span v-if="t.count != null" class="at-count">{{ t.count }}</span>
    </button>
  </div>
</template>
