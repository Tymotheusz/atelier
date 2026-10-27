<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue'
import AtPopover from './AtPopover.vue'
import AtPropertyValue from './AtPropertyValue.vue'
import AtIcon from './AtIcon.vue'
import AtButton from './AtButton.vue'
import AtKbd from './AtKbd.vue'
import type { Property, PropertyOption } from '../dataview/types'
import type { TagColor } from '../types'
import { optionsOf, isOptionType, today, uid, matchOptions, canCreate, nextTagColor, splitMatch } from '../dataview/logic'
import { useId } from '../composables/useId'

/**
 * Éditeur flottant d'une propriété, ancré sur un élément (cellule, valeur d'un panneau).
 * Select et multi s'éditent en place : le champ se pose sur la cellule, on tape, les options se filtrent
 * dessous ; avec `creatable`, « Créer » et « ⋯ » (renommer, couleur, supprimer) émettent les événements *-option.
 */
const open = defineModel<boolean>('open', { default: false })
const props = defineProps<{ prop: Property | null; row: any; anchor: HTMLElement | null }>()
const emit = defineEmits<{
  update: [value: unknown]
  createOption: [option: PropertyOption]
  updateOption: [value: string, patch: Partial<PropertyOption>]
  deleteOption: [value: string]
}>()

const draft = ref<string | number>('')
const box = ref<HTMLElement>()
const kind = computed(() => {
  const p = props.prop
  if (!p) return null
  if (p.type === 'select' || p.type === 'multi') return 'tags'
  if (isOptionType(p)) return 'options'
  if (p.type === 'date') return 'date'
  return 'input'
})
const opts = computed(() => (props.prop ? optionsOf(props.prop, props.row) : []))
const current = computed(() => (props.prop && props.row ? props.row[props.prop.key] : null))

/* ---------- Saisie de tags ---------- */
const multi = computed(() => props.prop?.type === 'multi')
const creatable = computed(() => !!props.prop?.creatable)
const q = ref('')
const hl = ref(0)
const input = ref<HTMLInputElement>()
const cell = ref({ w: 0, h: 0 })
const listId = useId('at-tags')
const chosenValues = computed<string[]>(() => (multi.value ? (current.value as string[]) ?? [] : current.value != null ? [current.value as string] : []))
const chosen = computed(() => chosenValues.value.map(v => opts.value.find(o => o.value === v)).filter((o): o is PropertyOption => !!o))
const matches = computed(() => matchOptions(opts.value, q.value, multi.value ? chosenValues.value : []))
const showCreate = computed(() => creatable.value && canCreate(opts.value, q.value))
const count = computed(() => matches.value.length + (showCreate.value ? 1 : 0))
const next = computed(() => nextTagColor(opts.value))
const tagClass = (c?: TagColor) => ['at-tag', c && c !== 'gray' && `at-tag--${c}`]
watch(q, () => { hl.value = 0 })

function choose(o: PropertyOption) {
  if (multi.value) { set([...chosenValues.value, o.value], false); q.value = '' }
  else set(o.value)
}
function createFromQuery() {
  const option: PropertyOption = { value: uid(), label: q.value.trim(), color: next.value }
  emit('createOption', option)
  choose(option)
}
function removeChip(v: string) { set(chosenValues.value.filter(x => x !== v), false); input.value?.focus() }
function onKey(e: KeyboardEvent) {
  const n = count.value
  if (e.key === 'ArrowDown') { e.preventDefault(); if (n) hl.value = (hl.value + 1) % n }
  else if (e.key === 'ArrowUp') { e.preventDefault(); if (n) hl.value = (hl.value - 1 + n) % n }
  else if (e.key === 'Enter') {
    e.preventDefault()
    if (hl.value < matches.value.length) choose(matches.value[hl.value])
    else if (showCreate.value) createFromQuery()
  } else if (e.key === 'Tab') open.value = false
  else if (e.key === 'Backspace' && !q.value && chosenValues.value.length) {
    e.preventDefault()
    if (multi.value) set(chosenValues.value.slice(0, -1), false)
    else if (!props.prop?.required) set(null, false)
  }
}

/* « ⋯ » : renommer, recolorer, supprimer une option */
const COLORS: { value: TagColor; label: string }[] = [
  { value: 'gray', label: 'Gris' }, { value: 'brown', label: 'Marron' }, { value: 'orange', label: 'Orange' },
  { value: 'yellow', label: 'Jaune' }, { value: 'green', label: 'Vert' }, { value: 'blue', label: 'Bleu' },
  { value: 'purple', label: 'Violet' }, { value: 'pink', label: 'Rose' }, { value: 'red', label: 'Rouge' }]
const editOpen = ref(false)
const editAnchor = ref<HTMLElement | null>(null)
const editValue = ref<string | null>(null)
const editOpt = computed(() => opts.value.find(o => o.value === editValue.value) ?? null)
function openEdit(e: MouseEvent, o: PropertyOption) {
  if (editOpen.value && editValue.value === o.value) { editOpen.value = false; return }
  editAnchor.value = e.currentTarget as HTMLElement; editValue.value = o.value; editOpen.value = true
}
function rename(label: string) { const l = label.trim(); if (editOpt.value && l && l !== editOpt.value.label) emit('updateOption', editOpt.value.value, { label: l }) }
function recolor(c: TagColor) { if (editOpt.value) emit('updateOption', editOpt.value.value, { color: c }) }
function del() { if (editOpt.value) emit('deleteOption', editOpt.value.value); editOpen.value = false; input.value?.focus() }
function closeEdit() { input.value?.focus() }

