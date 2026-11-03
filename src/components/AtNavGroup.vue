<script setup lang="ts">
import { useId } from '../composables/useId'
import AtIcon from './AtIcon.vue'
const props = defineProps<{
  label?: string
  /** Le titre devient un bouton qui replie le groupe (nécessite `label`). */
  collapsible?: boolean
  /** Pastille de couleur (valeur CSS) devant le titre. */
  mark?: string
}>()
const open = defineModel<boolean>('open', { default: true })
const bodyId = useId('at-nav')
</script>

<template>
  <nav class="at-nav" :aria-label="label">
    <template v-if="label && props.collapsible">
      <button
        type="button"
        class="at-nav-label at-nav-toggle"
        :aria-expanded="open"
        :aria-controls="bodyId"
        @click="open = !open"
      >
        <span v-if="mark" class="at-nav-mark" :style="{ background: mark }" />
        <span class="at-ellipsis">{{ label }}</span>
        <AtIcon name="chevron-down" :class="{ 'at-rot': !open }" />
      </button>
      <div v-show="open" :id="bodyId" class="at-nav-body"><slot /></div>
    </template>
    <template v-else>
      <div v-if="label" class="at-nav-label">
        <span v-if="mark" class="at-nav-mark" :style="{ background: mark }" />{{ label }}
      </div>
      <slot />
    </template>
  </nav>
</template>
