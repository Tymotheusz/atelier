<script setup lang="ts">
import DocCode from '../DocCode.vue'

const fichiers = [
  { fichier: '@tymotheusz/atelier/style.css', contenu: 'Polices + tokens + composants. C’est l’import unique à utiliser par défaut.' },
  { fichier: '@tymotheusz/atelier/tokens.css', contenu: 'Polices, variables CSS et classes typographiques t-* seules.' },
  { fichier: '@tymotheusz/atelier/components.css', contenu: 'Classes at-* seules, à charger après les tokens.' },
  { fichier: '@tymotheusz/atelier/tokens.json', contenu: 'Source des tokens, pour l’outillage et les graphiques.' }
]
</script>

<template>
  <AtPage title="Installation" description="Le paquet est distribué directement depuis GitHub : dist/ est versionné, rien n’est compilé à l’installation.">
    <section class="doc-sec">
      <h2 class="t-heading-2">Installer</h2>
      <DocCode label="Terminal" :code="`npm install github:Tymotheusz/atelier#v0.1.0\n# ou la branche principale\nnpm install github:Tymotheusz/atelier`" />
      <div class="doc-prose">
        <p>
          Vue <code class="t-code">^3.4</code> est une dépendance pair. Si le dépôt est privé, la machine qui installe
          doit avoir un accès Git au dépôt (clé SSH ou <code class="t-code">gh auth login</code>). Pour mettre à jour
          une app : changer le tag dans <code class="t-code">package.json</code>, puis <code class="t-code">npm install</code>.
        </p>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Avec Vue</h2>
      <p class="at-muted" style="margin: 0">Le plugin enregistre tous les composants <code class="t-code">At*</code> globalement.</p>
      <DocCode label="main.ts" :code="`import { createApp } from 'vue'
import Atelier from '@tymotheusz/atelier'
import '@tymotheusz/atelier/style.css' // polices + tokens + composants
import App from './App.vue'

createApp(App).use(Atelier).mount('#app')`" />
      <p class="at-muted" style="margin: 0">Ou à la carte, sans plugin :</p>
      <DocCode label="Composant.vue" :code="`// dans le bloc script setup du composant
import { AtButton, AtDataView } from '@tymotheusz/atelier'`" />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Sans Vue, en CSS seul</h2>
      <p class="at-muted" style="margin: 0">Les classes <code class="t-code">at-*</code> suffisent : elles n’ont besoin d’aucun framework.</p>
      <DocCode label="HTML" :code="`<link rel='stylesheet' href='node_modules/@tymotheusz/atelier/dist/atelier.css'>
<button class='at-btn at-btn--primary'>Publier</button>
<span class='at-badge at-badge--success'>En ligne</span>`" />
      <p class="at-muted" style="margin: 0">
        Si le dépôt est public, la même feuille est servie par jsDelivr :
        <code class="t-code">https://cdn.jsdelivr.net/gh/Tymotheusz/atelier@v0.1.0/dist/atelier.css</code>.
      </p>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Fichiers exportés</h2>
      <AtTable
        :columns="[{ key: 'fichier', label: 'Import', width: '38%' }, { key: 'contenu', label: 'Contenu' }]"
        :rows="fichiers" row-key="fichier"
      >
        <template #cell-fichier="{ value }"><code class="t-code">{{ value }}</code></template>
      </AtTable>
      <p class="at-muted" style="margin: 0; font-size: 13px">
        En JavaScript : <code class="t-code">import { tokens, cssVar, chartColors } from '@tymotheusz/atelier'</code>.
      </p>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Développer le système</h2>
      <DocCode label="Terminal" :code="`npm install
npm run dev          # ce playground : documentation + app d'exemple
npm test             # tests unitaires (logique de vue, composants)
npm run typecheck
npm run build        # tokens → dist/ (JS, types, CSS, polices)`" />
      <ul class="doc-list">
        <li>Les tokens se modifient dans <code class="t-code">tokens/tokens.json</code> ; <code class="t-code">npm run build:tokens</code> régénère <code class="t-code">src/styles/tokens.css</code> et <code class="t-code">src/tokens.ts</code>.</li>
        <li>Un composant ajouté s’exporte dans <code class="t-code">src/index.ts</code>, s’ajoute au registre de cette documentation (<code class="t-code">playground/src/docs/entries/</code>) et au tableau du README.</li>
        <li>Avant de commiter : <code class="t-code">npm run typecheck &amp;&amp; npm test &amp;&amp; npm run build</code>, puis commiter <code class="t-code">dist/</code>.</li>
      </ul>
    </section>
  </AtPage>
</template>
