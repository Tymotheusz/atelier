import { describe, it, expect, vi, afterEach } from 'vitest'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import {
  useShortcut, parseShortcut, matchShortcut, formatShortcut, useToast, AtToaster, AtList, AtPropertyList, AtDataView,
  createView, filter, ME, type Property
} from '../src'

const key = (k: string, init: KeyboardEventInit = {}, target: EventTarget = document.body) => {
  const e = new KeyboardEvent('keydown', { key: k, bubbles: true, cancelable: true, ...init })
  target.dispatchEvent(e)
  return e
}

describe('raccourcis : syntaxe', () => {
  it('lit les touches et les modificateurs', () => {
    expect(parseShortcut('mod+Enter')).toMatchObject({ key: 'enter', mod: true })
    expect(parseShortcut('#')).toMatchObject({ key: '#', mod: false })
    expect(parseShortcut('esc').key).toBe('escape')
  })
  it('mod vaut ⌘ sur Apple, Ctrl ailleurs', () => {
    const s = parseShortcut('mod+enter')
    expect(matchShortcut(new KeyboardEvent('keydown', { key: 'Enter', metaKey: true }), s, true)).toBe(true)
    expect(matchShortcut(new KeyboardEvent('keydown', { key: 'Enter', ctrlKey: true }), s, true)).toBe(false)
    expect(matchShortcut(new KeyboardEvent('keydown', { key: 'Enter', ctrlKey: true }), s, false)).toBe(true)
  })
  it('n’attrape pas Ctrl+C pour « c », mais # quel que soit le clavier', () => {
    expect(matchShortcut(new KeyboardEvent('keydown', { key: 'c', ctrlKey: true }), parseShortcut('c'), false)).toBe(false)
    expect(matchShortcut(new KeyboardEvent('keydown', { key: 'C', shiftKey: true }), parseShortcut('c'), false)).toBe(true)
    expect(matchShortcut(new KeyboardEvent('keydown', { key: '#', shiftKey: true }), parseShortcut('#'), false)).toBe(true)
    expect(matchShortcut(new KeyboardEvent('keydown', { key: '#', altKey: true }), parseShortcut('#'), true)).toBe(true)
    expect(matchShortcut(new KeyboardEvent('keydown', { key: 'Enter', shiftKey: true }), parseShortcut('enter'), false)).toBe(false)
  })
  it('affiche le raccourci', () => {
    expect(formatShortcut('mod+enter', true)).toBe('⌘↵')
    expect(formatShortcut('mod+enter', false)).toBe('Ctrl ↵')
    expect(formatShortcut('j', false)).toBe('J')
  })
})

describe('useShortcut', () => {
  const stops: (() => void)[] = []
  afterEach(() => { stops.splice(0).forEach(s => s()); document.body.innerHTML = '' })

  it('appelle le dernier inscrit et empêche l’action par défaut', () => {
    const a = vi.fn(), b = vi.fn()
    stops.push(useShortcut('c', a), useShortcut('c', b))
    const e = key('c')
    expect(b).toHaveBeenCalledTimes(1)
    expect(a).not.toHaveBeenCalled()
    expect(e.defaultPrevented).toBe(true)
  })
  it('passe au suivant quand when est faux', () => {
    const a = vi.fn(), b = vi.fn()
    stops.push(useShortcut('c', a), useShortcut('c', b, { when: () => false }))
    key('c')
    expect(a).toHaveBeenCalledTimes(1)
    expect(b).not.toHaveBeenCalled()
  })
  it('ignore les champs sauf allowInInput', () => {
    const a = vi.fn(), b = vi.fn()
    stops.push(useShortcut('j', a), useShortcut('mod+enter', b, { allowInInput: true }))
    const input = document.body.appendChild(document.createElement('input'))
    expect(key('j', {}, input).defaultPrevented).toBe(false)
    expect(a).not.toHaveBeenCalled()
    key('Enter', { ctrlKey: true, metaKey: false }, input)
    key('Enter', { metaKey: true }, input)
    expect(b).toHaveBeenCalledTimes(1)
  })
  it('se tait quand une couche est ouverte, sauf dans un champ de cette couche', () => {
    const a = vi.fn(), b = vi.fn()
    stops.push(useShortcut('j', a), useShortcut(['mod+enter'], b, { allowInInput: true }))
    const dialog = document.body.appendChild(document.createElement('div'))
    dialog.setAttribute('aria-modal', 'true')
    const field = dialog.appendChild(document.createElement('textarea'))
    key('j')
    expect(a).not.toHaveBeenCalled()
    key('Enter', { ctrlKey: true }, field); key('Enter', { metaKey: true }, field)
    expect(b).toHaveBeenCalledTimes(1)
  })
  it('laisse Entrée à un bouton qui a le focus', () => {
    const fn = vi.fn()
    stops.push(useShortcut('enter', fn))
    const b = document.body.appendChild(document.createElement('button'))
    expect(key('Enter', {}, b).defaultPrevented).toBe(false)
    key('Enter')
    expect(fn).toHaveBeenCalledTimes(1)
  })
  it('se désinscrit au démontage', () => {
    const fn = vi.fn()
    const C = defineComponent({ setup() { useShortcut('k', fn); return () => h('div') } })
    const w = mount(C)
    key('k'); w.unmount(); key('k')
    expect(fn).toHaveBeenCalledTimes(1)
  })
})

