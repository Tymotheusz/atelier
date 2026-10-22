<script setup lang="ts">
import { watch, ref, nextTick, onBeforeUnmount } from 'vue'
import AtButton from './AtButton.vue'

/** Panneau latéral droit (vue détaillée, « peek »). Échap ou clic sur le voile pour fermer. */
const open = defineModel<boolean>('open', { default: false })
withDefaults(defineProps<{ label?: string; width?: number }>(), { width: 580 })
const panel = ref<HTMLElement>()
let last: HTMLElement | null = null

function onKey(e: KeyboardEvent) { if (e.key === 'Escape' && !document.querySelector('.at-pop')) open.value = false }
watch(open, v => {
  if (v) { last = document.activeElement as HTMLElement; document.addEventListener('keydown', onKey); nextTick(() => panel.value?.focus()) }
  else { document.removeEventListener('keydown', onKey); last?.focus?.() }
}, { immediate: true })
onBeforeUnmount(() => document.removeEventListener('keydown', onKey))
</script>

<template>
  <Teleport to="body">
    <Transition name="at-drawer">
      <div v-if="open" class="at-drawer-wrap">
        <div class="at-overlay" @click="open = false" />
        <aside ref="panel" class="at-drawer" role="dialog" aria-modal="true" :aria-label="label" tabindex="-1" :style="{ width: `min(${width}px, 100%)` }">
          <header class="at-drawer__head">
            <span class="at-drawer__crumb"><slot name="crumb">{{ label }}</slot></span>
            <span class="at-spacer" />
            <slot name="actions" />
            <AtButton variant="ghost" size="sm" icon="x" icon-only label="Fermer" @click="open = false" />
          </header>
          <div class="at-drawer__body"><slot /></div>
        </aside>
      </div>
    </Transition>
  </Teleport>
</template>
