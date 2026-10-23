<script setup lang="ts">
import { computed, ref } from 'vue'
import { tokens } from '@tymotheusz/atelier'
import DocCode from '../DocCode.vue'
import DocExample from '../DocExample.vue'

const tailles = tokens.size.tokens
const pick = (test: (n: string) => boolean) => tailles.filter(t => test(t.name))

const controles = computed(() => pick(n => n.startsWith('control')))
const lignes = computed(() => pick(n => n.startsWith('row')))
const gabarits = computed(() => pick(n => n === 'sidebar' || n === 'topbar' || n.startsWith('measure')))

const COMPARAISON = `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--space-4)">
    <div v-for="d in ['comfortable', 'compact']" :key="d" :data-density="d" class="doc-themebox">
      <span class="doc-themebox__label"><AtIcon name="sliders" /> <span class="t-caption">{{ d }}</span></span>
      <div style="display: flex; gap: var(--space-2); flex-wrap: wrap">
        <AtButton variant="primary">Enregistrer</AtButton>
        <AtButton size="sm" icon="filter">Filtrer</AtButton>
      </div>
      <AtInput model-value="Refonte du site" />
      <AtTable :columns="colonnes" :rows="lignes" row-key="tache" />
    </div>
  </div>
`
</script>

<template>
  <AtPage title="Densité et gabarits" description="Deux densités, un seul rythme. Les composants lisent les variables, pas les tokens.">
    <p class="doc-lead">
      Confortable par défaut ; compacte pour les vues de données, où l’on compare des lignes. Seules les hauteurs
      changent : l’espacement, la typographie et les rayons sont les mêmes. C’est ce qui fait qu’une app compacte
      reste la même app.
    </p>

    <section class="doc-sec">
      <h2 class="t-heading-2">Comment ça marche</h2>
      <DocCode label="CSS" :code="`:root, [data-density='comfortable'] {
  --h-sm: var(--control-sm);   /* 28px */
  --h-md: var(--control-md);   /* 32px */
  --h-lg: var(--control-lg);   /* 40px */
  --h-row: var(--row);         /* 36px */
  --pad-cell: var(--space-3);
}
[data-density='compact'] {
  --h-sm: var(--control-sm-compact);  /* 24px */
  --h-md: var(--control-md-compact);  /* 28px */
  --h-lg: var(--control-lg-compact);  /* 32px */
  --h-row: var(--row-compact);        /* 30px */
  --pad-cell: var(--space-2);
}`" />
      <ul class="doc-list">
        <li>Un composant écrit <code class="t-code">height: var(--h-md)</code>, jamais <code class="t-code">height: var(--control-md)</code>.</li>
        <li>L’attribut se pose sur <code class="t-code">&lt;html&gt;</code> par <code class="t-code">useDensity</code>, ou sur n’importe quel conteneur pour une zone.</li>
        <li>Une vue de données peut donc être compacte dans une page confortable.</li>
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Les deux densités côte à côte</h2>
      <DocExample
        frame="plain" :code="COMPARAISON"
        :setup="() => ({
          colonnes: [{ key: 'tache', label: 'Tâche' }, { key: 'h', label: 'Estim.', align: 'right', format: (v: number) => v + ' h' }],
          lignes: [{ tache: 'Composant DataView', h: 10 }, { tache: 'Export PDF', h: 8 }, { tache: 'Page tarifs', h: 3 }]
        })"
      />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Hauteurs de contrôle</h2>
      <div class="doc-scale">
        <div v-for="t in controles" :key="t.name" class="doc-scale__row">
          <code class="doc-token__name">--{{ t.name }}</code>
          <span class="doc-token__val">{{ t.value }}</span>
          <span style="display: flex; align-items: center; gap: var(--space-3); min-width: 0">
            <span class="doc-scale__bar" :style="{ width: '48px', height: t.value }" />
            <span class="doc-scale__use at-ellipsis">{{ t.usage }}</span>
          </span>
        </div>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Lignes de tableau</h2>
      <div class="doc-scale">
        <div v-for="t in lignes" :key="t.name" class="doc-scale__row">
          <code class="doc-token__name">--{{ t.name }}</code>
          <span class="doc-token__val">{{ t.value }}</span>
          <span class="doc-scale__use">{{ t.usage }}</span>
        </div>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Gabarits</h2>
      <div class="doc-grid doc-grid--wide">
        <div v-for="t in gabarits" :key="t.name" class="doc-token">
          <span class="doc-token__body">
            <code class="doc-token__name">--{{ t.name }}</code>
            <span class="doc-token__val">{{ t.value }}</span>
            <span class="doc-token__use">{{ t.usage }}</span>
          </span>
        </div>
      </div>
    </section>
  </AtPage>
</template>
