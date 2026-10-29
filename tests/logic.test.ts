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

import { matchOptions, canCreate, nextTagColor, splitMatch, formatRelative, splitMentions, mentionAt } from '../src'

describe('saisie de tags', () => {
  const opts = [{ value: 'produit', label: 'Produit', color: 'blue' as const }, { value: 'marketing', label: 'Marketing', color: 'purple' as const }, { value: 'interne', label: 'Interne', color: 'orange' as const }]
  it('filtre sans tenir compte de la casse ni des accents', () => {
    expect(matchOptions(opts, 'IN').map(o => o.value)).toEqual(['marketing', 'interne'])
    expect(matchOptions([{ value: 'e', label: 'Équipe' }], 'equ')).toHaveLength(1)
  })
  it('exclut les valeurs déjà choisies et montre tout sans saisie', () => {
    expect(matchOptions(opts, '', ['produit']).map(o => o.value)).toEqual(['marketing', 'interne'])
  })
  it('propose « Créer » sauf pour une option exacte', () => {
    expect(canCreate(opts, 'in')).toBe(true)
    expect(canCreate(opts, ' interne ')).toBe(false)
    expect(canCreate(opts, '  ')).toBe(false)
  })
  it('donne la première couleur libre', () => {
    expect(nextTagColor(opts)).toBe('green')
    expect(nextTagColor([...opts, { value: 'x', label: 'X', color: 'green' }])).toBe('yellow')
  })
  it('découpe le libellé autour de la correspondance', () => {
    expect(splitMatch('Marketing', 'in')).toEqual(['Market', 'in', 'g'])
    expect(splitMatch('Produit', 'zz')).toEqual(['Produit', '', ''])
  })
})

describe('commentaires', () => {
  const now = new Date(2026, 9, 27, 18, 0)
  it('formate les dates relatives', () => {
    expect(formatRelative(new Date(2026, 9, 27, 17, 59, 40).toISOString(), now)).toBe('à l’instant')
    expect(formatRelative(new Date(2026, 9, 27, 17, 55).toISOString(), now)).toBe('il y a 5 min')
    expect(formatRelative(new Date(2026, 9, 27, 16, 0).toISOString(), now)).toBe('il y a 2 h')
    expect(formatRelative(new Date(2026, 9, 26, 16, 40).toISOString(), now)).toBe('hier à 16:40')
    expect(formatRelative(new Date(2026, 9, 12, 9, 5).toISOString(), now)).toBe('12 oct. à 9:05')
    expect(formatRelative(new Date(2025, 9, 12, 9, 5).toISOString(), now)).toBe('12 oct. 2025')
  })
  it('repère les mentions des personnes connues', () => {
    expect(splitMentions('Merci @Chloé, et @Bob ?', ['Chloé', 'Bruno'])).toEqual([
      { text: 'Merci ' }, { text: '@Chloé', mention: true }, { text: ', et @Bob ?' }])
  })
  it('détecte la mention en cours de saisie', () => {
    expect(mentionAt('Merci @Ch', 9)).toEqual({ start: 6, query: 'Ch' })
    expect(mentionAt('mail@exemple', 12)).toBeNull()
  })
})

import { ME, resolveValue, nextMonday } from '../src'

describe('filtre « moi »', () => {
  interface T { id: string; title: string; assignee: string | null }
  const people: Property<T>[] = [
    { key: 'title', name: 'Nom', type: 'title' },
    { key: 'assignee', name: 'Assigné à', type: 'person', options: [{ value: 'u1', label: 'Alice' }, { value: 'u2', label: 'Bruno' }] }
  ]
  const tasks: T[] = [{ id: 'a', title: 'A', assignee: 'u1' }, { id: 'b', title: 'B', assignee: 'u2' }, { id: 'c', title: 'C', assignee: null }]
  const mine = createView('Mes tâches', 'list', { id: 'mine', locked: true, filters: [filter('assignee', 'is', ME)] })

  it('remplace @me par l’utilisateur courant', () => {
    expect(applyView(tasks, people, mine, '', { me: 'u2' }).map(t => t.id)).toEqual(['b'])
    const others = createView('t', 'table', { filters: [filter('assignee', 'isnot', ME)] })
    expect(applyView(tasks, people, others, '', { me: 'u2' }).map(t => t.id)).toEqual(['a', 'c'])
  })
  it('ne retient rien sans utilisateur courant', () => {
    expect(applyView(tasks, people, mine)).toEqual([])
    expect(matchRule(tasks[0], people[1], filter('assignee', 'isnot', ME))).toBe(false)
    expect(resolveValue(ME)).toBeUndefined()
    expect(resolveValue('u1', { me: 'u2' })).toBe('u1')
  })
  it('vaut aussi pour les listes', () => {
    interface M { id: string; title: string; people: string[] }
    const s: Property<M>[] = [{ key: 'title', name: 'Nom', type: 'title' }, { key: 'people', name: 'Personnes', type: 'multi' }]
    const v = createView('t', 'table', { filters: [filter('people', 'contains', ME)] })
    const rs: M[] = [{ id: '1', title: '1', people: ['u1', 'u2'] }, { id: '2', title: '2', people: ['u2'] }]
    expect(applyView(rs, s, v, '', { me: 'u1' }).map(r => r.id)).toEqual(['1'])
    expect(defaultsFromFilters(v, s, { me: 'u1' })).toEqual({ people: ['u1'] })
  })
  it('crée depuis une vue filtrée sur moi avec l’utilisateur courant', () => {
    expect(defaultsFromFilters(mine, people, { me: 'u1' })).toEqual({ assignee: 'u1' })
    expect(defaultsFromFilters(mine, people)).toEqual({})
  })
  it('createView accepte un id fixe et le verrou', () => {
    expect(mine.id).toBe('mine')
    expect(mine.locked).toBe(true)
    expect(createView('x').locked).toBeUndefined()
  })
})

describe('dates', () => {
  it('lundi prochain est toujours après le jour donné', () => {
    expect(nextMonday('2026-10-29')).toBe('2026-11-02') // jeudi
    expect(nextMonday('2026-11-02')).toBe('2026-11-09') // lundi
    expect(nextMonday('2026-11-01')).toBe('2026-11-02') // dimanche
  })
})
