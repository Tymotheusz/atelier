<script setup lang="ts">
import { ref } from 'vue'
import { tokens } from '@tymotheusz/atelier'
import DocCode from '../DocCode.vue'
import DocExample from '../DocExample.vue'

const durees = tokens.duration.tokens
const courbes = tokens.easing.tokens

const DEMO = `
  <div style="display: flex; flex-direction: column; gap: var(--space-4); width: 100%">
    <div v-for="d in durees" :key="d.name" style="display: flex; align-items: center; gap: var(--space-3)">
      <code class="doc-token__name" style="width: 150px">--{{ d.name }}</code>
      <span style="flex: 1; max-width: 280px; height: 28px; background: var(--surface-sunken);
        border: 1px solid var(--border); border-radius: var(--radius-sm); position: relative">
        <span class="doc-mover" :style="{
          position: 'absolute', top: '-1px',
          left: parti ? 'calc(100% - 28px)' : '0',
          transition: 'left var(--' + d.name + ') var(--ease-out)'
        }" />
      </span>
      <span class="doc-token__val">{{ d.value }}</span>
    </div>
    <AtButton size="sm" @click="parti = !parti">{{ parti ? 'Revenir' : 'Lancer' }}</AtButton>
  </div>
`
</script>

<template>
  <AtPage title="Mouvement" description="Trois durées, une seule courbe, et le respect de prefers-reduced-motion.">
    <p class="doc-lead">
      Le mouvement sert à rendre un changement compréhensible, jamais à décorer. Une seule courbe,
      <code class="t-code">ease-out</code> : les choses entrent vite et s’arrêtent doucement.
    </p>

    <section class="doc-sec">
      <h2 class="t-heading-2">Durées</h2>
      <div class="doc-scale">
        <div v-for="t in durees" :key="t.name" class="doc-scale__row">
          <code class="doc-token__name">--{{ t.name }}</code>
          <span class="doc-token__val">{{ t.value }}</span>
          <span class="doc-scale__use">{{ t.usage }}</span>
        </div>
      </div>
      <DocExample title="Les trois durées, à l’œil" frame="plain" :code="DEMO" :setup="() => ({ parti: ref(false), durees })" />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Courbe</h2>
      <div class="doc-scale">
        <div v-for="t in courbes" :key="t.name" class="doc-scale__row">
          <code class="doc-token__name">--{{ t.name }}</code>
          <span class="doc-token__val">{{ t.value }}</span>
          <span class="doc-scale__use">{{ t.usage }}</span>
        </div>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Règles</h2>
      <ul class="doc-list">
        <li><code class="t-code">duration-fast</code> pour les couleurs (survol, focus) : au-delà, le survol semble coller.</li>
        <li><code class="t-code">duration-base</code> pour les menus, popovers et interrupteurs.</li>
        <li><code class="t-code">duration-slow</code> pour les modales et les panneaux, qui se déplacent sur une plus grande distance.</li>
        <li>On anime l’opacité et la position, pas la hauteur ni la largeur d’un conteneur de contenu.</li>
        <li>Rien ne bouge en boucle. Aucun élément de l’interface n’attire l’œil sans raison.</li>
      </ul>
      <DocCode label="components.css" :code="`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { transition-duration: 0ms !important; }
}`" />
      <p class="at-muted" style="margin: 0; font-size: 13px; max-width: var(--measure-prose)">
        Cette règle est dans la feuille du système : une app n’a rien à ajouter pour les transitions.
        Une animation en <code class="t-code">@keyframes</code> ajoutée par une app, elle, reste à sa charge.
      </p>
    </section>
  </AtPage>
</template>
