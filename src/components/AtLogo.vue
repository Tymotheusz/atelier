<script setup lang="ts">
import { computed } from 'vue'
import { LOGO_TILE, brandGrid, logoApps, type LogoAppId } from '../brand'

const props = withDefaults(defineProps<{
  /** App de la famille : la marque mère `atelier`, une app intégrée, ou une app ajoutée par `registerLogoApps`. */
  app?: LogoAppId | (string & {})
  /** Côté de la marque, en px. 16 au minimum. */
  size?: number
  /** Affiche le nom de l'app à côté de la marque. */
  wordmark?: boolean
  /** Remplace le nom affiché (et le libellé accessible). */
  name?: string
  /** Libellé accessible de la marque seule ; sans lui (et sans nom affiché), elle est décorative. */
  label?: string
}>(), { app: 'atelier', size: 20, wordmark: false })

const def = computed(() => logoApps[props.app] ?? logoApps.atelier)
const title = computed(() => props.name ?? def.value.name)
const px = computed(() => Math.max(16, props.size))
const style = computed(() => ({
  '--at-logo-size': px.value + 'px',
  '--at-logo-fill': `var(--${def.value.color})`
}))
</script>

<template>
  <span
    :class="['at-logo', wordmark && 'at-logo--wordmark']"
    :style="style"
    :role="!wordmark && label ? 'img' : undefined"
    :aria-label="!wordmark ? label : undefined"
    :aria-hidden="!wordmark && !label ? 'true' : undefined"
  >
    <svg
      class="at-logo__mark"
      :viewBox="`0 0 ${brandGrid.size} ${brandGrid.size}`"
      :width="px"
      :height="px"
      aria-hidden="true"
      focusable="false"
    >
      <path class="at-logo__tile" :d="LOGO_TILE" />
      <g class="at-logo__glyph" :stroke-width="brandGrid.stroke" v-html="def.glyph" />
    </svg>
    <span v-if="wordmark" class="at-logo__name">{{ title }}</span>
  </span>
</template>
