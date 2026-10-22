<script setup lang="ts">
defineProps<{ items: { label: string; href?: string; onClick?: () => void }[] }>()
</script>

<template>
  <nav class="at-breadcrumbs at-ellipsis" aria-label="Fil d'Ariane">
    <template v-for="(it, i) in items" :key="i">
      <span v-if="i > 0" aria-hidden="true">/</span>
      <span v-if="i === items.length - 1" aria-current="page" class="at-ellipsis">{{ it.label }}</span>
      <a v-else :href="it.href ?? '#'" @click="it.onClick && ($event.preventDefault(), it.onClick())">{{ it.label }}</a>
    </template>
  </nav>
</template>
