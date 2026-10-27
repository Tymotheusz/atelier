<script setup lang="ts">
import { computed } from 'vue'
import { useTheme, useDensity } from '@tymotheusz/atelier'
import AppSwitcher from '../AppSwitcher.vue'
import ProjectsPage from './ProjectsPage.vue'
import { store, openTasks } from './data'
import { go, sub } from '../router'

/**
 * App d'exemple : ce que donne Atelier sur un outil réel (projets, milestones, tâches).
 * La documentation du système est l'autre app, accessible par le sélecteur en haut à gauche.
 */
const { mode } = useTheme()
const { density } = useDensity()

const seg = computed(() => sub.value.split('/'))
const page = computed<'projects' | 'tasks' | 'project'>(() =>
  seg.value[0] === 'taches' ? 'tasks' : seg.value[0] === 'projet' ? 'project' : 'projects')
const projectId = computed(() => (page.value === 'project' ? seg.value[1] ?? null : null))

/** Traduit la navigation interne de la page en routes `#/demo/...`. */
function navigate(p: string, id: string | null = null) {
  go(p === 'project' && id ? `demo/projet/${id}` : p === 'tasks' ? 'demo/taches' : 'demo')
}

const crumbs = computed(() => {
  const base = [{ label: 'Projets', onClick: () => navigate('projects') }]
  if (page.value === 'tasks') return [...base, { label: 'Toutes les tâches' }]
  if (page.value === 'project') return [...base, { label: store.projects.find(p => p.id === projectId.value)?.name || 'Sans titre' }]
  return [{ label: 'Projets' }]
})
</script>

<template>
  <AtAppShell :route-key="page + (projectId ?? '')">
    <template #sidebar>
      <AtSidebar>
        <template #header><AppSwitcher /></template>
        <AtNavGroup>
          <AtNavItem icon="home" :active="page === 'projects'" :count="store.projects.length" @click="navigate('projects')">Projets</AtNavItem>
          <AtNavItem icon="check-square" :active="page === 'tasks'" :count="openTasks.length" @click="navigate('tasks')">Toutes les tâches</AtNavItem>
        </AtNavGroup>
        <AtNavGroup label="Projets">
          <AtNavItem
            v-for="p in store.projects" :key="p.id" :icon="p.icon || 'folder'" :tile="p.color as any"
            :active="page === 'project' && projectId === p.id" @click="navigate('project', p.id)"
          >{{ p.name || 'Sans titre' }}</AtNavItem>
        </AtNavGroup>
        <template #footer><AtUserMenu name="Timothée Cornic" email="timothee@exemple.fr" /></template>
      </AtSidebar>
    </template>
    <template #topbar>
      <AtBreadcrumbs :items="crumbs" />
      <span class="at-toolbar__spacer" />
      <AtSegment v-model="mode" label="Thème" :items="[{ value: 'system', label: 'Système', icon: 'monitor', iconOnly: true }, { value: 'light', label: 'Clair', icon: 'sun', iconOnly: true }, { value: 'dark', label: 'Sombre', icon: 'moon', iconOnly: true }]" />
      <AtSegment v-model="density" label="Densité" class="pg-density" :items="[{ value: 'comfortable', label: 'Confortable' }, { value: 'compact', label: 'Compact' }]" />
    </template>
    <ProjectsPage :page="page" :project-id="projectId" @go="navigate" />
  </AtAppShell>
</template>
