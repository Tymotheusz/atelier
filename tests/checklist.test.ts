import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { AtChecklist, AtStreak, AtTimer, formatDuration, type ChecklistItem, type ChecklistGroup } from '../src'
import { collapsedIds, nextTodo, orderChecklist } from '../src/checklist'

const groups: ChecklistGroup[] = [
  { id: 'collecter', label: 'Collecter', hint: 'Tout part dans l’inbox.' },
  { id: 'planifier', label: 'Planifier' }
]
const items: ChecklistItem[] = [
  { id: 'agenda', title: 'Agenda', group: 'planifier', state: 'todo' },
  { id: 'pro', title: 'Mail pro', group: 'collecter', state: 'done', href: 'https://mail.example' },
  { id: 'libre', title: 'Lecture', state: 'todo' },
  { id: 'perso', title: 'Mail perso', group: 'collecter', state: 'skipped' },
  { id: 'teams', title: 'Teams', group: 'collecter', state: 'todo', href: 'https://teams.example', note: 'Canaux d’équipe.\nUne demande = une idée.' }
]

describe('formatDuration', () => {
  it('écrit m:ss, puis h:mm:ss au-delà d’une heure', () => {
    expect(formatDuration(0)).toBe('0:00')
    expect(formatDuration(42)).toBe('0:42')
    expect(formatDuration(60)).toBe('1:00')
    expect(formatDuration(605.9)).toBe('10:05')
    expect(formatDuration(3600)).toBe('1:00:00')
    expect(formatDuration(3725)).toBe('1:02:05')
  })
  it('ramène un négatif ou une valeur invalide à zéro', () => {
    expect(formatDuration(-12)).toBe('0:00')
    expect(formatDuration(Number.NaN)).toBe('0:00')
  })
})

describe('logique de checklist', () => {
  it('ordonne par groupe puis par ordre du tableau, sans groupe à la fin', () => {
    expect(orderChecklist(items, groups).map(i => i.id)).toEqual(['pro', 'perso', 'teams', 'agenda', 'libre'])
    expect(orderChecklist(items).map(i => i.id)).toEqual(items.map(i => i.id))
  })
  it('trouve la prochaine étape à faire, puis reboucle', () => {
    const ordered = orderChecklist(items, groups)
    expect(nextTodo(ordered, 'teams')).toBe('agenda')
    expect(nextTodo(ordered, 'libre')).toBe('teams')
    expect(nextTodo(ordered.map(i => ({ ...i, state: 'done' as const })), 'pro')).toBeNull()
  })
  it('replie les étapes faites avant l’étape courante, sauf les N dernières', () => {
    const ordered = orderChecklist(items, groups)
    expect([...collapsedIds(ordered, 'teams', 1)]).toEqual(['pro'])
    expect([...collapsedIds(ordered, 'teams', 0)]).toEqual(['pro', 'perso'])
    expect(collapsedIds(ordered, 'teams', undefined).size).toBe(0)
  })
})

