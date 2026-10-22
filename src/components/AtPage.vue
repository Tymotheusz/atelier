<script setup lang="ts">
defineProps<{ title?: string; description?: string; wide?: boolean }>()
</script>

<template>
  <div :class="['at-page', wide && 'at-page--wide']">
    <div v-if="title || $slots.head" class="at-page__head">
      <slot name="head">
        <h1 class="t-heading-1">{{ title }}</h1>
        <p v-if="description">{{ description }}</p>
      </slot>
    </div>
    <slot />
  </div>
</template>
