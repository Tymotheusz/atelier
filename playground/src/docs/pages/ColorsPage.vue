<script setup lang="ts">
import { computed } from 'vue'
import { chartColors, tokens } from '@tymotheusz/atelier'
import { inline } from '../inline'

type ColorToken = (typeof tokens)['color']['tokens'][number]

const all = tokens.color.tokens as readonly ColorToken[]
const pick = (test: (name: string) => boolean) => all.filter(t => test(t.name))

const groupes = computed(() => [
  {
    titre: 'Sols',
    intro: 'Quatre niveaux, du fond de page à ce qui flotte, plus deux états neutres. Une surface ne se distingue jamais par une ombre au repos.',
    items: pick(n => n === 'bg' || n.startsWith('surface'))
  },
  {
    titre: 'Contours',
    intro: '`border` est décoratif, `border-strong` marque le survol, `border-control` entoure tout ce qui se saisit et tient 3:1.',
    items: pick(n => n.startsWith('border'))
  },
  {
    titre: 'Texte',
    intro: 'Quatre niveaux de lisibilité : `ink` à 13,9:1, `ink-muted` à 6:1, `ink-subtle` à 4,5:1 au moins, `ink-disabled` hors contraste — donc jamais porteur d’information.',
    items: pick(n => n.startsWith('ink'))
  },
  {
    titre: 'Action',
    intro: 'Un seul accent dans tout le système. Il ne marque que ce qui est cliquable ou sélectionné : pas d’indigo décoratif, pas de dégradé.',
    items: pick(n => n.startsWith('accent') || n === 'on-accent' || n === 'focus' || n === 'overlay')
  },
  {
    titre: 'États',
    intro: 'Chaque ton a sa version `-soft` pour les fonds. La couleur ne porte jamais seule l’information : un mot ou une icône l’accompagne toujours.',
    items: pick(n => /^(success|warning|danger|info|on-danger)/.test(n))
  },
  {
    titre: 'Graphiques',
    intro: '`chart-1` à `chart-5`, dans cet ordre, pour les séries et les bandes de couleur. Chaque série a en plus une paire `-soft` / `-ink` : l’aplat pâle d’une tuile d’icône et la couleur de l’icône posée dessus (≥ 4,5:1). Un `-soft` ne sert jamais de couleur de série. Au-delà de cinq séries, regrouper plutôt qu’ajouter une sixième couleur.',
    items: pick(n => n.startsWith('chart'))
  }
])

/** Les neuf paires d'étiquettes, reconstituées depuis les tokens `tag-*`. */
const tags = computed(() => {
  const noms = [...new Set(all.map(t => t.name).filter(n => n.startsWith('tag-')).map(n => n.split('-')[1]))]
  return noms.map(couleur => ({
    couleur,
    bg: all.find(t => t.name === `tag-${couleur}-bg`)!,
    fg: all.find(t => t.name === `tag-${couleur}-fg`)!
  }))
})
</script>

