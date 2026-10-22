<script setup lang="ts">
import { ref, watch } from 'vue'
import AtButton from './AtButton.vue'

/** Canon de page d'app : sidebar + barre supérieure + contenu défilant. Sidebar en tiroir sous 860 px. */
const props = defineProps<{ routeKey?: string | number }>()
const navOpen = ref(false)
const page = ref<HTMLElement>()
watch(() => props.routeKey, () => { navOpen.value = false; if (page.value) page.value.scrollTop = 0 })
defineExpose({ closeNav: () => (navOpen.value = false) })
</script>

<template>
  <div :class="['at-shell', navOpen && 'at-shell--open']">
    <div class="at-shell__side"><slot name="sidebar" /></div>
    <div class="at-shell__scrim" @click="navOpen = false" />
    <div class="at-shell__main">
      <header class="at-topbar">
        <AtButton class="at-topbar__menu" variant="ghost" size="sm" icon="menu" icon-only label="Ouvrir la navigation" @click="navOpen = !navOpen" />
        <slot name="topbar" />
      </header>
      <main ref="page" class="at-shell__page"><slot /></main>
    </div>
  </div>
</template>
