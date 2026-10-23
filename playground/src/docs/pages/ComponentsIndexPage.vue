<script setup lang="ts">
import { computed, ref } from 'vue'
import { href } from '../../router'
import { byFamily, components } from '../registry'

/** Index de tous les composants, groupés par famille, avec recherche. */
const q = ref('')
const groupes = computed(() => {
  const needle = q.value.trim().toLowerCase()
  if (!needle) return byFamily
  return byFamily
    .map(g => ({ family: g.family, items: g.items.filter(c => (c.name + ' ' + c.tagline + ' ' + c.family).toLowerCase().includes(needle)) }))
    .filter(g => g.items.length)
})
const total = computed(() => groupes.value.reduce((n, g) => n + g.items.length, 0))
</script>

<template>
  <AtPage title="Composants" :description="`${components.length} composants Vue 3, groupés par famille. Chaque page montre des exemples vivants, les règles d’usage et l’API complète.`">
    <div style="display: flex; align-items: center; gap: var(--space-3); flex-wrap: wrap">
      <div style="width: 320px; max-width: 100%">
        <AtInput v-model="q" icon="search" placeholder="Chercher un composant…" aria-label="Chercher un composant" />
      </div>
      <span class="at-muted" style="font-size: 13px">{{ total }} composant{{ total > 1 ? 's' : '' }}</span>
    </div>

    <section v-for="g in groupes" :key="g.family" class="doc-sec">
      <h2 class="t-heading-2">{{ g.family }}</h2>
      <div class="doc-grid doc-grid--wide">
        <AtCard v-for="c in g.items" :key="c.slug" :href="href('doc/composants/' + c.slug)" :title="c.name" :description="c.tagline" />
      </div>
    </section>

    <AtEmpty v-if="!groupes.length" :message="`Aucun composant ne correspond à « ${q} ».`" />
  </AtPage>
</template>
