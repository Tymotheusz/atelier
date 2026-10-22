<script setup lang="ts">
defineProps<{ title?: string; description?: string; href?: string; as?: string }>()
</script>

<template>
  <component :is="href ? 'a' : (as || 'section')" :href="href" :class="['at-card', href && 'at-card--link']">
    <div v-if="title || description || $slots.actions" class="at-card__head">
      <div>
        <h3 v-if="title" class="at-card__title">{{ title }}</h3>
        <p v-if="description" class="at-card__desc">{{ description }}</p>
      </div>
      <slot name="actions" />
    </div>
    <slot />
    <div v-if="$slots.footer" class="at-card__foot"><slot name="footer" /></div>
  </component>
</template>
