<script setup lang="ts">
import { href } from '../../router'
import DocExample from '../DocExample.vue'

const CANON = `
  <div data-density="comfortable" style="background: var(--bg); border: 1px solid var(--border);
    border-radius: var(--radius-lg); padding: var(--space-8) var(--space-6); display: flex;
    flex-direction: column; gap: var(--space-12)">

    <header style="max-width: var(--measure-prose); display: flex; flex-direction: column; gap: var(--space-4)">
      <span class="t-overline" style="color: var(--ink-subtle)">Suivi de projets</span>
      <h1 class="t-display" style="margin: 0">Vos projets, de l’idée à la mise en ligne</h1>
      <p class="t-prose" style="margin: 0; color: var(--ink-muted)">
        Une vue par équipe, des tâches qui restent lisibles, et le détail d’une ligne sans quitter la liste.
        Rien à installer : tout tient dans le navigateur.
      </p>
      <div style="display: flex; gap: var(--space-3); flex-wrap: wrap">
        <AtButton variant="primary" size="lg">Essayer gratuitement</AtButton>
        <AtButton size="lg" icon="doc">Voir la démonstration</AtButton>
      </div>
    </header>

    <section style="display: flex; flex-direction: column; gap: var(--space-6)">
      <h2 class="t-heading-2" style="margin: 0">Trois façons de s’en servir</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-6)">
        <AtCard href="#/doc/canons/site" title="En solo" description="Vos projets, vos vues, rien à partager.">
          <div style="display: flex; gap: 8px; align-items: center"><AtTag color="blue">Gratuit</AtTag></div>
        </AtCard>
        <AtCard href="#/doc/canons/site" title="En équipe" description="Les mêmes vues pour tout le monde.">
          <div style="display: flex; gap: 8px; align-items: center"><AtTag color="green">Jusqu’à 10 personnes</AtTag></div>
        </AtCard>
        <AtCard href="#/doc/canons/site" title="Sur mesure" description="Vos champs, vos statuts, votre vocabulaire.">
          <div style="display: flex; gap: 8px; align-items: center"><AtTag color="purple">Sur devis</AtTag></div>
        </AtCard>
      </div>
    </section>

    <section style="max-width: var(--measure-prose); display: flex; flex-direction: column; gap: var(--space-4)">
      <h2 class="t-heading-2" style="margin: 0">Pourquoi une colonne étroite</h2>
      <p class="t-prose" style="margin: 0">
        Un texte de site se lit sur 720 px au plus. Au-delà, l’œil perd la ligne en revenant à la marge : on
        relit la même phrase sans s’en rendre compte. La page peut être large ; la colonne de lecture, non.
      </p>
      <p class="t-prose" style="margin: 0">
        Sur mobile, les contrôles restent en taille <code class="t-code">lg</code> plutôt que de rétrécir :
        une cible trop petite au pouce ne vaut pas mieux qu’un bouton absent.
      </p>
    </section>
  </div>
`

</script>

<template>
  <AtPage title="Canon : page de site" description="Lire, respirer, comprendre. Les mêmes tokens, un autre rythme.">
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
