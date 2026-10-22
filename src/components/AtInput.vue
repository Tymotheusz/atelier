<script setup lang="ts">
import { ref } from 'vue'
import AtIcon from './AtIcon.vue'
import AtKbd from './AtKbd.vue'

const model = defineModel<string | number | null>()
const props = withDefaults(defineProps<{
  type?: string
  placeholder?: string
  /** Pictogramme à gauche (ex. "search"). */
  icon?: string
  /** Raccourci affiché à droite (ex. "⌘K"). */
  kbd?: string
  invalid?: boolean
  disabled?: boolean
  size?: 'sm' | 'md'
}>(), { type: 'text', size: 'md' })

const el = ref<HTMLInputElement>()
defineExpose({ focus: () => el.value?.focus(), el })
defineOptions({ inheritAttrs: false })
</script>

<template>
  <div v-if="icon || kbd" class="at-input-wrap">
    <AtIcon v-if="icon" :name="icon" />
    <input v-bind="$attrs"
      ref="el"
      v-model="model"
      class="at-input"
      :style="props.size === 'sm' ? { height: 'var(--h-sm)', fontSize: '13px' } : undefined"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-invalid="invalid || undefined"
    >
    <AtKbd v-if="kbd">{{ kbd }}</AtKbd>
  </div>
  <input v-bind="$attrs"
    v-else
    ref="el"
    v-model="model"
    class="at-input"
    :style="props.size === 'sm' ? { height: 'var(--h-sm)', fontSize: '13px' } : undefined"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :aria-invalid="invalid || undefined"
  >
</template>
