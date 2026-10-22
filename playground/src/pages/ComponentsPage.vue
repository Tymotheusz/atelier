<script setup lang="ts">
import { ref } from 'vue'

const name = ref('Refonte du site perso')
const search = ref('')
const status = ref<string | null>('doing')
const mail = ref('timothee@exemple')
const notes = ref('')
const archived = ref(false)
const sub = ref(true)
const notif = ref(false)
const compact = ref(true)
const tab = ref('overview')
const view = ref('table')
const modal = ref(false)
const drawer = ref(false)
const lastAction = ref('')
const rows = [
  { page: '/messe-du-jour', views: 8214, time: '3 min 05', source: 'Recherche' },
  { page: '/calendrier', views: 2960, time: '1 min 48', source: 'Direct' },
  { page: '/livrets', views: 1127, time: '4 min 12', source: 'Newsletter' }
]
</script>

<template>
  <AtPage title="Composants" description="Tous les composants de @tymotheusz/atelier, dans le thème et la densité choisis en haut à droite." wide>
    <section class="pg-sec">
      <h2 class="t-heading-3">Boutons</h2>
      <div class="pg-row">
        <AtButton variant="primary" icon="plus">Nouvelle page</AtButton>
        <AtButton>Partager</AtButton>
        <AtButton variant="ghost">Annuler</AtButton>
        <AtButton variant="danger">Supprimer</AtButton>
        <AtButton variant="primary" disabled>Publier</AtButton>
        <AtButton variant="primary" loading>Enregistrement</AtButton>
      </div>
      <div class="pg-row">
        <AtButton variant="primary" size="lg">Commencer</AtButton>
        <AtButton size="sm" icon="filter">Filtrer</AtButton>
        <AtButton variant="ghost" size="sm" icon="sort">Trier</AtButton>
        <AtButton variant="ghost" icon="more" icon-only label="Plus d’actions" />
        <AtDropdown label="Page" align="start">
          <template #trigger="{ toggle }"><AtButton icon="more" @click="toggle">Menu</AtButton></template>
          <AtMenuItem icon="edit" kbd="F2" @select="lastAction = 'Renommer'">Renommer</AtMenuItem>
          <AtMenuItem icon="copy" kbd="⌘D" @select="lastAction = 'Dupliquer'">Dupliquer</AtMenuItem>
          <AtMenuItem icon="link" @select="lastAction = 'Copier le lien'">Copier le lien</AtMenuItem>
          <AtMenuSeparator />
          <AtMenuItem icon="trash" danger @select="lastAction = 'Supprimer'">Supprimer</AtMenuItem>
        </AtDropdown>
        <span v-if="lastAction" class="at-muted" style="font-size: 13px">Action : {{ lastAction }}</span>
      </div>
    </section>

    <section class="pg-sec">
      <h2 class="t-heading-3">Formulaires</h2>
      <div class="pg-grid">
        <AtField v-slot="f" label="Nom du projet" hint="Visible dans la barre latérale."><AtInput :id="f.id" v-model="name" /></AtField>
        <AtField v-slot="f" label="Recherche"><AtInput :id="f.id" v-model="search" icon="search" kbd="⌘K" placeholder="Rechercher une page…" /></AtField>
        <AtField v-slot="f" label="Statut">
          <AtSelect :id="f.id" v-model="status" :options="[{ value: 'todo', label: 'À faire' }, { value: 'doing', label: 'En cours' }, { value: 'done', label: 'Terminé' }]" />
        </AtField>
        <AtField v-slot="f" label="E-mail" :error="mail.includes('.') ? undefined : 'Adresse incomplète : il manque le domaine.'">
          <AtInput :id="f.id" v-model="mail" :invalid="f.invalid" />
        </AtField>
        <AtField v-slot="f" label="Notes" style="grid-column: 1 / -1"><AtTextarea :id="f.id" v-model="notes" placeholder="Quelques lignes pour situer le projet" /></AtField>
      </div>
      <div class="pg-row" style="gap: 20px">
        <AtCheckbox v-model="archived" label="Archivées" />
        <AtCheckbox v-model="sub" label="Afficher les sous-pages" />
        <AtCheckbox :model-value="false" indeterminate label="Sélection partielle" />
        <AtSwitch v-model="notif" label="Notifications" />
        <AtSwitch v-model="compact" label="Mode compact" />
      </div>
    </section>

    <section class="pg-sec">
      <h2 class="t-heading-3">Statuts et étiquettes</h2>
      <div class="pg-row">
        <AtTag>Personnel</AtTag><AtTag color="brown">Lecture</AtTag><AtTag color="orange">Urgent</AtTag><AtTag color="yellow">Idée</AtTag>
        <AtTag color="green">Publié</AtTag><AtTag color="blue">Dev</AtTag><AtTag color="purple">Design</AtTag><AtTag color="pink">Famille</AtTag><AtTag color="red">Bloqué</AtTag>
      </div>
      <div class="pg-row">
        <AtBadge tone="success">En ligne</AtBadge><AtBadge tone="warning">En attente</AtBadge><AtBadge tone="danger">Échec</AtBadge><AtBadge tone="info">En cours</AtBadge><AtBadge>Brouillon</AtBadge>
        <AtAvatar name="Timothée Cornic" size="md" /><AtAvatar name="Marie" size="md" /><AtKbd>⌘K</AtKbd>
        <div style="width: 200px"><AtProgress :value="64" /></div>
      </div>
    </section>

    <section class="pg-sec">
      <h2 class="t-heading-3">Navigation</h2>
      <AtTabs v-model="tab" :items="[{ value: 'overview', label: 'Aperçu' }, { value: 'activity', label: 'Activité', count: 12 }, { value: 'settings', label: 'Paramètres' }]" />
      <AtSegment v-model="view" label="Vue" :items="[{ value: 'table', label: 'Tableau', icon: 'table' }, { value: 'board', label: 'Board', icon: 'board' }, { value: 'calendar', label: 'Calendrier', icon: 'calendar' }]" />
    </section>

    <section class="pg-sec">
      <h2 class="t-heading-3">Données</h2>
      <div class="pg-stats">
        <AtStat label="Visiteurs uniques" value="3 482" delta="+12,4 %" trend="up" :spark="[210, 240, 228, 260, 251, 290, 302, 288, 330, 345, 338, 372]" foot="30 derniers jours" />
        <AtStat label="Temps moyen" value="2 min 41" delta="+8 s" trend="up" :spark="[140, 150, 148, 152, 149, 155, 158, 154, 160, 161, 159, 161]" foot="30 derniers jours" />
        <AtStat label="Taux de rebond" value="46,2 %" delta="−3,1 pts" trend="up" :spark="[52, 51, 52, 50, 49, 50, 48, 49, 47, 47, 46, 46]" foot="30 derniers jours" />
      </div>
      <AtTable
        :columns="[{ key: 'page', label: 'Page' }, { key: 'views', label: 'Vues', align: 'right', format: v => v.toLocaleString('fr-FR') }, { key: 'time', label: 'Temps moyen', align: 'right' }, { key: 'source', label: 'Source' }]"
        :rows="rows" row-key="page"
      >
        <template #cell-source="{ value }"><AtTag :color="value === 'Recherche' ? 'blue' : value === 'Direct' ? 'green' : 'purple'">{{ value }}</AtTag></template>
      </AtTable>
    </section>

    <section class="pg-sec">
      <h2 class="t-heading-3">Contenu et surfaces</h2>
      <div class="pg-grid">
        <AtCard title="Sauvegardes" description="Dernière exécution le 21 oct. à 03:00">
          <template #actions><AtBadge tone="success">OK</AtBadge></template>
          <p style="margin: 0">Les sauvegardes quotidiennes sont conservées 30 jours, puis archivées chaque mois.</p>
          <template #footer><AtButton size="sm" @click="modal = true">Ouvrir une modale</AtButton><AtButton size="sm" variant="ghost" @click="drawer = true">Ouvrir un drawer</AtButton></template>
        </AtCard>
        <AtCard href="#" title="Construire un design system pour ses projets perso" description="Tokens, densité, thèmes : les choix qui font tenir un système sur plusieurs sites.">
          <div class="pg-row"><AtTag color="blue">Dev</AtTag><span class="at-muted" style="font-size: 12px">5 min de lecture</span></div>
        </AtCard>
        <AtEmpty message="Aucun élément pour l’instant."><template #action><AtButton size="sm" icon="plus">Créer</AtButton></template></AtEmpty>
      </div>
    </section>

    <AtModal v-model:open="modal" title="Supprimer la page ?" description="La page et ses sous-pages iront dans la corbeille pendant 30 jours.">
      <p style="margin: 0">Tu pourras la restaurer depuis la corbeille.</p>
      <template #footer="{ close }"><AtButton variant="ghost" @click="close">Annuler</AtButton><AtButton variant="danger" @click="close">Supprimer</AtButton></template>
    </AtModal>
    <AtDrawer v-model:open="drawer" label="Détail">
      <h2 class="t-heading-2" style="margin: 0">Un panneau latéral</h2>
      <p class="at-muted" style="margin: 0">Échap ou un clic sur le voile pour fermer.</p>
    </AtDrawer>
  </AtPage>
</template>

<style>
.pg-sec { display: flex; flex-direction: column; gap: var(--space-3); }
.pg-sec h2 { margin: 0; }
.pg-row { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-2); }
.pg-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-4) var(--space-5); }
</style>
