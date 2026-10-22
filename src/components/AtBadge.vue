<script setup lang="ts">
import type { Tone } from '../types'
withDefaults(defineProps<{ tone?: Tone; label?: string }>(), { tone: 'neutral' })
</script>

<template>
  <span :class="['at-badge', tone !== 'neutral' && `at-badge--${tone}`]"><slot>{{ label }}</slot></span>
</template>
