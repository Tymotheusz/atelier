<script setup lang="ts">
import { components } from '../registry'
import { href } from '../../router'
import { icons, tokens } from '@tymotheusz/atelier'

const chiffres = [
  { label: 'Composants Vue', value: String(components.length), foot: 'Tous documentés avec exemples et API' },
  { label: 'Tokens de couleur', value: String(tokens.color.tokens.length), foot: 'Deux thèmes, contrastes vérifiés' },
  { label: 'Styles de texte', value: String(tokens.type.groups.reduce((n, g) => n + g.styles.length, 0)), foot: 'Classes t-* prêtes à poser' },
  { label: 'Pictogrammes', value: String(Object.keys(icons).length), foot: 'Jeu intégré, extensible' }
]

const portes = [
  { to: 'doc/fondations/principes', icon: 'star', title: 'Fondations', desc: 'Couleurs, typographie, espacement, densité, états : les décisions avant les composants.' },
  { to: 'doc/composants', icon: 'board', title: 'Composants', desc: 'Les ' + components.length + ' composants, par famille, avec leurs exemples vivants et leur API.' },
  { to: 'doc/canons/dashboard', icon: 'chart', title: 'Canons', desc: 'Les trois mises en page que le système sait tenir : dashboard, base de données, site.' },
  { to: 'doc/installation', icon: 'doc', title: 'Installation', desc: 'Installer le paquet, charger le CSS, enregistrer les composants.' }
]
</script>

<template>
  <AtPage
    title="Atelier"
    description="Design system personnel : papier chaud, encre presque noire, un seul indigo pour agir."
    wide
  >
    <p class="doc-lead">
      Atelier sert deux registres avec les mêmes tokens : <strong>le site</strong> (lecture, respiration,
      <code class="t-code">t-prose</code>) et <strong>l’app</strong> (dashboards, bases de données, densité).
      Il fournit des tokens en CSS et en JSON, une couche de classes <code class="t-code">at-*</code> utilisable sans
      framework, et des composants Vue 3 typés qui posent ces classes sans les réécrire.
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: var(--space-4)">
      <AtStat v-for="c in chiffres" :key="c.label" :label="c.label" :value="c.value" :foot="c.foot" />
    </div>

    <section class="doc-sec">
      <h2 class="t-heading-2">Par où commencer</h2>
      <div class="doc-grid doc-grid--wide">
        <AtCard v-for="p in portes" :key="p.to" :href="href(p.to)" :title="p.title" :description="p.desc">
          <template #actions><AtIcon :name="p.icon" /></template>
        </AtCard>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Deux apps dans ce playground</h2>
      <div class="doc-prose">
        <p>
          Le sélecteur en haut à gauche passe d’une app à l’autre. <strong>Atelier</strong>, celle que vous lisez,
          est la documentation du système : elle est elle-même construite avec lui — chaque page, chaque tableau
          d’API, chaque exemple est posé avec les composants qu’il décrit. <strong>Pilote</strong> est une app
          d’exemple complète : projets, milestones, tâches, vues enregistrées, panneau de détail. C’est le même
          système vu de l’autre côté : non plus expliqué, mais utilisé.
        </p>
        <p>
          Les exemples de cette documentation ne sont pas des captures : leur template est compilé à l’exécution,
          donc ce qui s’affiche et ce que le bouton <strong>Code</strong> montre sont le même texte. Ils ne peuvent
          pas se désynchroniser du rendu.
        </p>
        <p>
          Le thème et la densité se changent en haut à droite, sur toutes les pages. Les deux réglages sont
          mémorisés dans le navigateur et posés sur <code class="t-code">&lt;html&gt;</code> : tout ce que vous voyez
          ici, exemples compris, suit le réglage choisi.
        </p>
      </div>
      <div style="display: flex; gap: var(--space-2); flex-wrap: wrap">
        <AtButton variant="primary" icon="board" :href="href('doc/composants')">Voir les composants</AtButton>
        <AtButton icon="arrow" :href="href('demo')">Ouvrir l’app d’exemple</AtButton>
      </div>
    </section>
  </AtPage>
</template>
