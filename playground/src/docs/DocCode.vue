<script setup lang="ts">
import { computed, ref } from 'vue'
import { dedent, highlight } from './highlight'

/** Bloc de code sans aperçu (installation, types, extraits de configuration). */
const props = defineProps<{ code: string; label?: string }>()
const source = computed(() => dedent(props.code))
const copied = ref(false)
async function copy() {
  try {
    await navigator.clipboard.writeText(source.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 1400)
  } catch { /* presse-papiers indisponible */ }
}
</script>

<template>
  <div class="doc-codeblock">
    <div class="doc-codeblock__bar">
      <span class="t-caption">{{ label ?? 'Code' }}</span>
      <span class="at-toolbar__spacer" />
      <AtButton variant="ghost" size="sm" :icon="copied ? 'check' : 'copy'" icon-only :label="copied ? 'Copié' : 'Copier le code'" @click="copy" />
    </div>
    <pre class="doc-code"><code v-html="highlight(source)" /></pre>
  </div>
</template>
