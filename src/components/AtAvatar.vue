<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{ name: string; src?: string; size?: 'sm' | 'md' | 'lg'; tone?: 'neutral' | 'accent' }>(), { size: 'sm', tone: 'neutral' })
const initials = computed(() => props.name.split(/\s+/).filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase() || '?')
</script>

<template>
  <span :class="['at-avatar', size !== 'sm' && `at-avatar--${size}`, tone === 'accent' && 'at-avatar--accent']" :title="name">
    <img v-if="src" :src="src" :alt="name">
    <template v-else>{{ initials }}</template>
  </span>
</template>
