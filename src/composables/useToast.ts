import { reactive, readonly } from 'vue'

export type ToastTone = 'neutral' | 'success' | 'danger' | 'warning' | 'info'

export interface ToastOptions {
  message: string
  tone?: ToastTone
  /** Action button; clicking it runs `onClick` then closes the toast. */
  action?: { label: string; onClick: () => void }
  /** Milliseconds before closing, 5000 by default; 0 keeps the toast until closed. */
  duration?: number
}

export interface ToastItem {
  id: number
  message: string
  tone: ToastTone
  action?: { label: string; onClick: () => void }
  duration: number
}

/** Toasts shown at once; the next ones wait in the queue (their timer starts when they show). */
export const TOAST_VISIBLE = 3

interface Timer { handle: ReturnType<typeof setTimeout> | null; remaining: number; started: number }

const items = reactive<ToastItem[]>([])
const timers = new Map<number, Timer>()
let seq = 0
let paused = false

function arm(id: number) {
  const t = timers.get(id)
  if (!t || t.handle || paused) return
  t.started = Date.now()
  t.handle = setTimeout(() => dismiss(id), t.remaining)
}

/** Starts the timers of the visible toasts (queue order). */
function sync() {
  items.slice(0, TOAST_VISIBLE).forEach(t => arm(t.id))
}

function toast(opts: ToastOptions): number {
  const id = ++seq
  const duration = opts.duration ?? 5000
  items.push({ id, message: opts.message, tone: opts.tone ?? 'neutral', action: opts.action, duration })
  if (duration > 0) timers.set(id, { handle: null, remaining: duration, started: 0 })
  sync()
  return id
}

/** Closes one toast, or all of them without an id. */
function dismiss(id?: number) {
  const ids = id == null ? items.map(t => t.id) : [id]
  for (const i of ids) {
    const t = timers.get(i)
    if (t?.handle) clearTimeout(t.handle)
    timers.delete(i)
    const k = items.findIndex(x => x.id === i)
    if (k >= 0) items.splice(k, 1)
  }
  sync()
}

/** Suspends every running timer (hover or focus on the toaster). */
function pauseToasts() {
  if (paused) return
  paused = true
  for (const t of timers.values()) {
    if (!t.handle) continue
    clearTimeout(t.handle); t.handle = null
    t.remaining = Math.max(0, t.remaining - (Date.now() - t.started))
  }
}
function resumeToasts() {
  if (!paused) return
  paused = false
  sync()
}

/** Runs a toast's action, then closes it. */
function runAction(id: number) {
  const t = items.find(x => x.id === id)
  dismiss(id)
  t?.action?.onClick()
}

/** Shared toast queue: works inside and outside components. Mount `AtToaster` once to display it. */
export function useToast() {
  return { toast, dismiss }
}

/** Internal state for AtToaster. */
export const toastState = { items: readonly(items) as readonly ToastItem[], pause: pauseToasts, resume: resumeToasts, runAction, dismiss }
