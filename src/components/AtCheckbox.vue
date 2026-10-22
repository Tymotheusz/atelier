<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
defineProps<{ label?: string; indeterminate?: boolean; disabled?: boolean }>()
defineOptions({ inheritAttrs: false })
</script>

<template>
  <label v-if="label || $slots.default" class="at-toggle">
    <input v-bind="$attrs" v-model="model" type="checkbox" class="at-check" :indeterminate="indeterminate" :disabled="disabled">
    <slot>{{ label }}</slot>
  </label>
  <input v-bind="$attrs" v-else v-model="model" type="checkbox" class="at-check" :indeterminate="indeterminate" :disabled="disabled">
</template>