describe('AtChecklist', () => {
  it('numérote en continu, pose les intertitres et aria-current', () => {
    const w = mount(AtChecklist, { props: { items, groups, current: 'teams' } })
    expect(w.findAll('.at-checklist__num').map(n => n.text())).toEqual(['1', '2', '3', '4', '5'])
    expect(w.findAll('.at-checklist__group-label').map(n => n.text())).toEqual(['Collecter', 'Planifier'])
    const cur = w.find('[aria-current="step"]')
    expect(cur.text()).toContain('Teams')
    expect(cur.find('.at-checklist__note').text()).toContain('Une demande')
    expect(w.find('.at-checklist__item--skipped').text()).toContain('passée')
  })
  it('émet check sans toucher aux items, et avance l’étape courante', async () => {
    const w = mount(AtChecklist, { props: { items, groups, current: 'teams' } })
    const box = w.find('[aria-current="step"] input')
    ;(box.element as HTMLInputElement).checked = true
    await box.trigger('change')
    expect(w.emitted('check')).toEqual([['teams', 'done']])
    expect(w.emitted('update:current')).toEqual([['agenda']])
    expect((box.element as HTMLInputElement).checked).toBe(false)
    expect(items.find(i => i.id === 'teams')!.state).toBe('todo')
    expect(w.find('[aria-live]').text()).toBe('3 sur 5')
  })
  it('replie les étapes faites derrière une ligne cliquable', async () => {
    const w = mount(AtChecklist, { props: { items, groups, current: 'teams', collapseDone: 1 } })
    expect(w.find('.at-checklist__more-btn').text()).toContain('1 faite masquée')
    expect(w.text()).not.toContain('Mail pro')
    await w.find('.at-checklist__more-btn').trigger('click')
    expect(w.text()).toContain('Mail pro')
  })
  it('se pilote au clavier quand keyboard est actif', async () => {
    const w = mount(AtChecklist, {
      props: { items, groups, current: 'teams', keyboard: true, 'onUpdate:current': (id: string | null) => w.setProps({ current: id }) },
      attachTo: document.body
    })
    const last = (name: string) => { const all = w.emitted(name)!; return all[all.length - 1] }
    const key = (k: string, init: KeyboardEventInit = {}) => document.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true, cancelable: true, ...init }))
    key('Enter')
    expect(w.emitted('open')![0]).toEqual([items[4]])
    key('j')
    expect(last('update:current')).toEqual(['agenda'])
    await nextTick()
    key('k')
    expect(last('update:current')).toEqual(['teams'])
    await nextTick()
    key('s')
    expect(last('check')).toEqual(['teams', 'skipped'])
    expect(last('update:current')).toEqual(['agenda'])
    await nextTick()
    key(' ')
    expect(last('check')).toEqual(['agenda', 'done'])
    const n = w.emitted('update:current')!.length
    key('j', { ctrlKey: true })
    expect(w.emitted('update:current')).toHaveLength(n)
    const emitted = w.emitted('update:current')!
    w.unmount()
    key('j')
    expect(emitted).toHaveLength(n)
  })
  it('avance aussi quand le parent coche l’étape courante (bouton « Fait » du slot)', async () => {
    const w = mount(AtChecklist, { props: { items, groups, current: 'teams' } })
    await w.setProps({ items: items.map(i => (i.id === 'teams' ? { ...i, state: 'done' as const } : i)) })
    expect(w.emitted('update:current')).toEqual([['agenda']])
    // Choosing a done step is not a check: it stays current
    await w.setProps({ current: 'pro' })
    expect(w.emitted('update:current')).toHaveLength(1)
  })
  it('garde Espace pour l’étape courante quand le focus est sur un titre', async () => {
    const w = mount(AtChecklist, { props: { items, groups, current: 'teams', keyboard: true }, attachTo: document.body })
    const title = w.find('[aria-current="step"] .at-checklist__title').element as HTMLElement
    title.focus()
    title.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true, cancelable: true }))
    expect(w.emitted('check')).toEqual([['teams', 'done']])
    w.unmount()
  })
  it('affiche le contenu vide', () => {
    expect(mount(AtChecklist, { props: { items: [] } }).text()).toContain('Aucune étape')
  })
})

describe('AtTimer', () => {
  it('affiche le temps prévu, le dépassement et la pause', async () => {
    const w = mount(AtTimer, { props: { seconds: 42, target: 60 } })
    expect(w.text()).toBe('0:42 / 1:00')
    await w.setProps({ seconds: 100 })
    expect(w.text()).toBe('+0:40')
    expect(w.classes()).toContain('at-timer--over')
    await w.setProps({ paused: true })
    expect(w.text()).toBe('En pause · 1:40')
    expect(w.attributes('aria-pressed')).toBe('true')
    await w.setProps({ target: null, paused: false })
    expect(w.text()).toBe('1:40')
    await w.trigger('click')
    expect(w.emitted('toggle')).toHaveLength(1)
  })
})

describe('AtStreak', () => {
  it('pose un bouton par jour avec son niveau, et émet select', async () => {
    const w = mount(AtStreak, {
      props: { days: [{ date: '2026-11-01', level: 0 }, { date: '2026-11-02', level: 1, label: 'lundi 2' }, { date: '2026-11-03', level: 2 }], summary: '2 matins sur 3' }
    })
    const days = w.findAll('.at-streak__day')
    expect(days).toHaveLength(3)
    expect(days[1].attributes('aria-label')).toBe('lundi 2 : Commencée')
    expect(days[2].classes()).toContain('at-streak__day--2')
    expect(w.text()).toContain('2 matins sur 3')
    await days[2].trigger('click')
    expect(w.emitted('select')).toEqual([['2026-11-03']])
  })
})
