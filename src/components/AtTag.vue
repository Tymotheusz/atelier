<script setup lang="ts">
import type { TagColor } from '../types'
withDefaults(defineProps<{ color?: TagColor; label?: string }>(), { color: 'gray' })
</script>

<template>
  <span :class="['at-tag', color !== 'gray' && `at-tag--${color}`]"><slot>{{ label }}</slot></span>
</template>