describe('toasts', () => {
  afterEach(() => { useToast().dismiss(); vi.useRealTimers() })

  it('empile, montre trois toasts au plus et ferme au bout de la durée', async () => {
    vi.useFakeTimers()
    const w = mount(AtToaster, { attachTo: document.body })
    const { toast } = useToast()
    for (let i = 1; i <= 4; i++) toast({ message: `T${i}`, duration: 1000 })
    await nextTick()
    expect([...document.querySelectorAll('.at-toast__msg')].map(e => e.textContent)).toEqual(['T1', 'T2', 'T3'])
    vi.advanceTimersByTime(1000); await nextTick()
    // the fourth one waited in the queue: its timer starts only now
    expect([...document.querySelectorAll('.at-toast__msg')].map(e => e.textContent)).toEqual(['T4'])
    vi.advanceTimersByTime(1000); await nextTick()
    expect(document.querySelectorAll('.at-toast')).toHaveLength(0)
    w.unmount()
  })
  it('l’action s’exécute puis ferme ; danger est assertif', async () => {
    const w = mount(AtToaster, { attachTo: document.body })
    const undo = vi.fn()
    useToast().toast({ message: 'Supprimé', tone: 'danger', action: { label: 'Annuler', onClick: undo } })
    await nextTick()
    const t = document.querySelector('.at-toast')!
    expect(t.getAttribute('role')).toBe('alert')
    ;(t.querySelector('.at-toast__action') as HTMLElement).click(); await nextTick()
    expect(undo).toHaveBeenCalledTimes(1)
    expect(document.querySelectorAll('.at-toast')).toHaveLength(0)
    w.unmount()
  })
  it('met le minuteur en pause au survol', async () => {
    vi.useFakeTimers()
    const w = mount(AtToaster, { attachTo: document.body })
    useToast().toast({ message: 'Pause', duration: 1000 })
    await nextTick()
    const region = document.querySelector('.at-toaster')!
    vi.advanceTimersByTime(600)
    region.dispatchEvent(new MouseEvent('mouseenter'))
    vi.advanceTimersByTime(2000); await nextTick()
    expect(document.querySelectorAll('.at-toast')).toHaveLength(1)
    region.dispatchEvent(new MouseEvent('mouseleave'))
    vi.advanceTimersByTime(399); await nextTick()
    expect(document.querySelectorAll('.at-toast')).toHaveLength(1)
    vi.advanceTimersByTime(1); await nextTick()
    expect(document.querySelectorAll('.at-toast')).toHaveLength(0)
    w.unmount()
  })
})

describe('AtList', () => {
  const items = [{ id: 'a', title: 'Alpha' }, { id: 'b', title: 'Bravo' }, { id: 'c', title: 'Charlie' }]
  it('se parcourt au clavier quand elle a le focus, Entrée ouvre', async () => {
    const w = mount(AtList, { props: { items, rowKey: 'id', active: null, label: 'Idées', 'onUpdate:active': (v: string | null) => w.setProps({ active: v }) } as any })
    const list = w.find('[role="listbox"]')
    await list.trigger('keydown', { key: 'j' })
    expect(w.props('active')).toBe('a')
    await list.trigger('keydown', { key: 'ArrowDown' }); await list.trigger('keydown', { key: 'ArrowDown' }); await list.trigger('keydown', { key: 'ArrowDown' })
    expect(w.props('active')).toBe('c')
    await list.trigger('keydown', { key: 'k' })
    expect(list.attributes('aria-activedescendant')).toBe(w.findAll('[role="option"]')[1].attributes('id'))
    await list.trigger('keydown', { key: 'Enter' })
    expect(w.emitted('open')?.[0]).toEqual([items[1]])
  })
  it('clic sélectionne, double-clic ouvre, élément actif absent sans erreur', async () => {
    const w = mount(AtList, { props: { items, rowKey: (i: any) => i.id, active: 'zz' } as any })
    expect(w.find('[role="listbox"]').attributes('aria-activedescendant')).toBeUndefined()
    await w.findAll('[role="option"]')[2].trigger('click')
    expect(w.emitted('update:active')?.[0]).toEqual(['c'])
    await w.findAll('[role="option"]')[0].trigger('dblclick')
    expect(w.emitted('open')?.[0]).toEqual([items[0]])
  })
  it('en mode global, J et Entrée marchent depuis la page', async () => {
    const changes: (string | null)[] = []
    const w = mount(AtList, { props: { items, rowKey: 'id', global: true, active: null, 'onUpdate:active': (v: string | null) => { changes.push(v); w.setProps({ active: v }) } } as any, attachTo: document.body })
    key('j'); await nextTick(); key('j'); await nextTick()
    expect(w.props('active')).toBe('b')
    key('Enter')
    expect(w.emitted('open')?.[0]).toEqual([items[1]])
    w.unmount()
    key('j')
    expect(changes).toEqual(['a', 'b'])
  })
  it('affiche le slot vide', () => {
    const w = mount(AtList, { props: { items: [], rowKey: 'id' } as any, slots: { empty: 'Inbox vide' } })
    expect(w.find('.at-list__empty').text()).toBe('Inbox vide')
  })
})

