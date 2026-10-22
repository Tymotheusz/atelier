<script setup lang="ts">
import { computed } from 'vue'
import AtIcon from './AtIcon.vue'
import AtAvatar from './AtAvatar.vue'
import AtProgress from './AtProgress.vue'
import type { Property } from '../dataview/types'
import { getValue, isEmpty, findOption, isOptionType, formatDate, fmtNumber } from '../dataview/logic'

/** Affiche la valeur d'une propriété selon son type (badge, tag, personne, date…). */
const props = defineProps<{ prop: Property; row: any }>()
const v = computed(() => getValue(props.row, props.prop) as any)
const t = computed(() => props.prop.type)
const opt = computed(() => (isOptionType(props.prop) ? findOption(props.prop, props.row, v.value) : undefined))
const multi = computed(() => (t.value === 'multi' ? ((v.value ?? []) as string[]).map(x => findOption(props.prop, props.row, x)).filter(Boolean) : []))
const over = computed(() => t.value === 'date' && !!props.prop.overdue?.(props.row))
const label = computed(() => opt.value?.label ?? String(v.value ?? ''))
</script>

<template>
  <span v-if="t === 'title'" class="at-pv-title">{{ v || 'Sans titre' }}</span>
  <input v-else-if="t === 'checkbox'" type="checkbox" class="at-check" :checked="!!v" tabindex="-1" aria-hidden="true" style="pointer-events: none">
  <span v-else-if="isEmpty(v)" class="at-pv-empty">—</span>
  <span v-else-if="t === 'status'" :class="['at-badge', opt?.tone && opt.tone !== 'neutral' && `at-badge--${opt.tone}`]">{{ label }}</span>
  <span v-else-if="t === 'select'" :class="['at-tag', opt?.color && opt.color !== 'gray' && `at-tag--${opt.color}`]">{{ label }}</span>
  <span v-else-if="t === 'multi'" class="at-pv-multi">
    <span v-for="m in multi" :key="m!.value" :class="['at-tag', m!.color && m!.color !== 'gray' && `at-tag--${m!.color}`]">{{ m!.label }}</span>
  </span>
  <span v-else-if="t === 'person'" class="at-pv-person"><AtAvatar :name="label" /><span class="at-ellipsis">{{ label }}</span></span>
  <span v-else-if="t === 'relation'" class="at-pv-rel">
    <span v-if="opt?.mark" class="at-pv-mark" :style="{ background: opt.mark }" />
    <AtIcon v-else :name="prop.icon ?? 'link'" />
    <span class="at-ellipsis">{{ opt ? opt.label : 'Introuvable' }}</span>
  </span>
  <span v-else-if="t === 'date'" :class="['at-pv-date', over && 'at-pv-over']">{{ formatDate(v) }}</span>
  <span v-else-if="t === 'number'" class="at-num">{{ fmtNumber.format(Number(v)) }}{{ prop.suffix ?? '' }}</span>
  <AtProgress v-else-if="t === 'progress'" :value="Number(v)" />
  <span v-else class="at-pv-text at-ellipsis">{{ v }}</span>
</template>
