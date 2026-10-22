import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { AtButton, AtDataView, createView, type Property } from '../src'

describe('AtButton', () => {
  it('pose les classes de variante et de taille', () => {
    const w = mount(AtButton, { props: { variant: 'primary', size: 'sm' }, slots: { default: 'Publier' } })
    expect(w.classes()).toEqual(expect.arrayContaining(['at-btn', 'at-btn--primary', 'at-btn--sm']))
    expect(w.text()).toBe('Publier')
  })
  it('exige un libellé accessible en mode icône seule', () => {
    const w = mount(AtButton, { props: { icon: 'plus', iconOnly: true, label: 'Ajouter' } })
    expect(w.attributes('aria-label')).toBe('Ajouter')
  })
})

describe('AtDataView', () => {
  const schema: Property[] = [
    { key: 'title', name: 'Nom', type: 'title' },
    { key: 'status', name: 'Statut', type: 'status', options: [{ value: 'todo', label: 'À faire' }, { value: 'done', label: 'Terminé', tone: 'success' }] }
  ]
  const rows = [{ id: 1, title: 'Un', status: 'todo' }, { id: 2, title: 'Deux', status: 'done' }]

  it('affiche une ligne par élément et émet open au clic sur le titre', async () => {
    const w = mount(AtDataView, { props: { rows, schema }, attachTo: document.body })
    expect(w.findAll('tbody tr').filter(tr => tr.find('.at-dv-titlecell').exists())).toHaveLength(2)
    await w.find('.at-dv-titlecell').trigger('click')
    expect(w.emitted('open')?.[0]).toEqual([rows[0]])
    w.unmount()
  })
  it('groupe en colonnes de board', () => {
    const views = [createView('Board', 'board', { groupBy: 'status' })]
    const w = mount(AtDataView, { props: { rows, schema, views, activeView: views[0].id } })
    expect(w.findAll('.at-dv-col')).toHaveLength(3)
    expect(w.findAll('.at-dv-card')).toHaveLength(2)
  })
  it('émet create avec les valeurs du groupe', async () => {
    const views = [createView('Board', 'board', { groupBy: 'status' })]
    const w = mount(AtDataView, { props: { rows, schema, views, activeView: views[0].id } })
    await w.findAll('.at-dv-col')[1].find('.at-dv-new').trigger('click')
    expect(w.emitted('create')?.[0]).toEqual([{ status: 'done' }])
  })
})
