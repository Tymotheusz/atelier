<script setup lang="ts">
import { computed } from 'vue'
import AtIcon from './AtIcon.vue'
import type { ButtonVariant, Size } from '../types'

const props = withDefaults(defineProps<{
  variant?: ButtonVariant
  size?: Size
  /** Pictogramme placé avant le libellé. */
  icon?: string
  /** Bouton carré sans libellé : `label` devient obligatoire (aria-label). */
  iconOnly?: boolean
  label?: string
  loading?: boolean
  disabled?: boolean
  /** Rend un lien <a> au lieu d'un <button>. */
  href?: string
  type?: 'button' | 'submit' | 'reset'
}>(), { variant: 'secondary', size: 'md', type: 'button' })

const classes = computed(() => [
  'at-btn',
  `at-btn--${props.variant}`,
  props.size !== 'md' && `at-btn--${props.size}`,
  props.iconOnly && 'at-btn--icon'
])
</script>

<template>
  <a v-if="href && !disabled" :href="href" :class="classes" :aria-label="iconOnly ? label : undefined">
    <AtIcon v-if="icon" :name="icon" /><slot>{{ iconOnly ? '' : label }}</slot>
  </a>
  <button
    v-else
    :type="type"
    :class="classes"
    :disabled="disabled || loading"
    :aria-busy="loading || undefined"
    :aria-label="iconOnly ? label : undefined"
  >
    <span v-if="loading" class="at-spin" aria-hidden="true" />
    <AtIcon v-else-if="icon" :name="icon" />
    <slot v-if="!iconOnly">{{ label }}</slot>
  </button>
</template>
