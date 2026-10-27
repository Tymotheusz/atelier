<script setup lang="ts">
import { computed, ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import AtAvatar from './AtAvatar.vue'
import AtButton from './AtButton.vue'
import AtKbd from './AtKbd.vue'
import type { CommentItem } from '../types'
import { formatRelative, splitMentions, mentionAt } from '../comments'
import { normalize, splitMatch } from '../dataview/logic'
import { useId } from '../composables/useId'

/**
 * Fil d'activité : commentaires et changements mêlés par ordre chronologique, saisie en bas.
 * Le composant n'écrit jamais dans `items` : il émet `post`, `edit`, `delete`, l'app enregistre.
 */
const props = withDefaults(defineProps<{
  items: CommentItem[]
  /** Nom de la personne connectée : avatar de la saisie, droit de modifier ses messages. */
  me: string
  /** Personnes mentionnables avec `@`. */
  people?: string[]
  label?: string
  placeholder?: string
}>(), { people: () => [], label: 'Activité', placeholder: 'Ajouter un commentaire…' })
const emit = defineEmits<{ post: [text: string]; edit: [item: CommentItem, text: string]; delete: [item: CommentItem] }>()

const now = ref(new Date())
let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => { timer = setInterval(() => { now.value = new Date() }, 60000) })
onBeforeUnmount(() => clearInterval(timer))
const rel = (iso: string) => formatRelative(iso, now.value)
const full = (iso: string) => new Date(iso).toLocaleString('fr-FR', { dateStyle: 'long', timeStyle: 'short' })
const sorted = computed(() => [...props.items].sort((a, b) => a.at.localeCompare(b.at)))
const parts = (text: string) => splitMentions(text, props.people)
const mod = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘' : 'Ctrl'

/* ---------- Saisie ---------- */
const draft = ref('')
const area = ref<HTMLTextAreaElement>()
const listId = useId('at-mention')
const mention = ref<{ start: number; query: string } | null>(null)
const hl = ref(0)
const mentionList = computed(() => {
  const m = mention.value
  if (!m) return []
  const q = normalize(m.query)
  return props.people.filter(p => normalize(p).includes(q)).slice(0, 6)
})
function detect() {
  const el = area.value
  mention.value = el && props.people.length ? mentionAt(el.value, el.selectionStart ?? el.value.length) : null
  hl.value = 0
}
function insert(name: string) {
  const el = area.value, m = mention.value
  if (!el || !m) return
  const caret = el.selectionStart ?? draft.value.length
  const before = draft.value.slice(0, m.start) + '@' + name + ' '
  draft.value = before + draft.value.slice(caret)
  mention.value = null
  nextTick(() => { el.focus(); el.setSelectionRange(before.length, before.length) })
}
function post() {
  const t = draft.value.trim()
  if (!t) return
  emit('post', t)
  draft.value = ''; mention.value = null
}
function onKey(e: KeyboardEvent) {
  const list = mentionList.value
  if (mention.value && list.length) {
    if (e.key === 'ArrowDown') { e.preventDefault(); hl.value = (hl.value + 1) % list.length; return }
    if (e.key === 'ArrowUp') { e.preventDefault(); hl.value = (hl.value - 1 + list.length) % list.length; return }
    if ((e.key === 'Enter' && !e.metaKey && !e.ctrlKey) || e.key === 'Tab') { e.preventDefault(); insert(list[hl.value]); return }
    if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); mention.value = null; return }
  }
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); post() }
}

/* ---------- Modification d'un message ---------- */
const editing = ref<string | null>(null)
const editText = ref('')
function startEdit(c: CommentItem) {
  editing.value = c.id; editText.value = c.text
  nextTick(() => { const el = document.getElementById(`${listId}-edit`) as HTMLTextAreaElement | null; el?.focus(); el?.setSelectionRange(el.value.length, el.value.length) })
}
function saveEdit(c: CommentItem) {
  const t = editText.value.trim()
  if (t && t !== c.text) emit('edit', c, t)
  editing.value = null
}
function onEditKey(e: KeyboardEvent, c: CommentItem) {
  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); saveEdit(c) }
  else if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); editing.value = null }
}
</script>

