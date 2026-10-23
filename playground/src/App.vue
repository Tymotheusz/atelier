<script setup lang="ts">
import { app } from './router'
import DemoApp from './demo/DemoApp.vue'
import DocsApp from './docs/DocsApp.vue'
</script>

<template>
  <DocsApp v-if="app === 'doc'" />
  <DemoApp v-else />
</template>
