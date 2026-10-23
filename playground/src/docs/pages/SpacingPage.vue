<script setup lang="ts">
import { tokens } from '@tymotheusz/atelier'

const echelle = tokens.spacing.tokens
</script>

<template>
  <AtPage title="Espacement" description="Une grille de 4 px, onze paliers, un usage par palier.">
    <p class="doc-lead">
      Tout l’espacement du système sort de cette échelle. Une valeur hors échelle se voit : elle casse le rythme
      vertical des pages. Les barres ci-dessous sont à l’échelle réelle.
    </p>

    <section class="doc-sec">
      <h2 class="t-heading-2">L’échelle</h2>
      <div class="doc-scale">
        <div v-for="t in echelle" :key="t.name" class="doc-scale__row">
          <code class="doc-token__name">--{{ t.name }}</code>
          <span class="doc-token__val">{{ t.value }}</span>
          <span style="display: flex; align-items: center; gap: var(--space-3); min-width: 0">
            <span class="doc-scale__bar" :style="{ width: t.value }" />
            <span class="doc-scale__use at-ellipsis">{{ t.usage }}</span>
          </span>
        </div>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Où ça sert</h2>
      <ul class="doc-list">
        <li>Gap entre contrôles d’un même groupe : <code class="t-code">space-2</code>.</li>
        <li>Padding d’une carte : <code class="t-code">space-5</code>. Gap d’une grille de dashboard : <code class="t-code">space-4</code>.</li>
        <li>Gouttière de page : <code class="t-code">space-6</code> sur mobile, <code class="t-code">space-8</code> sur desktop. <code class="t-code">AtPage</code> s’en occupe.</li>
        <li>Sections d’une page d’app : <code class="t-code">space-6</code>. Sections d’un site : <code class="t-code">space-12</code> à <code class="t-code">space-24</code>.</li>
        <li>L’espacement ne change pas avec la densité : seules les hauteurs de contrôle et de ligne bougent.</li>
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">En situation</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-4)">
        <AtCard title="Gap space-2" description="Entre contrôles d’un groupe">
          <div style="display: flex; gap: var(--space-2)">
            <AtButton size="sm">Filtrer</AtButton><AtButton size="sm">Trier</AtButton><AtButton size="sm">Grouper</AtButton>
          </div>
        </AtCard>
        <AtCard title="Gap space-4" description="Entre cartes d’un dashboard">
          <div style="display: flex; gap: var(--space-4)">
            <span class="doc-scale__bar" style="width: 60px" /><span class="doc-scale__bar" style="width: 60px" />
          </div>
        </AtCard>
        <AtCard title="Padding space-5" description="À l’intérieur d’une carte">
          <p style="margin: 0" class="at-muted">C’est le padding de cette carte même.</p>
        </AtCard>
      </div>
    </section>
  </AtPage>
</template>
