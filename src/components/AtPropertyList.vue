<script setup lang="ts">
import { ref, computed } from 'vue'
import AtIcon from './AtIcon.vue'
import AtPropertyValue from './AtPropertyValue.vue'
import AtPropertyEditor from './AtPropertyEditor.vue'
import type { Property, PropertyOption } from '../dataview/types'
import { typeIcon, isEditable } from '../dataview/logic'

/** Liste libellé / valeur éditable d'une ligne, pour un panneau de détail. */
const props = defineProps<{ schema: Property[]; row: any; exclude?: string[] }>()
const emit = defineEmits<{
  update: [key: string, value: unknown]
  createOption: [key: string, option: PropertyOption]
  updateOption: [key: string, value: string, patch: Partial<PropertyOption>]
  deleteOption: [key: string, value: string]
}>()
const shown = computed(() => props.schema.filter(p => p.type !== 'title' && !props.exclude?.includes(p.key)))
const editing = ref<Property | null>(null)
const anchor = ref<HTMLElement | null>(null)
const open = ref(false)
function edit(e: MouseEvent, p: Property) {
  if (!isEditable(p)) return
  if (p.type === 'checkbox') { emit('update', p.key, !props.row[p.key]); return }
  anchor.value = e.currentTarget as HTMLElement; editing.value = p; open.value = true
}
</script>

<template>
  <dl class="at-proplist">
    <template v-for="p in shown" :key="p.key">
      <dt><AtIcon :name="typeIcon(p)" />{{ p.name }}</dt>
      <dd><button type="button" class="at-proplist__value" :disabled="!isEditable(p)" @click="edit($event, p)"><AtPropertyValue :prop="p" :row="row" /></button></dd>
    </template>
  </dl>
  <AtPropertyEditor v-model:open="open" :prop="editing" :row="row" :anchor="anchor" 
    @update="v => editing && emit('update', editing.key, v)"
    @create-option="o => editing && emit('createOption', editing.key, o)"
    @update-option="(v, patch) => editing && emit('updateOption', editing.key, v, patch)"
    @delete-option="v => editing && emit('deleteOption', editing.key, v)"
  />
</template>
