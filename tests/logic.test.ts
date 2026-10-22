import { describe, it, expect } from 'vitest'
import { applyView, groupRows, matchRule, createView, filter, sort, defaultsFromFilters, monthGrid, NONE, type Property } from '../src'

interface Row { id: string; title: string; status: string; due: string | null; estimate: number | null; tags: string[] }
const schema: Property<Row>[] = [
  { key: 'title', name: 'Nom', type: 'title' },
  { key: 'status', name: 'Statut', type: 'status', options: [{ value: 'todo', label: 'À faire' }, { value: 'doing', label: 'En cours' }, { value: 'done', label: 'Terminé' }] },
  { key: 'due', name: 'Échéance', type: 'date' },
  { key: 'estimate', name: 'Estimation', type: 'number' },
  { key: 'tags', name: 'Étiquettes', type: 'multi', options: [{ value: 'front', label: 'Front' }, { value: 'back', label: 'Back' }] }
]
const rows: Row[] = [
  { id: 'a', title: 'Écrire la doc', status: 'done', due: '2026-10-01', estimate: 3, tags: ['front'] },
  { id: 'b', title: 'Composant Table', status: 'doing', due: '2026-10-25', estimate: 8, tags: ['front', 'back'] },
  { id: 'c', title: 'API export', status: 'todo', due: null, estimate: null, tags: ['back'] }
]

describe('filtres', () => {
  it('combine les conditions en ET', () => {
    const v = createView('t', 'table', { filters: [filter('tags', 'contains', 'front'), filter('status', 'isnot', 'done')] })
    expect(applyView(rows, schema, v).map(r => r.id)).toEqual(['b'])
  })
  it('ignore une règle sans valeur', () => {
    expect(applyView(rows, schema, createView('t', 'table', { filters: [filter('status', 'is', '')] }))).toHaveLength(3)
  })
  it('gère les dates dépassées par rapport à une date donnée', () => {
    expect(matchRule(rows[0], schema[2], filter('due', 'past'), '2026-10-22')).toBe(true)
    expect(matchRule(rows[2], schema[2], filter('due', 'past'), '2026-10-22')).toBe(false)
  })
  it('recherche dans le titre sans tenir compte de la casse', () => {
    expect(applyView(rows, schema, createView('t'), 'table').map(r => r.id)).toEqual(['b'])
  })
})

describe('tris', () => {
  it('trie par ordre des options et place les vides en dernier', () => {
    const v = createView('t', 'table', { sorts: [sort('status')] })
    expect(applyView(rows, schema, v).map(r => r.status)).toEqual(['todo', 'doing', 'done'])
    const w = createView('t', 'table', { sorts: [sort('estimate', 'desc')] })
    expect(applyView(rows, schema, w).map(r => r.id)).toEqual(['b', 'a', 'c'])
  })
})

describe('groupes', () => {
  it('suit l’ordre des options et garde les colonnes vides pour un board', () => {
    const g = groupRows(rows, schema[1], true)
    expect(g.map(x => x.key)).toEqual(['todo', 'doing', 'done', NONE])
    expect(groupRows(rows, schema[1]).map(x => x.key)).toEqual(['todo', 'doing', 'done'])
  })
})

describe('création', () => {
  it('déduit les valeurs par défaut des filtres « est »', () => {
    const v = createView('t', 'table', { filters: [filter('status', 'is', 'doing'), filter('tags', 'contains', 'back')] })
    expect(defaultsFromFilters(v, schema)).toEqual({ status: 'doing', tags: ['back'] })
  })
})

describe('calendrier', () => {
  it('commence un lundi et couvre le mois', () => {
    const days = monthGrid('2026-10')
    expect(days[0].iso).toBe('2026-09-28')
    expect(days.filter(d => !d.outside)).toHaveLength(31)
  })
})
