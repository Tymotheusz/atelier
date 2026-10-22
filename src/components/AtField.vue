<script setup lang="ts">
import { useId } from '../composables/useId'

const props = defineProps<{ label?: string; hint?: string; error?: string; id?: string }>()
const fieldId = props.id ?? useId('field')
</script>

<template>
  <div class="at-field">
    <label v-if="label" class="at-label" :for="fieldId">{{ label }}</label>
    <slot :id="fieldId" :invalid="!!error" :describedby="error || hint ? fieldId + '-hint' : undefined" />
    <span v-if="error" :id="fieldId + '-hint'" class="at-hint at-hint--error">{{ error }}</span>
    <span v-else-if="hint" :id="fieldId + '-hint'" class="at-hint">{{ hint }}</span>
  </div>
</template>
