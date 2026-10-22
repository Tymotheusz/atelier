<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
defineProps<{ label?: string; disabled?: boolean }>()
defineOptions({ inheritAttrs: false })
</script>

<template>
  <label v-if="label || $slots.default" class="at-toggle">
    <input v-bind="$attrs" v-model="model" type="checkbox" role="switch" class="at-switch" :disabled="disabled">
    <slot>{{ label }}</slot>
  </label>
  <input v-bind="$attrs" v-else v-model="model" type="checkbox" role="switch" class="at-switch" :disabled="disabled">
</template>
