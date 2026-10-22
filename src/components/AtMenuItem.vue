<script setup lang="ts">
import AtIcon from './AtIcon.vue'
import AtKbd from './AtKbd.vue'
defineProps<{ icon?: string; label?: string; kbd?: string; meta?: string; danger?: boolean; checked?: boolean; disabled?: boolean }>()
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