<template>
  <AtPage title="Couleurs" :description="`${all.length} tokens, deux thèmes. Chaque pastille montre la valeur claire puis la valeur sombre.`">
    <p class="doc-lead">
      La couleur est réservée à l’action (<code class="t-code">accent</code>), à l’état
      (<code class="t-code">success</code>, <code class="t-code">warning</code>, <code class="t-code">danger</code>,
      <code class="t-code">info</code>) et aux données (<code class="t-code">tag-*</code>,
      <code class="t-code">chart-*</code>). Tout le reste est du papier et de l’encre. Rien ne s’écrit en dur :
      la valeur se lit <code class="t-code">var(--accent)</code>, jamais <code class="t-code">#4a47d8</code>.
    </p>

    <section v-for="g in groupes" :key="g.titre" class="doc-sec">
      <h2 class="t-heading-2">{{ g.titre }}</h2>
      <p class="at-muted" style="margin: 0; max-width: var(--measure-prose); font-size: 14px" v-html="inline(g.intro)" />
      <div class="doc-grid doc-grid--wide">
        <div v-for="t in g.items" :key="t.name" class="doc-token">
          <span class="doc-chips">
            <span class="doc-chip" :style="{ background: t.value.light }" />
            <span class="doc-chip doc-chip--dark" :style="{ background: t.value.dark }" />
          </span>
          <span class="doc-token__body">
            <code class="doc-token__name">--{{ t.name }}</code>
            <span class="doc-token__val">{{ t.value.light }} · {{ t.value.dark }}</span>
            <span class="doc-token__use">{{ t.usage }}</span>
          </span>
        </div>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Étiquettes</h2>
      <p class="at-muted" style="margin: 0; max-width: var(--measure-prose); font-size: 14px">
        Neuf paires fond / texte, sans signification système : la couleur est attribuée à une option une fois pour
        toutes, comme dans une base de données. Elle n’indique ni gravité ni état.
      </p>
      <div class="doc-grid">
        <div v-for="t in tags" :key="t.couleur" class="doc-token">
          <span class="doc-chips">
            <span class="doc-chip" :style="{ background: t.bg.value.light, color: t.fg.value.light, display: 'grid', placeItems: 'center', fontSize: '12px', fontWeight: 600 }">Aa</span>
            <span class="doc-chip" :style="{ background: t.bg.value.dark, color: t.fg.value.dark, display: 'grid', placeItems: 'center', fontSize: '12px', fontWeight: 600 }">Aa</span>
          </span>
          <span class="doc-token__body">
            <code class="doc-token__name">--tag-{{ t.couleur }}-bg</code>
            <code class="doc-token__name">--tag-{{ t.couleur }}-fg</code>
            <span class="doc-token__use">{{ t.bg.usage }}</span>
          </span>
        </div>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Couleur d’entité</h2>
      <p class="at-muted" style="margin: 0; max-width: var(--measure-prose); font-size: 14px">
        Une couleur de série peut identifier une entité — un projet, un dossier. Elle la suit alors partout :
        tuile d’icône en version pâle, bande de couleur des tuiles de stat et des cartes en version pleine,
        sparkline, marque de relation. Une entité ne change pas de couleur d’un écran à l’autre.
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-4)">
        <div style="display: flex; flex-direction: column; gap: var(--space-3)">
          <div style="display: flex; align-items: center; gap: var(--space-3)">
            <AtIconTile name="bolt" color="chart-1" size="md" />
            <span class="t-body-strong">Application mobile</span>
          </div>
          <AtCard color="chart-1" title="Version bêta" description="Connexion, recherche, notifications." />
        </div>
        <div style="display: flex; flex-direction: column; gap: var(--space-3)">
          <div style="display: flex; align-items: center; gap: var(--space-3)">
            <AtIconTile name="globe" color="chart-2" size="md" />
            <span class="t-body-strong">Refonte du site</span>
          </div>
          <AtStat label="Pages publiées" value="24" delta="+6" trend="up" color="chart-2"
            :spark="[8, 10, 11, 13, 14, 16, 17, 19, 20, 21, 23, 24]" foot="Depuis le lancement" />
        </div>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">En JavaScript</h2>
      <p class="at-muted" style="margin: 0; max-width: var(--measure-prose); font-size: 14px">
        <code class="t-code">tokens</code> expose la source complète, <code class="t-code">cssVar('accent')</code>
        rend <code class="t-code">var(--accent)</code>, et <code class="t-code">chartColors</code> donne les cinq
        couleurs de série dans l’ordre — pratique pour une bibliothèque de graphiques.
      </p>
      <div style="display: flex; gap: var(--space-2); flex-wrap: wrap">
        <span v-for="(c, i) in chartColors" :key="c" class="doc-token" style="align-items: center; gap: var(--space-2)">
          <span class="doc-chip" :style="{ background: c, borderColor: 'transparent' }" />
          <code class="doc-token__name">chartColors[{{ i }}]</code>
        </span>
      </div>
    </section>
  </AtPage>
</template>
