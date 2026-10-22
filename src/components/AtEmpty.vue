<script setup lang="ts">
defineProps<{ message?: string }>()
</script>

<template>
  <div class="at-empty"><slot>{{ message }}</slot><slot name="action" /></div>
</template>
