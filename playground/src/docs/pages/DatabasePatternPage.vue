<script setup lang="ts">
import { computed, ref } from 'vue'
import { createView, filter, sort, uid, type Property, type View } from '@tymotheusz/atelier'
import { href } from '../../router'
import DocExample from '../DocExample.vue'

interface Tache { id: string; titre: string; statut: string; priorite: string; due: string | null; estimate: number | null; tags: string[]; desc: string }

const jour = (n: number) => { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10) }

const CANON = `
  <div data-density="compact" style="display: flex; flex-direction: column; gap: var(--space-4)">
    <AtDataView
      v-model:views="vues" v-model:active-view="active"
      :rows="rows" :schema="schema" new-label="Nouvelle tâche"
      @update="(row, key, value) => (row[key] = value)"
      @create="defaults => ouvrir(creer(defaults))"
      @open="row => ouvrir(row)"
      @delete="liste => (rows = rows.filter(r => !liste.includes(r)))"
    />

    <AtDrawer v-model:open="panneau" label="Tâche">
      <template #actions>
        <AtButton variant="ghost" size="sm" icon="trash" icon-only label="Supprimer"
          @click="rows = rows.filter(r => r !== courante); panneau = false" />
      </template>
      <template v-if="courante">
        <textarea v-model="courante.titre" class="at-title-input" rows="1" placeholder="Sans titre" aria-label="Titre" />
        <AtPropertyList :schema="schema" :row="courante" @update="(k, v) => (courante[k] = v)" />
        <div class="at-divider" />
        <label class="at-label" for="canon-desc">Description</label>
        <textarea id="canon-desc" v-model="courante.desc" class="at-bare-textarea" placeholder="Ajouter quelques lignes…" />
      </template>
    </AtDrawer>
  </div>
`

function donnees() {
  const schema: Property<Tache>[] = [
    { key: 'titre', name: 'Nom', type: 'title', width: 260 },
    { key: 'statut', name: 'Statut', type: 'status', width: 130, options: [
      { value: 'todo', label: 'À faire' },
      { value: 'doing', label: 'En cours', tone: 'info' },
      { value: 'blocked', label: 'Bloqué', tone: 'danger' },
      { value: 'done', label: 'Terminé', tone: 'success' }
    ] },
    { key: 'priorite', name: 'Priorité', type: 'select', width: 120, options: [
      { value: 'low', label: 'Basse', color: 'gray' },
      { value: 'med', label: 'Moyenne', color: 'yellow' },
      { value: 'high', label: 'Haute', color: 'orange' }
    ] },
    { key: 'due', name: 'Échéance', type: 'date', width: 120, overdue: r => !!r.due && r.due < jour(0) && r.statut !== 'done' },
    { key: 'estimate', name: 'Estimation', type: 'number', suffix: ' h', width: 110 },
    { key: 'tags', name: 'Étiquettes', type: 'multi', width: 170, options: [
      { value: 'front', label: 'Front', color: 'blue' },
      { value: 'back', label: 'Back', color: 'purple' },
      { value: 'design', label: 'Design', color: 'pink' }
    ] },
    { key: 'desc', name: 'Description', type: 'text', width: 220 }
  ]
  const rows = ref<Tache[]>([
    { id: 't1', titre: 'Écran de connexion', statut: 'doing', priorite: 'high', due: jour(3), estimate: 10, tags: ['front'], desc: '' },
    { id: 't2', titre: 'Tests utilisateurs', statut: 'done', priorite: 'med', due: jour(-6), estimate: 2, tags: ['design'], desc: '' },
    { id: 't3', titre: 'Formulaire de contact', statut: 'blocked', priorite: 'high', due: jour(-2), estimate: 8, tags: ['back'], desc: 'Bloqué par l’API d’envoi.' },
    { id: 't4', titre: 'Page tarifs', statut: 'todo', priorite: 'low', due: jour(12), estimate: 3, tags: ['front', 'design'], desc: '' }
  ])
  const vues = ref<View[]>([
    createView('Tableau', 'table', { hidden: ['desc'] }),
    createView('Kanban', 'board', { groupBy: 'statut', hidden: ['statut', 'estimate', 'desc'] }),
    createView('Calendrier', 'calendar', { dateProp: 'due' }),
    createView('En retard', 'list', { filters: [filter('due', 'past'), filter('statut', 'isnot', 'done')], sorts: [sort('due')], hidden: ['tags', 'desc'] })
  ])
  const courante = ref<Tache | null>(null)
  const panneau = computed({ get: () => !!courante.value, set: v => { if (!v) courante.value = null } })
  const creer = (defaults: Partial<Tache>) => {
    const t: Tache = { id: uid(), titre: '', statut: 'todo', priorite: 'med', due: null, estimate: null, tags: [], desc: '', ...defaults }
    rows.value.push(t)
    return rows.value[rows.value.length - 1]
  }
  return { schema, rows, vues, active: ref(vues.value[0].id), courante, panneau, creer, ouvrir: (r: Tache) => (courante.value = r) }
}
</script>

<template>
  <AtPage title="Canon : base de données" description="Vues enregistrées, densité compacte, panneau de détail. Le composant émet, le parent applique.">
    <p class="doc-lead">
      C’est la mise en page des listes que l’on manipule : tâches, commandes, utilisateurs, signalements. Une barre
      de vues, une barre d’outils, la vue, et un panneau de détail qui s’ouvre sans quitter la liste.
    </p>

    <section class="doc-sec">
      <h2 class="t-heading-2">La règle</h2>
      <ul class="doc-list">
        <li>Densité compacte : <code class="t-code">data-density="compact"</code> sur le conteneur, ou pour toute l’app.</li>
        <li>Un seul <code class="t-code">Property[]</code> sert la vue <strong>et</strong> le panneau de détail : les deux restent d’accord sans effort.</li>
        <li>Les lignes ne sont jamais modifiées par le composant. <code class="t-code">update</code>, <code class="t-code">create</code>, <code class="t-code">open</code>, <code class="t-code">delete</code> remontent au parent.</li>
        <li>Les vues, elles, sont modifiées en place : elles sont du JSON, donc elles se persistent telles quelles.</li>
        <li>Ouvrir une ligne ouvre un <code class="t-code">AtDrawer</code>, pas une page : on revient à la liste sans perdre sa place.</li>
        <li>Le titre de l’objet s’édite à même le panneau ; les autres propriétés passent par <code class="t-code">AtPropertyList</code>.</li>
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">En entier</h2>
      <p class="at-muted" style="margin: 0; max-width: var(--measure-prose)">
        Changer de vue, filtrer, trier, grouper, glisser une carte d’une colonne à l’autre, modifier une cellule,
        créer une ligne, ouvrir le panneau : tout est actif.
      </p>
      <DocExample frame="plain" :code="CANON" :setup="donnees" open />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Voir aussi</h2>
      <div class="doc-grid">
        <AtCard :href="href('doc/composants/at-data-view')" title="AtDataView" description="Les quatre dispositions, les vues, les filtres, l’édition en place." />
        <AtCard :href="href('doc/composants/at-property-list')" title="AtPropertyList" description="Les propriétés d’une ligne, éditables, dans un panneau." />
        <AtCard :href="href('demo')" title="App d’exemple" description="Le même canon sur une vraie app : projets, milestones, tâches." />
      </div>
    </section>
  </AtPage>
</template>
