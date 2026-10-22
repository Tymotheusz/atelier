<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'
import AtPopover from './AtPopover.vue'
import AtPropertyValue from './AtPropertyValue.vue'
import AtIcon from './AtIcon.vue'
import AtButton from './AtButton.vue'
import type { Property } from '../dataview/types'
import { optionsOf, isOptionType, today } from '../dataview/logic'

/** Éditeur flottant d'une propriété, ancré sur un élément (cellule, valeur d'un panneau). */
const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ prop: Property | null; row: any; anchor: HTMLElement | null }>()
const emit = defineEmits<{ update: [value: unknown] }>()

const draft = ref<string | number>('')
const box = ref<HTMLElement>()
const kind = computed(() => {
  const p = props.prop
  if (!p) return null
  if (isOptionType(p)) return 'options'
  if (p.type === 'multi') return 'multi'
  if (p.type === 'date') return 'date'
  return 'input'
})
const opts = computed(() => (props.prop ? optionsOf(props.prop, props.row) : []))
const current = computed(() => (props.prop && props.row ? props.row[props.prop.key] : null))

watch(open, v => {
  if (!v) return
  draft.value = current.value ?? ''
  nextTick(() => { const i = box.value?.querySelector<HTMLElement>('input, button'); i?.focus(); (i as HTMLInputElement)?.select?.() })
})
const fake = (value: unknown) => ({ ...props.row, [props.prop!.key]: value })
function set(value: unknown, close = true) { emit('update', value); if (close) open.value = false }
function toggle(value: string) {
  const a = [...((current.value as string[]) ?? [])]
  const i = a.indexOf(value); i < 0 ? a.push(value) : a.splice(i, 1)
  set(a, false)
}
function commit() {
  let v: unknown = draft.value
  if (props.prop?.type === 'number') v = v === '' || v == null ? null : Number(v)
  if (v !== current.value) emit('update', v)
  open.value = false
}
function onClose() { if (kind.value === 'input') { let v: unknown = draft.value; if (props.prop?.type === 'number') v = v === '' ? null : Number(v); if (v !== current.value) emit('update', v) } }
</script>

<template>
  <AtPopover v-model:open="open" :anchor="anchor" @close="onClose">
    <div v-if="prop" ref="box">
      <div v-if="kind === 'options'" class="at-menu" role="listbox" :aria-label="prop.name">
        <div class="at-menu-label">{{ prop.name }}</div>
        <button v-for="o in opts" :key="o.value" type="button" class="at-menu-item" role="option" :aria-selected="o.value === current" @click="set(o.value)">
          <AtPropertyValue :prop="prop" :row="fake(o.value)" />
          <AtIcon v-if="o.value === current" name="check" class="at-menu-check" />
        </button>
        <div v-if="!opts.length" class="at-menu-empty" style="padding: 4px 8px">Aucune option disponible</div>
        <template v-if="!prop.required">
          <div class="at-menu-sep" />
          <button type="button" class="at-menu-item" @click="set(null)"><AtIcon name="x" />Effacer</button>
        </template>
      </div>
      <div v-else-if="kind === 'multi'" class="at-menu" :aria-label="prop.name">
        <div class="at-menu-label">{{ prop.name }}</div>
        <button v-for="o in opts" :key="o.value" type="button" class="at-menu-item" role="menuitemcheckbox" :aria-checked="(current ?? []).includes(o.value)" @click="toggle(o.value)">
          <input type="checkbox" class="at-check" tabindex="-1" :checked="(current ?? []).includes(o.value)">
          <span :class="['at-tag', o.color && o.color !== 'gray' && `at-tag--${o.color}`]">{{ o.label }}</span>
        </button>
      </div>
      <div v-else-if="kind === 'date'" class="at-menu at-menu-pad" style="min-width: 240px">
        <span class="at-menu-title">{{ prop.name }}</span>
        <input type="date" class="at-input" :value="current ?? ''" :aria-label="prop.name" @change="set(($event.target as HTMLInputElement).value || null, false)">
        <div class="at-menu-actions">
          <AtButton size="sm" @click="set(today())">Aujourd’hui</AtButton>
          <AtButton size="sm" variant="ghost" @click="set(null)">Effacer</AtButton>
        </div>
      </div>
      <div v-else class="at-menu at-menu-pad" style="min-width: 280px">
        <span class="at-menu-title">{{ prop.name }}</span>
        <input v-model="draft" class="at-input" :type="prop.type === 'number' ? 'number' : 'text'" :aria-label="prop.name" @keydown.enter="commit">
      </div>
    </div>
  </AtPopover>
</template>
