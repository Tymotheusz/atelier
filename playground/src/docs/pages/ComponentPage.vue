<script setup lang="ts">
import { computed } from 'vue'
import DocApi from '../DocApi.vue'
import DocCode from '../DocCode.vue'
import DocExample from '../DocExample.vue'
import { href } from '../../router'
import { bySlug } from '../registry'
import { inline } from '../inline'
import type { ComponentDoc } from '../types'

/** Page générique d'un composant : exemples vivants, règles d'usage, API complète. */
const props = defineProps<{ entry: ComponentDoc }>()

const imports = computed(() => props.entry.imports ?? `import { ${props.entry.name} } from '@tymotheusz/atelier'
// ou, avec le plugin : app.use(Atelier) enregistre <${props.entry.name}> globalement`)
const related = computed(() => (props.entry.related ?? []).map(slug => bySlug[slug]).filter(Boolean))
</script>

<template>
  <AtPage>
    <template #head>
      <div style="display: flex; align-items: center; gap: var(--space-3); flex-wrap: wrap">
        <h1 class="t-heading-1" style="margin: 0">{{ entry.name }}</h1>
        <AtTag color="blue">{{ entry.family }}</AtTag>
      </div>
      <p class="doc-lead" style="margin-top: var(--space-2)">{{ entry.tagline }}</p>
    </template>

    <div v-if="entry.about" class="doc-prose">
      <p v-for="(p, i) in entry.about" :key="i" v-html="inline(p)" />
    </div>

    <section v-if="entry.examples.length" class="doc-sec">
      <h2 class="t-heading-2">Exemples</h2>
      <DocExample
        v-for="(ex, i) in entry.examples" :key="i"
        :title="ex.title" :desc="ex.desc" :code="ex.code" :setup="ex.setup" :frame="ex.frame" :open="ex.open"
      />
    </section>

    <section v-if="entry.rules" class="doc-sec">
      <h2 class="t-heading-2">Quand l’utiliser</h2>
      <ul class="doc-list">
        <li v-for="(r, i) in entry.rules" :key="i" v-html="inline(r)" />
      </ul>
    </section>

    <section v-if="entry.avoid" class="doc-sec">
      <h2 class="t-heading-2">À éviter</h2>
      <ul class="doc-list doc-list--avoid">
        <li v-for="(a, i) in entry.avoid" :key="i" v-html="inline(a)" />
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">API</h2>
      <template v-if="entry.models">
        <h3 class="t-heading-3">Modèles</h3>
        <DocApi :rows="entry.models" kind="model" />
      </template>
      <template v-if="entry.props">
        <h3 class="t-heading-3">Props</h3>
        <DocApi :rows="entry.props" kind="prop" />
      </template>
      <template v-if="entry.events">
        <h3 class="t-heading-3">Événements</h3>
        <DocApi :rows="entry.events" kind="event" />
      </template>
      <template v-if="entry.slots">
        <h3 class="t-heading-3">Slots</h3>
        <DocApi :rows="entry.slots" kind="slot" />
      </template>
      <template v-if="entry.params">
        <h3 class="t-heading-3">Paramètres</h3>
        <DocApi :rows="entry.params" kind="param" />
      </template>
      <template v-if="entry.exposes">
        <h3 class="t-heading-3">{{ entry.params ? 'Valeur renvoyée' : 'Méthodes exposées' }}</h3>
        <DocApi :rows="entry.exposes" kind="expose" />
      </template>
      <p v-if="!entry.models && !entry.props && !entry.events && !entry.slots && !entry.params && !entry.exposes" class="at-muted">
        Ce composant ne prend ni prop ni événement : il n’est qu’une surface.
      </p>
      <h3 class="t-heading-3">Import</h3>
      <DocCode :code="imports" label="TypeScript" />
    </section>

    <section v-if="entry.classes" class="doc-sec">
      <h2 class="t-heading-2">Classes CSS</h2>
      <p class="at-muted" style="margin: 0; font-size: 13px; max-width: var(--measure-prose)">
        Les classes posées par le composant. Elles suffisent à reproduire le rendu sans Vue, en chargeant
        <code class="t-code">@tymotheusz/atelier/components.css</code>.
      </p>
      <div class="doc-related">
        <AtTag v-for="c in entry.classes" :key="c"><code class="t-code">{{ c }}</code></AtTag>
      </div>
    </section>

    <section v-if="related.length" class="doc-sec">
      <h2 class="t-heading-2">Voir aussi</h2>
      <div class="doc-grid">
        <AtCard v-for="r in related" :key="r.slug" :href="href('doc/composants/' + r.slug)">
          <div class="doc-card-link">
            <span class="doc-card-link__name">{{ r.name }}</span>
            <span class="doc-card-link__desc">{{ r.tagline }}</span>
          </div>
        </AtCard>
      </div>
    </section>
  </AtPage>
</template>
