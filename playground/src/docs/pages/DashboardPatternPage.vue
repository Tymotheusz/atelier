<script setup lang="ts">
import { ref } from 'vue'
import { href } from '../../router'
import DocExample from '../DocExample.vue'

const CANON = `
  <div style="height: 520px; border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden">
    <AtAppShell :route-key="periode">
      <template #sidebar>
        <AtSidebar>
          <template #header>
            <div class="at-workspace"><AtIconTile name="globe" color="ink" />Site vitrine</div>
          </template>
          <AtNavGroup>
            <AtNavItem icon="home" active>Statistiques</AtNavItem>
            <AtNavItem icon="doc" :count="412">Pages</AtNavItem>
            <AtNavItem icon="alert" :count="7">Incidents</AtNavItem>
          </AtNavGroup>
          <AtNavGroup label="Réglages">
            <AtNavItem icon="person">Utilisateurs</AtNavItem>
            <AtNavItem icon="settings">Préférences</AtNavItem>
          </AtNavGroup>
        </AtSidebar>
      </template>
      <template #topbar>
        <AtBreadcrumbs :items="[{ label: 'Site vitrine' }, { label: 'Statistiques' }]" />
        <span class="at-toolbar__spacer" />
        <AtSegment v-model="periode" label="Période" :items="[
          { value: '7', label: '7 j' }, { value: '30', label: '30 j' }, { value: '365', label: '1 an' }
        ]" />
        <AtButton size="sm" icon="doc">Exporter</AtButton>
      </template>

      <AtPage title="Statistiques" :description="'Trafic et engagement sur les ' + periode + ' derniers jours.'" wide>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: var(--space-4)">
          <AtStat label="Visiteurs uniques" value="3 482" delta="+12,4 %" trend="up" color="chart-1"
            :spark="[210, 240, 228, 260, 251, 290, 302, 288, 330, 345, 338, 372]" :foot="periode + ' derniers jours'" />
          <AtStat label="Pages vues" value="12 480" delta="+6,1 %" trend="up" color="chart-2"
            :spark="[820, 910, 880, 940, 1010, 980, 1060, 1120, 1090, 1150, 1210, 1248]" :foot="periode + ' derniers jours'" />
          <AtStat label="Temps moyen" value="2 min 41" delta="+8 s" trend="up" color="chart-3"
            :spark="[140, 150, 148, 152, 149, 155, 158, 154, 160, 161, 159, 161]" :foot="periode + ' derniers jours'" />
          <AtStat label="Taux de rebond" value="46,2 %" delta="−3,1 pts" trend="up" color="chart-4"
            :spark="[52, 51, 52, 50, 49, 50, 48, 49, 47, 47, 46, 46]" :foot="periode + ' derniers jours'" />
        </div>

        <AtCard title="Pages les plus vues" description="Classement sur la période">
          <template #actions><AtBadge tone="info">Mis à jour il y a 5 min</AtBadge></template>
          <AtTable :columns="colonnes" :rows="pages" row-key="page">
            <template #cell-source="{ value }">
              <AtTag :color="value === 'Recherche' ? 'blue' : value === 'Direct' ? 'green' : 'purple'">{{ value }}</AtTag>
            </template>
          </AtTable>
        </AtCard>
      </AtPage>
    </AtAppShell>
  </div>
`
</script>

<template>
  <AtPage title="Canon : dashboard" description="Le résumé avant le détail. C’est la mise en page de tous les outils d’administration.">
    <p class="doc-lead">
      Sidebar, barre supérieure, titre, rangée de tuiles, puis le détail. L’ordre n’est pas négociable : on voit
      d’abord si quelque chose cloche, ensuite où.
    </p>

    <section class="doc-sec">
      <h2 class="t-heading-2">La règle</h2>
      <ul class="doc-list">
        <li><code class="t-code">AtAppShell</code> à la racine : la sidebar et la barre supérieure restent fixes, le contenu défile.</li>
        <li>Barre supérieure : fil d’Ariane à gauche, période et export à droite, séparés par <code class="t-code">at-toolbar__spacer</code>.</li>
        <li>Contenu : titre <code class="t-code">t-heading-1</code> et une ligne de contexte, puis 3 ou 4 <code class="t-code">AtStat</code>, puis le détail dans des <code class="t-code">AtCard</code>.</li>
        <li>Les graphiques et les bandes de couleur des tuiles utilisent <code class="t-code">chart-1</code> à <code class="t-code">chart-5</code>, dans l’ordre ; la sparkline suit la bande.</li>
        <li>Un état (<code class="t-code">danger</code>) en bande seulement si le libellé dit déjà de quoi il s’agit.</li>
        <li>Fond de page <code class="t-code">bg</code>, contenus sur <code class="t-code">surface</code>.</li>
        <li>Toutes les tuiles d’une rangée portent la même période en pied : sinon on compare des choses différentes.</li>
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">En entier</h2>
      <DocExample
        frame="plain" :code="CANON" open
        :setup="() => ({
          periode: ref('30'),
          colonnes: [
            { key: 'page', label: 'Page' },
            { key: 'vues', label: 'Vues', align: 'right', format: (v: number) => v.toLocaleString('fr-FR') },
            { key: 'temps', label: 'Temps moyen', align: 'right' },
            { key: 'source', label: 'Source' }
          ],
          pages: [
            { page: '/accueil', vues: 8214, temps: '3 min 05', source: 'Recherche' },
            { page: '/tarifs', vues: 2960, temps: '1 min 48', source: 'Direct' },
            { page: '/blog/nouveautes', vues: 1127, temps: '4 min 12', source: 'Newsletter' },
            { page: '/contact', vues: 964, temps: '6 min 30', source: 'Recherche' }
          ]
        })"
      />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Voir aussi</h2>
      <div class="doc-grid">
        <AtCard :href="href('doc/composants/at-app-shell')" title="AtAppShell" description="La coquille : sidebar, barre supérieure, contenu défilant." />
        <AtCard :href="href('doc/composants/at-stat')" title="AtStat" description="La tuile de chiffre clé, avec variation et sparkline." />
        <AtCard :href="href('doc/canons/base-de-donnees')" title="Canon : base de données" description="Quand le détail devient une vue manipulable." />
      </div>
    </section>
  </AtPage>
</template>
