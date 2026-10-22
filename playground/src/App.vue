<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme, useDensity } from '@tymotheusz/atelier'
import ComponentsPage from './pages/ComponentsPage.vue'
import ProjectsPage from './pages/ProjectsPage.vue'
import { store, openTasks } from './data'

const { mode } = useTheme()
const { density } = useDensity()
const page = ref<'components' | 'projects' | 'tasks' | 'project'>((location.hash.slice(1) as any) || 'projects')
const projectId = ref<string | null>(null)
function go(p: typeof page.value, id: string | null = null) { page.value = p; projectId.value = id; history.replaceState(null, '', p === 'project' ? '#projects' : '#' + p) }
const crumbs = computed(() => {
  if (page.value === 'components') return [{ label: 'Composants' }]
  const base = [{ label: 'Projets', onClick: () => go('projects') }]
  if (page.value === 'tasks') return [...base, { label: 'Toutes les tâches' }]
  if (page.value === 'project') return [...base, { label: store.projects.find(p => p.id === projectId.value)?.name || 'Sans titre' }]
  return [{ label: 'Projets' }]
})
</script>

<template>
  <AtAppShell :route-key="page + (projectId ?? '')">
    <template #sidebar>
      <AtSidebar>
        <template #header><div class="at-workspace"><AtIconTile name="blocks" color="ink" /><span class="at-ellipsis">Atelier</span></div></template>
        <AtNavGroup>
          <AtNavItem icon="home" :active="page === 'projects'" :count="store.projects.length" @click="go('projects')">Projets</AtNavItem>
          <AtNavItem icon="check-square" :active="page === 'tasks'" :count="openTasks.length" @click="go('tasks')">Toutes les tâches</AtNavItem>
          <AtNavItem icon="board" :active="page === 'components'" @click="go('components')">Composants</AtNavItem>
        </AtNavGroup>
        <AtNavGroup label="Projets">
          <AtNavItem
            v-for="p in store.projects" :key="p.id" :icon="p.icon || 'folder'" :tile="p.color as any"
            :active="page === 'project' && projectId === p.id" @click="go('project', p.id)"
          >{{ p.name || 'Sans titre' }}</AtNavItem>
        </AtNavGroup>
        <template #footer>Playground de <code>@tymotheusz/atelier</code></template>
      </AtSidebar>
    </template>
    <template #topbar>
      <AtBreadcrumbs :items="crumbs" />
      <span class="at-toolbar__spacer" />
      <AtSegment v-model="mode" label="Thème" :items="[{ value: 'system', label: 'Système', icon: 'monitor', iconOnly: true }, { value: 'light', label: 'Clair', icon: 'sun', iconOnly: true }, { value: 'dark', label: 'Sombre', icon: 'moon', iconOnly: true }]" />
      <AtSegment v-model="density" label="Densité" class="pg-density" :items="[{ value: 'comfortable', label: 'Confortable' }, { value: 'compact', label: 'Compact' }]" />
    </template>
    <ComponentsPage v-if="page === 'components'" />
    <ProjectsPage v-else :page="page" :project-id="projectId" @go="go" />
  </AtAppShell>
</template>

<style>
@media (max-width: 700px) { .pg-density { display: none !important; } }
</style>
