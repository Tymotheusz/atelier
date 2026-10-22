<script setup lang="ts">
import AtIcon from './AtIcon.vue'
import AtKbd from './AtKbd.vue'
/**
 * `checked` est à trois états : absent = item d'action (`menuitem`), `true`/`false` = item cochable
 * (`menuitemcheckbox`). Le `default: undefined` est nécessaire : sans lui, Vue castait le booléen absent
 * à `false` et tous les items devenaient des cases à cocher non cochées.
 */
withDefaults(defineProps<{
  icon?: string
  label?: string
  kbd?: string
  meta?: string
  danger?: boolean
  checked?: boolean
  disabled?: boolean
}>(), { checked: undefined })
defineEmits<{ select: [e: MouseEvent] }>()
</script>

<template>
  <button
    type="button"
    :class="['at-menu-item', danger && 'at-menu-item--danger']"
    :role="checked !== undefined ? 'menuitemcheckbox' : 'menuitem'"
    :aria-checked="checked !== undefined ? checked : undefined"
    :disabled="disabled"
    @click="$emit('select', $event)"
  >
    <AtIcon v-if="icon" :name="icon" />
    <slot>{{ label }}</slot>
    <AtKbd v-if="kbd">{{ kbd }}</AtKbd>
    <span v-else-if="meta" class="at-menu-meta">{{ meta }}</span>
    <AtIcon v-else-if="checked" name="check" class="at-menu-check" />
  </button>
</template>
