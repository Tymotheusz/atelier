<script setup lang="ts">
/**
 * Toasts' display area, bottom right. Mount it once in the app; `useToast()` feeds it from anywhere.
 * Three toasts at most are shown, the next ones wait. Hover or focus pauses the timers.
 */
import { computed } from 'vue'
import AtIcon from './AtIcon.vue'
import AtButton from './AtButton.vue'
import { toastState, TOAST_VISIBLE, type ToastTone } from '../composables/useToast'

const shown = computed(() => toastState.items.slice(0, TOAST_VISIBLE))
const ICON: Partial<Record<ToastTone, string>> = { success: 'check', danger: 'alert', warning: 'alert', info: 'info' }
function onFocusOut(e: FocusEvent) {
  if (!(e.currentTarget as HTMLElement).contains(e.relatedTarget as Node | null)) toastState.resume()
}
</script>

<template>
  <Teleport to="body">
    <section
      class="at-toaster" aria-label="Notifications" aria-live="polite" aria-relevant="additions"
      @mouseenter="toastState.pause()" @mouseleave="toastState.resume()" @focusin="toastState.pause()" @focusout="onFocusOut"
    >
      <TransitionGroup name="at-toast">
        <div
          v-for="t in shown" :key="t.id" :class="['at-toast', t.tone !== 'neutral' && `at-toast--${t.tone}`]"
          :role="t.tone === 'danger' ? 'alert' : 'status'" :aria-live="t.tone === 'danger' ? 'assertive' : undefined"
        >
          <AtIcon v-if="ICON[t.tone]" :name="ICON[t.tone]!" class="at-toast__icon" />
          <span class="at-toast__msg">{{ t.message }}</span>
          <AtButton v-if="t.action" variant="ghost" size="sm" class="at-toast__action" @click="toastState.runAction(t.id)">{{ t.action.label }}</AtButton>
          <AtButton variant="ghost" size="sm" icon="x" icon-only label="Fermer" @click="toastState.dismiss(t.id)" />
        </div>
      </TransitionGroup>
    </section>
  </Teleport>
</template>
