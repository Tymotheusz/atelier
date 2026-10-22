<script setup lang="ts">
import { tokens } from '@tymotheusz/atelier'
import DocCode from '../DocCode.vue'

/** Les styles du JSON n'ont pas tous `letterSpacing` ni `family` : on les normalise une fois. */
const groupes = tokens.type.groups.map(g => ({
  name: g.name,
  styles: g.styles.map(s => ({
    name: s.name as string,
    fontSize: s.fontSize as string,
    lineHeight: s.lineHeight as string,
    fontWeight: s.fontWeight as number,
    usage: s.usage as string,
    sample: s.sample as string,
    letterSpacing: 'letterSpacing' in s ? (s.letterSpacing as string) : undefined,
    family: 'family' in s ? (s.family as string) : undefined
  }))
}))
const familles = tokens.type.families
const polices = tokens.type.fonts
</script>

<template>
  <AtPage title="Typographie" description="Inter pour tout, JetBrains Mono pour le code. Douze styles, posés par une classe." wide>
    <p class="doc-lead">
      Les douze classes <code class="t-code">t-*</code> couvrent le site et l’app. Elles se posent directement sur
      l’élément : pas de taille écrite en dur, pas de graisse choisie au cas par cas. Les graisses intermédiaires
      (550, 650) sont voulues — Inter variable les rend nettes.
    </p>

    <section class="doc-sec">
      <h2 class="t-heading-2">Polices</h2>
      <div class="doc-grid doc-grid--wide">
        <div v-for="p in polices" :key="p.family" class="doc-token">
          <span class="doc-token__body">
            <span style="font-size: 17px; font-weight: 600" :style="{ fontFamily: p.family === 'Inter' ? familles.sans : familles.mono }">{{ p.family }}</span>
            <code class="doc-token__val">{{ p.file }} · graisses {{ p.weight }}</code>
            <span class="doc-token__use" :style="{ fontFamily: p.family === 'Inter' ? familles.sans : familles.mono }">
              Les 128 tâches de l’équipe — 12 480 € — 46,2 %
            </span>
          </span>
        </div>
      </div>
      <p class="at-muted" style="margin: 0; font-size: 13px">
        Fichiers variables servis depuis le paquet. En CSS :
        <code class="t-code">var(--font-sans)</code> et <code class="t-code">var(--font-mono)</code>.
      </p>
    </section>

    <section v-for="g in groupes" :key="g.name" class="doc-sec">
      <h2 class="t-heading-2">{{ g.name }}</h2>
      <div class="doc-scale">
        <div v-for="s in g.styles" :key="s.name" class="doc-type-row">
          <div class="doc-type-row__meta">
            <code class="doc-token__name">.{{ s.name }}</code>
            <span class="doc-token__val">
              {{ s.fontSize }} / {{ s.lineHeight }} · {{ s.fontWeight }}<template v-if="s.letterSpacing"> · {{ s.letterSpacing }}</template><template v-if="s.family"> · {{ s.family }}</template>
            </span>
          </div>
          <div :class="['doc-type-row__sample', s.name]">{{ s.sample ?? 'Le vif zéphyr jubile sur les quais' }}</div>
          <span class="doc-token__use">{{ s.usage }}</span>
        </div>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Largeurs de lecture</h2>
      <ul class="doc-list">
        <li><code class="t-code">measure-prose</code> (720 px) : largeur maximale d’un texte long. Au-delà, l’œil perd la ligne.</li>
        <li><code class="t-code">measure-page</code> (1120 px) : largeur d’une page d’app. <code class="t-code">AtPage</code> la pose déjà.</li>
        <li>Un titre peut dépasser la colonne de texte ; un paragraphe, jamais.</li>
      </ul>
      <div style="max-width: var(--measure-prose); background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: var(--space-5)">
        <p class="t-prose" style="margin: 0">
          Un texte qui respire, posé sur une colonne de 720 px au plus. C’est le réglage de lecture du système :
          <code class="t-code">t-prose</code> sur <code class="t-code">measure-prose</code>. En app, le texte courant
          descend à <code class="t-code">t-body</code>, parce qu’on y lit des valeurs plutôt que des phrases.
        </p>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Chiffres</h2>
      <ul class="doc-list">
        <li>Nombres à la française : espace pour les milliers, virgule décimale, unité après une espace.</li>
        <li>En colonne, les chiffres s’alignent : <code class="t-code">font-variant-numeric: tabular-nums</code>, posé par la classe <code class="t-code">at-num</code> et par <code class="t-code">t-stat</code>.</li>
      </ul>
      <DocCode label="CSS" :code="`/* une colonne de montants */
.at-num { text-align: right; font-variant-numeric: tabular-nums; }`" />
    </section>
  </AtPage>
</template>
