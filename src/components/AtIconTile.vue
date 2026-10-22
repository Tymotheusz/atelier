<script setup lang="ts">
import AtIcon from './AtIcon.vue'
import type { TileColor, Size } from '../types'

withDefaults(defineProps<{
  /** Nom de l'icône (jeu intégré ou registerIcons). */
  name: string
  color?: TileColor
  size?: Size
  /** Libellé accessible ; sans lui, la tuile est décorative. */
  label?: string
}>(), { color: 'neutral', size: 'sm' })
</script>

<template>
  <span
    :class="['at-tile', size !== 'sm' && `at-tile--${size}`, color === 'neutral' ? 'at-tile--neutral' : `at-tone-${color}`]"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
  ><AtIcon :name="name" /></span>
</template>
