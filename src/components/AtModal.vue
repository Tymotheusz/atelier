<script setup lang="ts">
import { watch, ref, nextTick, onBeforeUnmount } from 'vue'
import AtButton from './AtButton.vue'

const open = defineModel<boolean>('open', { default: false })
withDefaults(defineProps<{ title: string; description?: string; size?: 'sm' | 'md' | 'lg'; dismissible?: boolean }>(), { size: 'md', dismissible: true })
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
    <Transition name="at-modal">
      <div v-if="open" class="at-modal-wrap">
        <div class="at-overlay" style="position: fixed" @click="dismissible && (open = false)" />
        <div ref="panel" :class="['at-modal', size !== 'md' && `at-modal--${size}`]" role="dialog" aria-modal="true" :aria-label="title" tabindex="-1">
          <header class="at-modal__head">
            <div style="flex: 1; min-width: 0">
              <h2 class="at-modal__title">{{ title }}</h2>
              <p v-if="description" class="at-modal__desc">{{ description }}</p>
            </div>
            <AtButton v-if="dismissible" variant="ghost" size="sm" icon="x" icon-only label="Fermer" @click="open = false" />
          </header>
          <div class="at-modal__body"><slot /></div>
          <footer v-if="$slots.footer" class="at-modal__foot"><slot name="footer" :close="() => (open = false)" /></footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