<template>
  <section class="at-comments" :aria-label="label">
    <div v-if="label" class="at-comments__head"><span class="at-label">{{ label }}</span></div>
    <ol v-if="sorted.length" class="at-comments__list">
      <template v-for="c in sorted" :key="c.id">
        <li v-if="c.kind === 'event'" class="at-event">
          <span><b>{{ c.author }}</b> {{ c.text }} · <time :datetime="c.at" :title="full(c.at)">{{ rel(c.at) }}</time></span>
        </li>
        <li v-else class="at-comment">
          <AtAvatar :name="c.author" size="md" :tone="c.author === me ? 'accent' : 'neutral'" />
          <div class="at-comment__meta">
            <b>{{ c.author }}</b>
            <time :datetime="c.at" :title="full(c.at)">{{ rel(c.at) }}</time>
            <span v-if="c.editedAt" class="at-comment__edited" :title="full(c.editedAt)">modifié</span>
            <span v-if="c.author === me && editing !== c.id" class="at-comment__actions">
              <AtButton variant="ghost" size="sm" icon="edit" icon-only label="Modifier" @click="startEdit(c)" />
              <AtButton variant="ghost" size="sm" icon="trash" icon-only label="Supprimer" @click="emit('delete', c)" />
            </span>
          </div>
          <div v-if="editing === c.id" class="at-comment__edit">
            <textarea :id="`${listId}-edit`" v-model="editText" class="at-composer__text" rows="1" aria-label="Modifier le commentaire" @keydown="onEditKey($event, c)" />
            <div class="at-composer__foot">
              <span class="at-composer__hint"><AtKbd>{{ mod }} ↵</AtKbd> pour enregistrer</span>
              <AtButton size="sm" variant="ghost" @click="editing = null">Annuler</AtButton>
              <AtButton size="sm" variant="primary" :disabled="!editText.trim()" @click="saveEdit(c)">Enregistrer</AtButton>
            </div>
          </div>
          <p v-else class="at-comment__body"><template v-for="(p, i) in parts(c.text)" :key="i"><span v-if="p.mention" class="at-mention">{{ p.text }}</span><template v-else>{{ p.text }}</template></template></p>
        </li>
      </template>
    </ol>
    <p v-else class="at-comments__empty">Aucun commentaire pour l’instant.</p>

    <div class="at-composer">
      <AtAvatar :name="me" size="md" tone="accent" />
      <div class="at-composer__box">
        <textarea
          ref="area" v-model="draft" class="at-composer__text" rows="1" :placeholder="placeholder" aria-label="Nouveau commentaire"
          role="combobox" aria-autocomplete="list" :aria-expanded="!!mention && mentionList.length > 0" :aria-controls="listId"
          :aria-activedescendant="mention && mentionList.length ? `${listId}-${hl}` : undefined"
          @keydown="onKey" @input="detect" @click="detect" @blur="mention = null"
        />
        <div class="at-composer__foot">
          <span class="at-composer__hint"><AtKbd>{{ mod }} ↵</AtKbd> pour envoyer</span>
          <AtButton variant="primary" size="sm" :disabled="!draft.trim()" @click="post">Commenter</AtButton>
        </div>
        <div v-if="mention && mentionList.length" :id="listId" class="at-menu at-composer__mentions" role="listbox" aria-label="Mentionner">
          <div class="at-menu-label">Mentionner</div>
          <div
            v-for="(p, i) in mentionList" :id="`${listId}-${i}`" :key="p" :class="['at-menu-item', i === hl && 'is-active']" role="option"
            :aria-selected="i === hl" @mousedown.prevent="insert(p)" @mousemove="hl = i"
          >
            <AtAvatar :name="p" />
            <span>{{ splitMatch(p, mention.query)[0] }}<mark>{{ splitMatch(p, mention.query)[1] }}</mark>{{ splitMatch(p, mention.query)[2] }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
