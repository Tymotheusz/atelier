<script setup lang="ts">
import { href } from '../../router'
import DocExample from '../DocExample.vue'

const CANON = `
  <div data-density="comfortable" style="background: var(--bg); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: var(--space-8) var(--space-6); display: flex;
    flex-direction: column; gap: var(--space-12)">

    <header style="max-width: var(--measure-prose); display: flex; flex-direction: column; gap: var(--space-4)">
      <span class="t-overline" style="color: var(--ink-subtle)">Missel traditionnel</span>
      <h1 class="t-display" style="margin: 0">Le propre du jour, en latin et en français</h1>
      <p class="t-prose" style="margin: 0; color: var(--ink-muted)">
        Chaque matin, l’intégralité de la messe du jour selon le rite tridentin : propre, ordinaire,
        préface, en deux colonnes. À lire sur place ou à imprimer en livret.
      </p>
      <div style="display: flex; gap: var(--space-3); flex-wrap: wrap">
        <AtButton variant="primary" size="lg">Lire la messe du jour</AtButton>
        <AtButton size="lg" icon="calendar">Voir le calendrier</AtButton>
      </div>
    </header>

    <section style="display: flex; flex-direction: column; gap: var(--space-6)">
      <h2 class="t-heading-2" style="margin: 0">Trois façons de s’en servir</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-6)">
        <AtCard href="#/doc/canons/site" title="En ligne" description="La messe du jour, mise à jour à minuit.">
          <div style="display: flex; gap: 8px; align-items: center"><AtTag color="blue">Gratuit</AtTag></div>
        </AtCard>
        <AtCard href="#/doc/canons/site" title="En PDF" description="Le même texte, prêt à imprimer en A5.">
          <div style="display: flex; gap: 8px; align-items: center"><AtTag color="green">Deux colonnes</AtTag></div>
        </AtCard>
        <AtCard href="#/doc/canons/site" title="En livret" description="Mariage, funérailles, fête patronale.">
          <div style="display: flex; gap: 8px; align-items: center"><AtTag color="purple">Sur mesure</AtTag></div>
        </AtCard>
      </div>
    </section>

    <section style="max-width: var(--measure-prose); display: flex; flex-direction: column; gap: var(--space-4)">
      <h2 class="t-heading-2" style="margin: 0">Pourquoi deux colonnes</h2>
      <p class="t-prose" style="margin: 0">
        Le latin à gauche, le français à droite, alignés par péricope : on suit l’un en lisant l’autre.
        C’est la disposition des missels d’avant-guerre, et elle n’a pas été améliorée depuis.
      </p>
      <p class="t-prose" style="margin: 0">
        Sur mobile, les deux colonnes se superposent plutôt que de se réduire : une colonne de texte illisible
        ne vaut pas mieux que pas de colonne.
      </p>
    </section>
  </div>
`
</script>

<template>
  <AtPage title="Canon : page de site" description="Lire, respirer, comprendre. Les mêmes tokens, un autre rythme." wide>
    <p class="doc-lead">
      Un site n’est pas un dashboard à gros caractères. Le texte long passe à <code class="t-code">t-prose</code>
      sur une colonne de 720 px, les sections se séparent par de l’espace et non par des fonds colorés, et les
      contrôles passent en taille <code class="t-code">lg</code>.
    </p>

    <section class="doc-sec">
      <h2 class="t-heading-2">La règle</h2>
      <ul class="doc-list">
        <li>Colonne <code class="t-code">measure-page</code> centrée ; texte long sur <code class="t-code">measure-prose</code> au plus.</li>
        <li>Un seul <code class="t-code">t-display</code> par page, en hero — sans pleine hauteur d’écran.</li>
        <li>Sections espacées de <code class="t-code">space-12</code> à <code class="t-code">space-24</code>, gap de grille <code class="t-code">space-6</code>.</li>
        <li>Densité confortable, et <code class="t-code">AtButton size="lg"</code> pour les appels à l’action et les formulaires publics.</li>
        <li>Vouvoiement : ce sont des visiteurs, pas soi-même dans son outil.</li>
        <li>Pas de fond coloré pour marquer une section : l’espace suffit.</li>
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">En entier</h2>
      <DocExample frame="plain" :code="CANON" open />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Voir aussi</h2>
      <div class="doc-grid">
        <AtCard :href="href('doc/fondations/typographie')" title="Typographie" description="t-display, t-prose, et les largeurs de lecture." />
        <AtCard :href="href('doc/fondations/espacement')" title="Espacement" description="Les paliers de section, de space-12 à space-24." />
        <AtCard :href="href('doc/composants/at-card')" title="AtCard" description="La carte-lien, pour une grille d’articles ou d’offres." />
      </div>
    </section>
  </AtPage>
</template>
