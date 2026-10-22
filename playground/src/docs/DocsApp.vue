<script setup lang="ts">
import { computed, ref, type Component } from 'vue'
import { useDensity, useTheme } from '@tymotheusz/atelier'
import AppSwitcher from '../AppSwitcher.vue'
import { go, href, sub } from '../router'
import { GUIDE_GROUPS, byFamily, bySlug, guideById, guidesOf, titleOf } from './registry'
import './docs.css'

import IntroPage from './pages/IntroPage.vue'
import InstallPage from './pages/InstallPage.vue'
import ThemePage from './pages/ThemePage.vue'
import PrinciplesPage from './pages/PrinciplesPage.vue'
import ColorsPage from './pages/ColorsPage.vue'
import TypographyPage from './pages/TypographyPage.vue'
import SpacingPage from './pages/SpacingPage.vue'
import ShapePage from './pages/ShapePage.vue'
import DensityPage from './pages/DensityPage.vue'
import MotionPage from './pages/MotionPage.vue'
import StatesPage from './pages/StatesPage.vue'
import IconsPage from './pages/IconsPage.vue'
import TonePage from './pages/TonePage.vue'
import DashboardPatternPage from './pages/DashboardPatternPage.vue'
import DatabasePatternPage from './pages/DatabasePatternPage.vue'
import SitePatternPage from './pages/SitePatternPage.vue'
import ComponentsIndexPage from './pages/ComponentsIndexPage.vue'
import ComponentPage from './pages/ComponentPage.vue'

/**
 * Documentation du design system, bâtie avec le design system lui-même.
 * L'autre app du playground est une app d'exemple : le sélecteur en haut à gauche passe de l'une à l'autre.
 */
const { mode } = useTheme()
const { density } = useDensity()

const GUIDES: Record<string, Component> = {
  '': IntroPage,
  installation: InstallPage,
  theme: ThemePage,
  'fondations/principes': PrinciplesPage,
  'fondations/couleurs': ColorsPage,
  'fondations/typographie': TypographyPage,
  'fondations/espacement': SpacingPage,
  'fondations/formes': ShapePage,
  'fondations/densite': DensityPage,
  'fondations/mouvement': MotionPage,
  'fondations/etats': StatesPage,
  'fondations/icones': IconsPage,
  'fondations/ton': TonePage,
  'canons/dashboard': DashboardPatternPage,
  'canons/base-de-donnees': DatabasePatternPage,
  'canons/site': SitePatternPage
}

const id = computed(() => sub.value)
const slug = computed(() => (id.value.startsWith('composants/') ? id.value.slice('composants/'.length) : ''))
const entry = computed(() => bySlug[slug.value] ?? null)
const page = computed<Component>(() =>
  entry.value ? ComponentPage : id.value === 'composants' ? ComponentsIndexPage : GUIDES[id.value] ?? IntroPage)

const q = ref('')
const sections = computed(() => {
  const needle = q.value.trim().toLowerCase()
  const keep = (...texts: string[]) => !needle || texts.some(t => t.toLowerCase().includes(needle))
  const out: { label?: string; items: { id: string; label: string; icon?: string }[] }[] = []

  for (const group of GUIDE_GROUPS) {
    const items = guidesOf(group).filter(p => keep(p.label, p.tagline)).map(p => ({ id: p.id, label: p.label, icon: p.icon }))
    if (items.length) out.push({ label: group === 'Démarrer' ? undefined : group, items })
  }
  const index = keep('Tous les composants') ? [{ id: 'composants', label: 'Tous les composants', icon: 'board' }] : []
  if (index.length) out.push({ label: 'Composants', items: index })
  for (const { family, items } of byFamily) {
    const kept = items.filter(c => keep(c.name, c.tagline, c.family)).map(c => ({ id: 'composants/' + c.slug, label: c.name }))
    if (kept.length) out.push({ label: family, items: kept })
  }
  return out
})
const vide = computed(() => !sections.value.length)

const crumbs = computed(() => {
  const racine = { label: 'Atelier', onClick: () => go('doc') }
  if (!id.value) return [{ label: 'Atelier' }, { label: 'Introduction' }]
  if (entry.value) return [racine, { label: 'Composants', onClick: () => go('doc/composants') }, { label: entry.value.name }]
  const group = guideById[id.value]?.group
  const milieu = group && group !== 'Démarrer' ? [{ label: group, onClick: () => go('doc') }] : []
  return [racine, ...milieu, { label: titleOf(id.value) }]
})
</script>

<template>
  <AtAppShell :route-key="id">
    <template #sidebar>
      <AtSidebar>
        <template #header><AppSwitcher /></template>
        <div class="doc-side-search">
          <AtInput v-model="q" size="sm" icon="search" placeholder="Filtrer la documentation" aria-label="Filtrer la documentation" />
        </div>
        <p v-if="vide" class="doc-side-empty">Aucune page ne contient « {{ q }} ».</p>
        <AtNavGroup v-for="(s, i) in sections" :key="s.label ?? i" :label="s.label">
          <AtNavItem
            v-for="p in s.items" :key="p.id" :icon="p.icon" :href="href('doc/' + p.id)"
            :active="id === p.id"
          >{{ p.label }}</AtNavItem>
        </AtNavGroup>
        <template #footer>Documentation bâtie avec <code>@tymotheusz/atelier</code></template>
      </AtSidebar>
    </template>
    <template #topbar>
      <AtBreadcrumbs :items="crumbs" />
      <span class="at-toolbar__spacer" />
      <AtSegment v-model="mode" label="Thème" :items="[{ value: 'system', label: 'Système', icon: 'monitor', iconOnly: true }, { value: 'light', label: 'Clair', icon: 'sun', iconOnly: true }, { value: 'dark', label: 'Sombre', icon: 'moon', iconOnly: true }]" />
      <AtSegment v-model="density" label="Densité" class="pg-density" :items="[{ value: 'comfortable', label: 'Confortable' }, { value: 'compact', label: 'Compact' }]" />
    </template>
    <component :is="page" :key="id" v-bind="entry ? { entry } : {}" />
  </AtAppShell>
</template>
