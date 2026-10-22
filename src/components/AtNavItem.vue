<script setup lang="ts">
import AtIcon from './AtIcon.vue'
import AtIconTile from './AtIconTile.vue'
import type { TileColor } from '../types'
defineProps<{
  icon?: string
  /** Pastille de couleur (valeur CSS) à la place de l'icône. */
  mark?: string
  /** Pose l'icône sur une tuile de couleur. */
  tile?: TileColor
  label?: string
  href?: string
  active?: boolean
  count?: number | string
}>()
defineEmits<{ click: [e: MouseEvent] }>()
</script>

<template>
  <a
    class="at-nav-item"
    :href="href ?? '#'"
    :aria-current="active ? 'page' : undefined"
    @click="!href && $event.preventDefault(); $emit('click', $event)"
  >
    <span v-if="mark" class="at-nav-mark" :style="{ background: mark }" />
    <AtIconTile v-else-if="icon && tile" :name="icon" :color="tile" />
    <AtIcon v-else-if="icon" :name="icon" />
    <span class="at-ellipsis"><slot>{{ label }}</slot></span>
    <span v-if="count != null && count !== ''" class="at-nav-count">{{ count }}</span>
  </a>
</template>
