import { computed, ref } from 'vue'

/**
 * Routeur de hash minimal, partagé par les deux apps du playground.
 * `#/doc/...` → la documentation du design system, `#/demo/...` → l'app d'exemple.
 */
export type AppId = 'doc' | 'demo'

const DEFAULT = 'doc'
const clean = (h: string) => h.replace(/^#\/?/, '').replace(/\/+$/, '')

export const path = ref(clean(location.hash) || DEFAULT)
export const segments = computed(() => path.value.split('/'))
export const app = computed<AppId>(() => (segments.value[0] === 'demo' ? 'demo' : 'doc'))
/** Chemin interne à l'app courante, sans son préfixe. */
export const sub = computed(() => segments.value.slice(1).join('/'))

export function go(to: string) {
  const next = clean(to)
  if (next === path.value) return
  location.hash = '#/' + next
}

export function href(to: string) {
  return '#/' + clean(to)
}

addEventListener('hashchange', () => { path.value = clean(location.hash) || DEFAULT })
