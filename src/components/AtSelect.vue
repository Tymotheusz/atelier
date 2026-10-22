<script setup lang="ts" generic="V extends string | number">
import AtIcon from './AtIcon.vue'
import type { SelectOption } from '../types'

const model = defineModel<V | null>()
defineProps<{ options: SelectOption<V>[]; placeholder?: string; disabled?: boolean; invalid?: boolean; size?: 'sm' | 'md' }>()
defineOptions({ inheritAttrs: false })
</script>

<template>
  <div class="at-select">
    <select v-bind="$attrs"
      v-model="model"
      :disabled="disabled"
      :aria-invalid="invalid || undefined"
      :style="size === 'sm' ? { height: 'var(--h-sm)', fontSize: '13px' } : undefined"
    >
      <option v-if="placeholder" :value="null" disabled>{{ placeholder }}</option>
      <option v-for="o in options" :key="String(o.value)" :value="o.value" :disabled="o.disabled">{{ o.label }}</option>
    </select>
    <AtIcon name="chevron-down" />
  </div>
</template>
