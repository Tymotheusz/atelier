<script setup lang="ts">
import { computed, defineComponent, ref, type Component } from 'vue'
import { dedent, highlight } from './highlight'
import { inline } from './inline'

/**
 * Aperçu vivant + code source. Le template de l'exemple est compilé à l'exécution :
 * ce qui s'affiche et ce qui est copié sont le même texte, il ne peut pas y avoir de décalage.
 */
const props = withDefaults(defineProps<{
  title?: string
  desc?: string
  code: string
  /** Portée de l'exemple : refs et helpers utilisés par le template. */
  setup?: () => Record<string, unknown>
  /** Disposition de l'aperçu. */
  frame?: 'row' | 'col' | 'grid' | 'plain'
  /** Code déplié au premier rendu. */
  open?: boolean
}>(), { frame: 'row' })

const source = computed(() => dedent(props.code))
const shown = ref(!!props.open)
const copied = ref(false)

const Demo = computed<Component>(() => defineComponent({
  name: 'Apercu',
  setup: props.setup ?? (() => ({})),
  template: source.value
}))

async function copy() {
  try {
    await navigator.clipboard.writeText(source.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 1400)
  } catch { /* presse-papiers indisponible */ }
}
</script>

<template>
  <section class="doc-ex">
    <div v-if="title || desc" class="doc-ex__head">
      <h3 class="t-body-strong" v-html="inline(title ?? '')" />
      <p v-if="desc" v-html="inline(desc)" />
    </div>
    <div class="doc-ex__box">
      <div :class="['doc-ex__view', `doc-ex__view--${frame}`]"><component :is="Demo" /></div>
      <div class="doc-ex__bar">
        <AtButton variant="ghost" size="sm" :icon="shown ? 'chevron-down' : 'chevron-right'" @click="shown = !shown">Code</AtButton>
        <span class="at-toolbar__spacer" />
        <AtButton variant="ghost" size="sm" :icon="copied ? 'check' : 'copy'" icon-only :label="copied ? 'Copié' : 'Copier le code'" @click="copy" />
      </div>
      <pre v-if="shown" class="doc-code"><code v-html="highlight(source)" /></pre>
    </div>
  </section>
</template>
