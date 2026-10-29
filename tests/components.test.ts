import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { AtButton, AtCard, AtLogin, AtIconTile, AtLogo, registerLogoApps, AtStat, AtDataView, createView, type Property } from '../src'

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

describe('AtIconTile', () => {
  it('pose taille et teinte, décorative par défaut', () => {
    const w = mount(AtIconTile, { props: { name: 'book', color: 'chart-2', size: 'lg' } })
    expect(w.classes()).toEqual(expect.arrayContaining(['at-tile', 'at-tile--lg', 'at-tone-chart-2']))
    expect(w.attributes('aria-hidden')).toBe('true')
  })
  it('est neutre et détourée sans couleur', () => {
    const w = mount(AtIconTile, { props: { name: 'folder', label: 'Dossier' } })
    expect(w.classes()).toContain('at-tile--neutral')
    expect(w.attributes('role')).toBe('img')
  })
})

describe('AtLogo', () => {
  it('pose la couleur de l’app en variable, décorative par défaut', () => {
    const w = mount(AtLogo, { props: { app: 'tasks', size: 32 } })
    expect(w.classes()).toContain('at-logo')
    expect(w.attributes('style')).toContain('--at-logo-fill: var(--chart-3)')
    expect(w.attributes('aria-hidden')).toBe('true')
    expect(w.find('.at-logo__glyph').html()).toContain('<path')
  })
  it('affiche le nom avec wordmark et retombe sur atelier pour une app inconnue', () => {
    const w = mount(AtLogo, { props: { app: 'inconnue', wordmark: true } })
    expect(w.find('.at-logo__name').text()).toBe('Atelier')
    expect(w.attributes('style')).toContain('var(--ink)')
  })
  it('accepte une app enregistrée', () => {
    registerLogoApps({ notes: { name: 'Notes', glyph: '<path d="M8 6h8v12H8z"/>', color: 'tag-yellow-fg' } })
    const w = mount(AtLogo, { props: { app: 'notes', label: 'Notes' } })
    expect(w.attributes('role')).toBe('img')
    expect(w.attributes('style')).toContain('var(--tag-yellow-fg)')
  })
})

describe('bande de couleur', () => {
  it('AtStat et AtCard posent la bande seulement avec color', () => {
    expect(mount(AtStat, { props: { label: 'Vues', value: '12', color: 'chart-1' } }).classes()).toEqual(expect.arrayContaining(['at-stat--striped', 'at-tone-chart-1']))
    expect(mount(AtStat, { props: { label: 'Vues', value: '12' } }).classes()).not.toContain('at-stat--striped')
    expect(mount(AtCard, { props: { title: 'Projet', color: 'danger' } }).classes()).toEqual(expect.arrayContaining(['at-card--striped', 'at-tone-danger']))
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
  it('émet reset-views depuis les paramètres de la vue, même avec lockViews, sans toucher aux vues', async () => {
    const views = [createView('Tableau', 'table'), createView('Liste', 'list')]
    const openSettings = (w: ReturnType<typeof mount>) => w.find('button[aria-label="Paramètres de la vue"]').trigger('click')
    const resetItem = () => [...document.body.querySelectorAll<HTMLButtonElement>('.at-menu-item')].find(b => b.textContent?.includes('Réinitialiser les vues'))

    const plain = mount(AtDataView, { props: { rows, schema, views, activeView: views[0].id }, attachTo: document.body })
    await openSettings(plain)
    expect(resetItem()).toBeUndefined()
    plain.unmount()

    const w = mount(AtDataView, { props: { rows, schema, views, activeView: views[0].id, lockViews: true, resettable: true }, attachTo: document.body })
    await openSettings(w)
    const item = resetItem()
    expect(item).toBeDefined()
    item!.click()
    await w.vm.$nextTick()
    expect(w.emitted('resetViews')).toEqual([[]])
    expect(w.emitted('update:views')).toBeUndefined()
    expect(resetItem()).toBeUndefined()
    w.unmount()
  })
})

describe('AtLogin', () => {
  it('émet submit avec l’identifiant nettoyé, seulement si les deux champs sont remplis', async () => {
    const w = mount(AtLogin, { props: { username: '  timothee ', password: '' } })
    await w.find('form').trigger('submit')
    expect(w.emitted('submit')).toBeUndefined()
    await w.setProps({ password: 'secret' })
    await w.find('form').trigger('submit')
    expect(w.emitted('submit')?.[0]).toEqual([{ username: 'timothee', password: 'secret', remember: false }])
  })
  it('annonce l’erreur et bloque le formulaire pendant le chargement', async () => {
    const w = mount(AtLogin, { props: { username: 'a', password: 'b', error: 'Identifiant ou mot de passe incorrect.', loading: 'passkey', passkey: true } })
    expect(w.find('[role="alert"]').text()).toBe('Identifiant ou mot de passe incorrect.')
    expect(w.findAll('input').every(i => i.attributes('disabled') !== undefined)).toBe(true)
    await w.find('form').trigger('submit')
    expect(w.emitted('submit')).toBeUndefined()
    const boutons = w.findAll('button')
    expect(boutons[boutons.length - 1].attributes('aria-busy')).toBe('true')
  })
  it('pose le titre comme nom de la carte et la première lettre de la marque', () => {
    const w = mount(AtLogin, { props: { brand: 'cornic.org', as: 'div' } })
    expect(w.element.tagName).toBe('DIV')
    expect(w.find('.at-workspace__mark').text()).toBe('C')
    const h1 = w.find('h1')
    expect(w.find('section').attributes('aria-labelledby')).toBe(h1.attributes('id'))
  })
})
