<script setup lang="ts">
import { useDensity, useTheme } from '@tymotheusz/atelier'
import DocCode from '../DocCode.vue'
import DocExample from '../DocExample.vue'

const { mode, resolved } = useTheme()
const { density } = useDensity()

const APERCU = `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-4)">
    <div data-theme="light" class="doc-themebox">
      <span class="doc-themebox__label"><AtIcon name="sun" /> <span class="t-caption">Clair, imposé</span></span>
      <AtCard title="Sauvegardes" description="Hier à 03:00">
        <div style="display: flex; gap: 8px; align-items: center">
          <AtBadge tone="success">OK</AtBadge><AtTag color="blue">Infra</AtTag>
        </div>
        <template #footer><AtButton size="sm" variant="primary">Lancer</AtButton></template>
      </AtCard>
    </div>
    <div data-theme="dark" class="doc-themebox">
      <span class="doc-themebox__label"><AtIcon name="moon" /> <span class="t-caption">Sombre, imposé</span></span>
      <AtCard title="Sauvegardes" description="Hier à 03:00">
        <div style="display: flex; gap: 8px; align-items: center">
          <AtBadge tone="success">OK</AtBadge><AtTag color="blue">Infra</AtTag>
        </div>
        <template #footer><AtButton size="sm" variant="primary">Lancer</AtButton></template>
      </AtCard>
    </div>
  </div>
`

const CONTROLE = `
  <AtSegment v-model="mode" label="Thème" :items="[
    { value: 'system', label: 'Système', icon: 'monitor' },
    { value: 'light', label: 'Clair', icon: 'sun' },
    { value: 'dark', label: 'Sombre', icon: 'moon' }
  ]" />
  <AtSegment v-model="density" label="Densité" :items="[
    { value: 'comfortable', label: 'Confortable' },
    { value: 'compact', label: 'Compact' }
  ]" />
  <p class="at-muted">mode : {{ mode }} · thème affiché : {{ resolved }} · densité : {{ density }}</p>
`
</script>

<template>
  <AtPage title="Thème et densité" description="Deux réglages, deux attributs, posés sur la page ou sur un conteneur.">
    <p class="doc-lead">
      <code class="t-code">useTheme</code> et <code class="t-code">useDensity</code> posent
      <code class="t-code">data-theme</code> et <code class="t-code">data-density</code> sur
      <code class="t-code">&lt;html&gt;</code> et mémorisent le choix dans le navigateur. Les composants ne lisent
      jamais un thème : ils lisent des variables, qui changent de valeur selon l’attribut.
    </p>

    <section class="doc-sec">
      <h2 class="t-heading-2">Les deux composables</h2>
      <DocCode label="TypeScript" :code="`import { useTheme, useDensity } from '@tymotheusz/atelier'

const { mode, resolved, toggle } = useTheme() // 'system' | 'light' | 'dark', mémorisé
const { density } = useDensity()               // 'comfortable' | 'compact'`" />
      <ul class="doc-list">
        <li><code class="t-code">mode</code> est le choix de la personne ; <code class="t-code">resolved</code> est le thème réellement affiché, donc <code class="t-code">'light'</code> ou <code class="t-code">'dark'</code>, jamais <code class="t-code">'system'</code>.</li>
        <li>En mode <code class="t-code">system</code>, l’attribut est retiré : c’est <code class="t-code">prefers-color-scheme</code> qui décide, et le changement est suivi en direct.</li>
        <li>Les deux valeurs sont des refs partagées par toute l’app : un contrôle posé n’importe où suffit.</li>
        <li><code class="t-code">toggle()</code> bascule entre clair et sombre depuis le thème affiché — utile pour un bouton unique.</li>
      </ul>
      <DocExample title="Contrôles branchés sur le vrai réglage" desc="Ce sont les mêmes refs que les contrôles de la barre supérieure." frame="col" :code="CONTROLE" :setup="() => ({ mode, resolved, density })" />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Imposer un thème à une zone</h2>
      <p class="at-muted" style="margin: 0; max-width: var(--measure-prose)">
        Les attributs peuvent être posés sur n’importe quel conteneur : une zone garde alors son thème,
        quel que soit celui de la page. C’est ce qui permet d’afficher les deux thèmes côte à côte.
      </p>
      <DocExample frame="plain" :code="APERCU" />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Ce que le thème sombre n’est pas</h2>
      <ul class="doc-list">
        <li>Pas une inversion : les sols sont brun-noir, pas gris, et gardent la chaleur du papier.</li>
        <li>L’accent est éclairci pour tenir le contraste sur fond sombre ; <code class="t-code">on-accent</code> devient foncé.</li>
        <li>Les contrastes sont vérifiés dans les deux thèmes : texte ≥ 4,5:1, contours de contrôles et focus ≥ 3:1.</li>
        <li>Une couleur écrite en dur casse l’un des deux thèmes : toujours passer par une variable.</li>
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Densité</h2>
      <ul class="doc-list">
        <li><code class="t-code">data-density="compact"</code> bascule <code class="t-code">--h-sm</code>, <code class="t-code">--h-md</code>, <code class="t-code">--h-lg</code>, <code class="t-code">--h-row</code> et <code class="t-code">--pad-cell</code>.</li>
        <li>Les composants lisent ces variables, jamais les tokens <code class="t-code">control-*</code> directement.</li>
        <li>Confortable par défaut ; compacte pour les vues de données, où l’on compare des lignes.</li>
        <li>Même rythme, hauteurs différentes : l’espacement ne change pas, seules les hauteurs de contrôle et de ligne bougent.</li>
      </ul>
      <p class="at-muted" style="margin: 0; font-size: 13px">
        Les valeurs exactes sont sur la page <code class="t-code">Densité et gabarits</code>.
      </p>
    </section>
  </AtPage>
</template>
