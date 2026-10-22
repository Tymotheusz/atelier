import { ref, watch, computed, onScopeDispose, getCurrentScope } from 'vue'
import type { ThemeMode, Density } from '../types'

const KEY_THEME = 'atelier:theme'
const KEY_DENSITY = 'atelier:density'
const read = (k: string) => { try { return localStorage.getItem(k) } catch { return null } }
const write = (k: string, v: string) => { try { localStorage.setItem(k, v) } catch { /* stockage indisponible */ } }
const root = () => (typeof document !== 'undefined' ? document.documentElement : null)

const mode = ref<ThemeMode>((read(KEY_THEME) as ThemeMode) || 'system')
const density = ref<Density>((read(KEY_DENSITY) as Density) || 'comfortable')
const systemDark = ref(typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches)
let started = false

function start() {
  if (started || typeof window === 'undefined') return
  started = true
  const mq = matchMedia('(prefers-color-scheme: dark)')
  mq.addEventListener('change', e => { systemDark.value = e.matches })
  watch(mode, m => {
    const r = root(); if (!r) return
    if (m === 'system') r.removeAttribute('data-theme'); else r.dataset.theme = m
    write(KEY_THEME, m)
  }, { immediate: true })
  watch(density, d => {
    const r = root(); if (!r) return
    r.dataset.density = d
    write(KEY_DENSITY, d)
  }, { immediate: true })
}

/**
 * Thème clair / sombre / système, appliqué via data-theme sur <html> et mémorisé.
 * `resolved` donne le thème réellement affiché.
 */
export function useTheme() {
  start()
  const resolved = computed<'light' | 'dark'>(() => mode.value === 'system' ? (systemDark.value ? 'dark' : 'light') : mode.value)
  const toggle = () => { mode.value = resolved.value === 'dark' ? 'light' : 'dark' }
  if (getCurrentScope()) onScopeDispose(() => {})
  return { mode, resolved, toggle }
}

/** Densité confortable / compacte, appliquée via data-density sur <html>. */
export function useDensity() {
  start()
  return { density }
}
