import { getCurrentInstance, onBeforeUnmount } from 'vue'

/**
 * Keyboard shortcuts at document level.
 *
 * Key syntax: lowercase `e.key` values joined with `+` modifiers, e.g. `'c'`, `'arrowdown'`, `'mod+enter'`, `'#'`.
 * `mod` is ⌘ on Apple platforms and Ctrl elsewhere; `ctrl`, `meta`, `alt` and `shift` are also accepted.
 *
 * Shortcuts are ignored:
 * - while the focus is in an input, textarea, select or contenteditable, unless `allowInInput`;
 * - while an Atelier layer is open (`.at-pop` popover/menu, or an `[aria-modal="true"]` modal or drawer),
 *   except an `allowInInput` shortcut typed in a field inside that layer (e.g. ⌘↵ in a modal form);
 * - Enter or Space without Ctrl/⌘ while the focus is on a button, link or other activable control (it keeps its click);
 * - when the event was already handled (`defaultPrevented`) or during IME composition.
 *
 * When several handlers match, the last registered wins (stack). The handler's event gets `preventDefault()`.
 */

export interface ShortcutOptions {
  /** Shortcut active only while this returns true; otherwise the next handler in the stack gets a chance. */
  when?: () => boolean
  /** Also fires while the focus is in a text field. */
  allowInInput?: boolean
}

export interface ParsedShortcut { key: string; mod: boolean; ctrl: boolean; meta: boolean; alt: boolean; shift: boolean }

interface Entry { combos: ParsedShortcut[]; handler: (e: KeyboardEvent) => void; opts: ShortcutOptions }

/** Selector of the open layers that suspend shortcuts. */
export const SHORTCUT_LAYERS = '.at-pop, [aria-modal="true"]'

const ALIASES: Record<string, string> = { esc: 'escape', space: ' ', del: 'delete', up: 'arrowup', down: 'arrowdown', left: 'arrowleft', right: 'arrowright', return: 'enter' }

export const isApple = () => typeof navigator !== 'undefined' && /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || '')

export function parseShortcut(combo: string): ParsedShortcut {
  const parts = combo.toLowerCase().split('+')
  // 'mod++' or '+' : a trailing empty part means the key itself is '+'
  let key = parts.pop() ?? ''
  if (key === '' && parts.length) { parts.pop(); key = '+' }
  const p: ParsedShortcut = { key: ALIASES[key] ?? key, mod: false, ctrl: false, meta: false, alt: false, shift: false }
  for (const m of parts) {
    if (m === 'mod' || m === 'ctrl' || m === 'meta' || m === 'alt' || m === 'shift') p[m] = true
    else if (m === 'cmd') p.meta = true
    else if (m === 'option') p.alt = true
  }
  return p
}

/** Whether a keyboard event matches a parsed shortcut. */
export function matchShortcut(e: KeyboardEvent, s: ParsedShortcut, apple = isApple()): boolean {
  const key = (e.key ?? '').toLowerCase()
  if (key !== s.key) return false
  const wantCtrl = s.ctrl || (s.mod && !apple)
  const wantMeta = s.meta || (s.mod && apple)
  // A printable character is compared as typed: Alt / AltGr (Ctrl+Alt on Windows) may be needed to produce '#'.
  const char = s.key.length === 1
  const altGraph = char && !!e.getModifierState?.('AltGraph')
  const ctrl = altGraph ? false : e.ctrlKey
  if (ctrl !== wantCtrl || e.metaKey !== wantMeta) return false
  if (s.alt ? !e.altKey : e.altKey && !char) return false
  // Shift is part of the character for printable keys ('#', 'C'); for named keys it must match.
  if (s.shift) return e.shiftKey
  return s.key.length === 1 || !e.shiftKey
}

/** Human label of a shortcut, for AtKbd: `'mod+enter'` → `'⌘↵'` (Apple) or `'Ctrl ↵'`. */
export function formatShortcut(combo: string, apple = isApple()): string {
  const s = parseShortcut(combo)
  const NAMES: Record<string, string> = {
    enter: '↵', escape: 'Échap', arrowdown: '↓', arrowup: '↑', arrowleft: '←', arrowright: '→',
    backspace: '⌫', delete: 'Suppr', ' ': 'Espace', tab: 'Tab'
  }
  const k = NAMES[s.key] ?? s.key.toUpperCase()
  const mods: string[] = []
  if (s.ctrl || (s.mod && !apple)) mods.push(apple ? '⌃' : 'Ctrl')
  if (s.alt) mods.push(apple ? '⌥' : 'Alt')
  if (s.shift) mods.push(apple ? '⇧' : 'Maj')
  if (s.meta || (s.mod && apple)) mods.push('⌘')
  return apple ? mods.join('') + k : [...mods, k].join(' ')
}

const isField = (t: EventTarget | null) => {
  const el = t as HTMLElement | null
  if (!el || !el.tagName) return false
  return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable || el.closest?.('[contenteditable=""], [contenteditable="true"]') != null
}

const ACTIVABLE = 'button, a[href], summary, [role="button"], [role="link"], [role="menuitem"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="tab"], [role="checkbox"], [role="switch"], [role="option"]'
/** Enter / Space on a focused control activates it: shortcuts leave it alone. */
const activates = (e: KeyboardEvent, t: HTMLElement | null) =>
  (e.key === 'Enter' || e.key === ' ') && !e.ctrlKey && !e.metaKey && !!t?.closest?.(ACTIVABLE)

const stack: Entry[] = []
let listening = false

function onKeydown(e: KeyboardEvent) {
  if (e.defaultPrevented || e.isComposing) return
  const target = (e.target as HTMLElement | null)
  const inField = isField(target)
  const layerOpen = typeof document !== 'undefined' && document.querySelector(SHORTCUT_LAYERS) != null
  const inLayer = !!target?.closest?.(SHORTCUT_LAYERS)
  if (activates(e, target)) return
  for (let i = stack.length - 1; i >= 0; i--) {
    const en = stack[i]
    if (!en.combos.some(c => matchShortcut(e, c))) continue
    if (inField && !en.opts.allowInInput) continue
    if (layerOpen && !(inField && en.opts.allowInInput && inLayer)) continue
    if (en.opts.when && !en.opts.when()) continue
    e.preventDefault()
    en.handler(e)
    return
  }
}

function sync() {
  if (typeof document === 'undefined') return
  if (stack.length && !listening) { document.addEventListener('keydown', onKeydown); listening = true }
  else if (!stack.length && listening) { document.removeEventListener('keydown', onKeydown); listening = false }
}

/**
 * Registers a keyboard shortcut for the lifetime of the calling component (removed in `onBeforeUnmount`).
 * Outside a component, call the returned function to remove it.
 */
export function useShortcut(keys: string | string[], handler: (e: KeyboardEvent) => void, opts: ShortcutOptions = {}): () => void {
  const entry: Entry = { combos: (Array.isArray(keys) ? keys : [keys]).map(parseShortcut), handler, opts }
  stack.push(entry); sync()
  const stop = () => { const i = stack.indexOf(entry); if (i >= 0) { stack.splice(i, 1); sync() } }
  if (getCurrentInstance()) onBeforeUnmount(stop)
  return stop
}
