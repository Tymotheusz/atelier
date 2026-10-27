<script setup lang="ts">
import { ref } from 'vue'
import AtPopover from './AtPopover.vue'
import AtMenu from './AtMenu.vue'

/** Popover + menu : le slot #trigger reçoit { toggle, open }, le contenu des AtMenuItem. Un clic sur un item ferme le menu. */
withDefaults(defineProps<{ label?: string; align?: 'start' | 'end'; placement?: 'bottom' | 'right'; minWidth?: number }>(), { align: 'start', placement: 'bottom', minWidth: 220 })
const open = ref(false)
function onClick(e: MouseEvent) {
  if ((e.target as HTMLElement).closest('.at-menu-item[role="menuitem"]')) open.value = false
}
</script>

<template>
  <AtPopover v-model:open="open" :align="align" :placement="placement">
    <template #trigger="slotProps"><slot name="trigger" v-bind="slotProps" /></template>
    <AtMenu :label="label" :min-width="minWidth" @click="onClick"><slot /></AtMenu>
  </AtPopover>
</template>