describe('AtPropertyList.edit', () => {
  const schema: Property[] = [
    { key: 'title', name: 'Nom', type: 'title' },
    { key: 'note', name: 'Note', type: 'text' },
    { key: 'calc', name: 'Calcul', type: 'number', compute: () => 1 },
    { key: 'ok', name: 'Fait', type: 'checkbox' }
  ]
  it('ouvre l’éditeur du champ, ignore lecture seule et inconnu', async () => {
    const w = mount(AtPropertyList, { props: { schema, row: { title: 'x', note: 'n', ok: false } }, attachTo: document.body })
    ;(w.vm as any).edit('calc'); (w.vm as any).edit('absent'); await nextTick()
    expect(document.querySelector('.at-pop')).toBeNull()
    ;(w.vm as any).edit('ok')
    expect(w.emitted('update')?.[0]).toEqual(['ok', true])
    ;(w.vm as any).edit('note'); await nextTick(); await nextTick()
    expect(document.querySelector('.at-pop input')).not.toBeNull()
    w.unmount()
  })
})

describe('AtDataView : moi et vue verrouillée', () => {
  const schema: Property[] = [
    { key: 'title', name: 'Nom', type: 'title' },
    { key: 'assignee', name: 'Assigné à', type: 'person', options: [{ value: 'u1', label: 'Alice' }, { value: 'u2', label: 'Bruno' }] }
  ]
  const rows = [{ id: 1, title: 'Un', assignee: 'u1' }, { id: 2, title: 'Deux', assignee: 'u2' }]
  const views = () => [createView('Mes tâches', 'list', { id: 'mine', locked: true, filters: [filter('assignee', 'is', ME)] }), createView('Tout')]

  it('filtre sur l’utilisateur du contexte et crée avec lui', async () => {
    const w = mount(AtDataView, { props: { rows, schema, views: views(), activeView: 'mine', context: { me: 'u2' } } })
    expect(w.findAll('.at-dv-li .at-pv-title').map(l => l.text())).toEqual(['Deux'])
    expect(w.find('.at-dv-chips').text()).toContain('Moi')
    await w.find('.at-dv-newline .at-dv-new').trigger('click')
    expect(w.emitted('create')?.[0]).toEqual([{ assignee: 'u2' }])
  })
  it('vue verrouillée : filtres fixes, ni renommage ni suppression', async () => {
    const w = mount(AtDataView, { props: { rows, schema, views: views(), activeView: 'mine', context: { me: 'u1' } }, attachTo: document.body })
    expect(w.find('.at-dv-chips').text()).not.toContain('Tout effacer')
    await w.find('[aria-label="Paramètres de la vue"]').trigger('click'); await nextTick()
    const pop = document.querySelector('.at-pop')!
    expect(pop.textContent).toContain('Vue système')
    expect(pop.querySelector('input[aria-label="Nom de la vue"]')).toBeNull()
    expect(pop.textContent).not.toContain('Supprimer la vue')
    expect(pop.textContent).toContain('Dupliquer la vue')
    w.unmount()
    document.body.innerHTML = ''
    const w2 = mount(AtDataView, { props: { rows, schema, views: views(), activeView: 'mine' }, attachTo: document.body })
    await w2.find('.at-dv-chip').trigger('click'); await nextTick()
    const f = document.querySelector('.at-pop')!
    expect(f.querySelector('select')).toBeNull()
    expect(f.textContent).not.toContain('Ajouter un filtre')
    w2.unmount()
  })
  it('l’éditeur de filtre propose « Moi » en premier pour une personne', async () => {
    const v = [createView('t', 'table', { filters: [filter('assignee', 'is', '')] })]
    const w = mount(AtDataView, { props: { rows, schema, views: v, activeView: v[0].id }, attachTo: document.body })
    await w.find('[aria-label^="Filtrer"]').trigger('click'); await nextTick()
    const opts = [...document.querySelectorAll('.at-pop select[aria-label="Valeur"] option')].map(o => o.textContent)
    expect(opts).toEqual(['Choisir…', 'Moi', 'Alice', 'Bruno'])
    w.unmount()
  })
})
