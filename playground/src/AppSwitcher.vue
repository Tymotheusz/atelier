<script setup lang="ts">
import { go, app } from './router'

/** Sélecteur d'app en tête de barre latérale : documentation ou app d'exemple. */
const APPS = [
  { id: 'doc', name: 'Atelier', desc: 'Documentation du design system', icon: 'blocks' },
  { id: 'demo', name: 'Pilote', desc: 'App d’exemple : projets et tâches', icon: 'board' }
] as const

const current = () => APPS.find(a => a.id === app.value) ?? APPS[0]
</script>

<template>
  <AtDropdown label="Playground" align="start" :min-width="260">
    <template #trigger="{ toggle }">
      <button type="button" class="pg-switch" :aria-label="`App : ${current().name}`" @click="toggle">
        <AtIconTile :name="current().icon" color="ink" />
        <span class="pg-switch__text at-ellipsis">
          <span class="pg-switch__name at-ellipsis">{{ current().name }}</span>
          <span class="pg-switch__desc at-ellipsis">{{ current().desc }}</span>
        </span>
        <AtIcon name="chevron-down" />
      </button>
    </template>
    <AtMenuItem
      v-for="a in APPS" :key="a.id" :icon="a.icon" :meta="a.id === app ? '•' : undefined"
      @select="go(a.id)"
    >{{ a.name }}</AtMenuItem>
  </AtDropdown>
</template>
