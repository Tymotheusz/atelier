<script setup lang="ts">
defineProps<{ label?: string }>()
</script>

<template>
  <nav class="at-nav" :aria-label="label">
    <div v-if="label" class="at-nav-label">{{ label }}</div>
    <slot />
  </nav>
</template>
