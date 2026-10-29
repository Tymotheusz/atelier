<script setup lang="ts">
import { computed } from 'vue'
import { inline } from './inline'
import type { ApiRow } from './types'

/** Tableau d'API : props, v-model, événements ou slots d'un composant. */
const props = defineProps<{ rows: ApiRow[]; kind: 'prop' | 'model' | 'event' | 'slot' | 'param' | 'expose' }>()

const HEAD = {
  prop: ['Prop', 'Type', 'Défaut'],
  model: ['v-model', 'Type', 'Défaut'],
  event: ['Événement', 'Charge utile', ''],
  slot: ['Slot', 'Props exposées', ''],
  param: ['Paramètre', 'Type', 'Défaut'],
  expose: ['Nom', 'Signature', '']
} as const

const columns = computed(() => {
  const [name, type, third] = HEAD[props.kind]
  const cols: { key: keyof ApiRow & string; label: string; width?: string }[] = [
    { key: 'name', label: name, width: '22%' },
    { key: 'type', label: type, width: '26%' }
  ]
  if (third) cols.push({ key: 'default', label: third, width: '14%' })
  cols.push({ key: 'desc', label: 'Description' })
  return cols
})
</script>

<template>
  <AtTable :columns="columns" :rows="rows" row-key="name" class="doc-api">
    <template #cell-name="{ value, row }">
      <code class="t-code">{{ value }}</code><span v-if="row.required" class="doc-req" title="Obligatoire">*</span>
    </template>
    <template #cell-type="{ value }"><code class="t-code doc-type">{{ value }}</code></template>
    <template #cell-default="{ value }">
      <code v-if="value" class="t-code doc-type">{{ value }}</code><span v-else class="at-pv-empty">—</span>
    </template>
    <template #cell-desc="{ row }"><span v-html="inline(row.desc)" /></template>
  </AtTable>
</template>
