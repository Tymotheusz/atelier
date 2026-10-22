<script setup lang="ts">
import { computed } from 'vue'
import { icons } from '../icons'

const props = withDefaults(defineProps<{ name: string; size?: number; label?: string }>(), { size: 16 })
const body = computed(() => icons[props.name] ?? '')
</script>

<template>
  <svg
    class="at-icon"
    viewBox="0 0 16 16"
    :width="size"
    :height="size"
    :style="size !== 16 ? { width: size + 'px', height: size + 'px' } : undefined"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
    v-html="body"
  />
</template>
