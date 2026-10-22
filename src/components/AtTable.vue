<script setup lang="ts" generic="T extends Record<string, any>">
/**
 * Tableau simple et typé. Pour une vue base de données (filtres, tris, vues), utiliser AtDataView.
 * Slot par colonne : #cell-<key>="{ row, value }".
 */
import type { TableColumn } from '../types'
defineProps<{ columns: TableColumn<T>[]; rows: T[]; rowKey?: keyof T & string; empty?: string }>()
defineEmits<{ rowClick: [row: T] }>()
</script>

<template>
  <div class="at-table-wrap">
    <table class="at-table">
      <thead>
        <tr><th v-for="c in columns" :key="c.key" :class="{ 'at-num': c.align === 'right' }" :style="c.width ? { width: c.width } : undefined">{{ c.label }}</th></tr>
      </thead>
      <tbody>
        <tr v-for="(r, i) in rows" :key="rowKey ? (r as any)[rowKey] : i" :style="$attrs.onRowClick ? { cursor: 'pointer' } : undefined" @click="$emit('rowClick', r)">
          <td v-for="c in columns" :key="c.key" :class="{ 'at-num': c.align === 'right' }">
            <slot :name="`cell-${c.key}`" :row="r" :value="r[c.key]">{{ c.format ? c.format(r[c.key], r) : r[c.key] }}</slot>
          </td>
        </tr>
        <tr v-if="!rows.length"><td :colspan="columns.length" class="at-muted" style="text-align: center">{{ empty ?? 'Aucune donnée' }}</td></tr>
      </tbody>
    </table>
  </div>
</template>
