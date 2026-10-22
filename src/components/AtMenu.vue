<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ label?: string; minWidth?: number }>()
const el = ref<HTMLElement>()

/** Navigation clavier : flèches, Début/Fin. */
function onKey(e: KeyboardEvent) {
  const items = [...(el.value?.querySelectorAll<HTMLElement>('.at-menu-item:not(:disabled)') ?? [])]
  if (!items.length) return
  const i = items.indexOf(document.activeElement as HTMLElement)
  const go = (n: number) => { e.preventDefault(); items[(n + items.length) % items.length].focus() }
  if (e.key === 'ArrowDown') go(i + 1)
  else if (e.key === 'ArrowUp') go(i < 0 ? items.length - 1 : i - 1)
  else if (e.key === 'Home') go(0)
  else if (e.key === 'End') go(items.length - 1)
}
</script>

<template>
  <div ref="el" class="at-menu" role="menu" :aria-label="label" :style="minWidth ? { minWidth: minWidth + 'px' } : undefined" @keydown="onKey">
    <div v-if="label" class="at-menu-label">{{ label }}</div>
    <slot />
  </div>
</template>
