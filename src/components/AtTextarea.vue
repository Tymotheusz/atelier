<script setup lang="ts">
const model = defineModel<string | null>()
defineProps<{ placeholder?: string; rows?: number; invalid?: boolean; disabled?: boolean }>()
defineOptions({ inheritAttrs: false })
</script>

<template>
  <textarea v-bind="$attrs"
    v-model="model"
    class="at-input"
    :rows="rows ?? 3"
    :placeholder="placeholder"
    :disabled="disabled"
    :aria-invalid="invalid || undefined"
  />
</template>