watch(open, v => {
  if (!v) { editOpen.value = false; return }
  draft.value = current.value ?? ''
  q.value = ''; hl.value = 0
  const r = props.anchor?.getBoundingClientRect()
  cell.value = { w: r?.width ?? 0, h: r?.height ?? 0 }
  nextTick(() => {
    if (kind.value === 'tags') { input.value?.focus(); return }
    const i = box.value?.querySelector<HTMLElement>('input, button'); i?.focus(); (i as HTMLInputElement)?.select?.()
  })
})
const fake = (value: unknown) => ({ ...props.row, [props.prop!.key]: value })
function set(value: unknown, close = true) { emit('update', value); if (close) open.value = false }
function commit() {
  let v: unknown = draft.value
  if (props.prop?.type === 'number') v = v === '' || v == null ? null : Number(v)
  if (v !== current.value) emit('update', v)
  open.value = false
}
function onClose() { if (kind.value === 'input') { let v: unknown = draft.value; if (props.prop?.type === 'number') v = v === '' ? null : Number(v); if (v !== current.value) emit('update', v) } }
</script>

<template>
  <AtPopover v-model:open="open" :anchor="anchor" :placement="kind === 'tags' ? 'over' : 'bottom'" @close="onClose">
    <div v-if="prop" ref="box">
      <div v-if="kind === 'tags'" class="at-tagedit" :style="{ width: Math.max(cell.w, 240) + 'px' }">
        <div class="at-tagedit__field" :style="{ minHeight: cell.h + 'px' }" @mousedown.self.prevent="input?.focus()">
          <span v-for="o in chosen" :key="o.value" :class="tagClass(o.color)">
            {{ o.label }}
            <button v-if="multi" type="button" :aria-label="`Retirer ${o.label}`" @mousedown.prevent @click="removeChip(o.value)"><AtIcon name="x" /></button>
          </span>
          <input
            ref="input" v-model="q" type="text" role="combobox" aria-autocomplete="list" aria-expanded="true"
            :aria-controls="listId" :aria-activedescendant="count ? `${listId}-${hl}` : undefined" :aria-label="prop.name"
            autocomplete="off" spellcheck="false" @keydown="onKey"
          >
        </div>
        <div :id="listId" class="at-menu at-tagedit__menu" role="listbox" :aria-label="prop.name" :aria-multiselectable="multi || undefined">
          <div v-if="!q.trim()" class="at-menu-label">{{ creatable ? 'Choisir, ou taper pour créer' : 'Choisir une option' }}</div>
          <div
            v-for="(o, i) in matches" :id="`${listId}-${i}`" :key="o.value"
            :class="['at-menu-item', 'at-tagedit__opt', i === hl && 'is-active']" role="option" :aria-selected="chosenValues.includes(o.value)"
            @mousedown.prevent @mousemove="hl = i" @click="choose(o)"
          >
            <span :class="tagClass(o.color)"><span>{{ splitMatch(o.label, q)[0] }}<mark>{{ splitMatch(o.label, q)[1] }}</mark>{{ splitMatch(o.label, q)[2] }}</span></span>
            <AtIcon v-if="!multi && o.value === current" name="check" class="at-menu-check" />
            <button
              v-if="creatable" type="button" class="at-tagedit__more" :aria-label="`Modifier ${o.label}`" :aria-expanded="editOpen && editValue === o.value"
              @mousedown.prevent @click.stop="openEdit($event, o)"
            ><AtIcon name="more" /></button>
          </div>
          <div
            v-if="showCreate" :id="`${listId}-${matches.length}`" :class="['at-menu-item', 'at-tagedit__opt', 'at-tagedit__create', hl === matches.length && 'is-active']"
            role="option" aria-selected="false" @mousedown.prevent @mousemove="hl = matches.length" @click="createFromQuery"
          ><AtIcon name="plus" />Créer <span :class="tagClass(next)">{{ q.trim() }}</span></div>
          <div v-if="!count" class="at-menu-empty" style="padding: 2px 8px">{{ q.trim() ? 'Aucune option ne correspond' : 'Toutes les options sont choisies' }}</div>
          <div class="at-tagedit__hint">
            <span><AtKbd>↵</AtKbd>{{ showCreate && hl === matches.length ? 'créer' : 'choisir' }}</span>
            <span><AtKbd>Échap</AtKbd>fermer</span>
            <span v-if="multi"><AtKbd>⌫</AtKbd>retirer</span>
          </div>
        </div>
        <AtPopover v-model:open="editOpen" :anchor="editAnchor" placement="right" @close="closeEdit">
          <div v-if="editOpt" class="at-menu at-tagedit__panel" role="menu" :aria-label="`Option ${editOpt.label}`">
            <input
              :key="editOpt.value" class="at-input" type="text" :value="editOpt.label" aria-label="Nom de l’option"
              @change="rename(($event.target as HTMLInputElement).value)"
              @keydown.enter.prevent="rename(($event.target as HTMLInputElement).value); editOpen = false; closeEdit()"
            >
            <button type="button" class="at-menu-item at-menu-item--danger" role="menuitem" @click="del"><AtIcon name="trash" />Supprimer</button>
            <div class="at-menu-sep" />
            <div class="at-menu-label">Couleur</div>
            <button
              v-for="c in COLORS" :key="c.value" type="button" class="at-menu-item" role="menuitemradio"
              :aria-checked="(editOpt.color ?? 'gray') === c.value" @click="recolor(c.value)"
            >
              <span :class="[...tagClass(c.value), 'at-tagedit__swatch']" />{{ c.label }}
              <AtIcon v-if="(editOpt.color ?? 'gray') === c.value" name="check" class="at-menu-check" />
            </button>
          </div>
        </AtPopover>
      </div>
      <div v-else-if="kind === 'options'" class="at-menu" role="listbox" :aria-label="prop.name">
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
