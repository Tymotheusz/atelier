<script setup lang="ts">
import { computed, ref } from 'vue'
import { icons } from '@tymotheusz/atelier'
import DocCode from '../DocCode.vue'

const q = ref('')
const copie = ref('')
const noms = computed(() => Object.keys(icons).filter(n => n.includes(q.value.trim().toLowerCase())))

function copier(n: string) {
  navigator.clipboard?.writeText(n).catch(() => {})
  copie.value = n
  setTimeout(() => { if (copie.value === n) copie.value = '' }, 1600)
}
</script>

<template>
  <AtPage title="Pictogrammes" :description="`${Object.keys(icons).length} pictogrammes intégrés, 16 px, trait 1,5, à la couleur du texte.`">
    <p class="doc-lead">
      Jeu de référence : Lucide. Les pictogrammes du paquet sont dessinés au même gabarit — 16 px, trait 1,5,
      extrémités arrondies, <code class="t-code">currentColor</code> — et couvrent l’interface d’app. Le jeu
      s’étend sans toucher au paquet.
    </p>

    <section class="doc-sec">
      <div style="display: flex; align-items: center; gap: var(--space-3); flex-wrap: wrap">
        <div style="width: 300px; max-width: 100%">
          <AtInput v-model="q" icon="search" placeholder="Chercher un pictogramme…" aria-label="Chercher un pictogramme" />
        </div>
        <span class="at-muted" style="font-size: 13px">
          {{ copie ? 'Copié : ' + copie : noms.length + ' pictogramme' + (noms.length > 1 ? 's' : '') }}
        </span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: var(--space-1)">
        <button v-for="n in noms" :key="n" type="button" class="at-menu-item" :title="`Copier « ${n} »`" @click="copier(n)">
          <AtIcon :name="n" />
          <span class="at-ellipsis" style="font-size: 12px">{{ n }}</span>
          <AtIcon v-if="copie === n" name="check" class="at-menu-check" />
        </button>
      </div>
      <AtEmpty v-if="!noms.length" :message="`Aucun pictogramme ne contient « ${q} ».`" />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Règles</h2>
      <ul class="doc-list">
        <li>Couleur : <code class="t-code">ink-muted</code> par défaut, <code class="t-code">ink-subtle</code> dans les en-têtes de tableau. Jamais l’accent seule.</li>
        <li>16 px dans toute l’interface. Au-delà, ce n’est plus un picto mais une illustration.</li>
        <li>Une icône seule cliquable est un <code class="t-code">AtButton</code> avec <code class="t-code">iconOnly</code> et <code class="t-code">label</code>, jamais une icône nue.</li>
        <li>Une icône sans <code class="t-code">label</code> est <code class="t-code">aria-hidden</code> : c’est le bon réglage quand un texte l’accompagne.</li>
        <li>Pour identifier une entité (un projet, un dossier), c’est <code class="t-code">AtIconTile</code> : l’icône sur un aplat de la couleur de l’entité, à la place d’une initiale.</li>
        <li>Pas d’emoji dans l’interface. Une page peut avoir une icône, jamais un titre décoré.</li>
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Ajouter des pictogrammes</h2>
      <p class="at-muted" style="margin: 0; max-width: var(--measure-prose)">
        <code class="t-code">registerIcons</code> complète le jeu à l’exécution. Le contenu est l’intérieur du
        <code class="t-code">&lt;svg&gt;</code>, dans une boîte <code class="t-code">0 0 16 16</code>, en
        <code class="t-code">currentColor</code>.
      </p>
      <DocCode label="icons.ts" :code="`import { registerIcons } from '@tymotheusz/atelier'

registerIcons({
  ticket: '<path d=\\'M2.5 6.5V4.5h11v2a1.5 1.5 0 0 0 0 3v2h-11v-2a1.5 1.5 0 0 0 0-3Z\\' /><path d=\\'M6.5 4.5v7\\' />'
})

// puis, partout : <AtIcon name='ticket' /> ou <AtIconTile name='ticket' color='chart-2' />`" />
      <p class="at-muted" style="margin: 0; font-size: 13px">
        Les attributs communs (<code class="t-code">fill</code>, <code class="t-code">stroke</code>,
        <code class="t-code">stroke-width</code>) sont posés par <code class="t-code">AtIcon</code> :
        le chemin n’a pas à les répéter.
      </p>
    </section>
  </AtPage>
</template>
