<script setup lang="ts">
import { computed, ref } from 'vue'
import { today, addDays } from '@tymotheusz/atelier'
import { store, openTasks, tasksOf, progressOf, taskSchema, projectSchema, milestoneSchema, update, create, remove, reset, createOption, updateOption, deleteOption, activityOf, addComment, editComment, deleteComment, ME, PEOPLE_NAMES, PROJECT_ICONS, PROJECT_COLORS, type Coll } from './data'

const props = defineProps<{ page: string; projectId: string | null }>()
const emit = defineEmits<{ go: [page: any, id?: string | null] }>()

const project = computed(() => (props.page === 'project' ? store.projects.find(p => p.id === props.projectId) ?? null : null))
const tab = ref<'tasks' | 'milestones'>('tasks')
const pickerOpen = ref(false)

const stats = computed(() => {
  const open = openTasks.value, now = today()
  const late = open.filter(t => t.due && t.due < now)
  return [
    { label: 'Projets actifs', value: store.projects.filter(p => p.status === 'active').length, foot: `${store.projects.length} projets au total`, color: 'chart-1' },
    { label: 'Tâches ouvertes', value: open.length, foot: `${open.filter(t => t.due && t.due >= now && t.due <= addDays(now, 7)).length} à rendre cette semaine`, color: 'chart-2' },
    { label: 'En retard', value: late.length, foot: late.length ? 'Échéance dépassée' : 'Rien en retard', trend: late.length ? 'down' : undefined, color: late.length ? 'danger' : 'success' },
    { label: 'Charge restante', value: `${open.reduce((a, t) => a + (t.estimate ?? 0), 0)} h`, foot: 'Somme des estimations ouvertes', color: 'chart-4' }
  ]
})

/* Panneau de détail */
const peek = ref<{ coll: Coll; id: string } | null>(null)
const confirmDelete = ref(false)
const peekOpen = computed({ get: () => !!peekRow.value, set: v => { if (!v) { peek.value = null; confirmDelete.value = false } } })
const peekRow = computed<any>(() => (peek.value ? (store[peek.value.coll] as any[]).find(r => r.id === peek.value!.id) : null))
const peekSchema = computed<any[]>(() => (peek.value?.coll === 'tasks' ? taskSchema() : peek.value?.coll === 'projects' ? projectSchema : milestoneSchema))
const titleKey = computed(() => (peek.value?.coll === 'tasks' ? 'title' : 'name'))
const descKey = computed(() => (peek.value?.coll === 'milestones' ? 'goal' : 'desc'))
const linked = computed<any[]>(() => {
  if (!peekRow.value || peek.value?.coll === 'tasks') return []
  return peek.value?.coll === 'milestones' ? store.tasks.filter(t => t.milestoneId === peekRow.value.id) : store.milestones.filter(m => m.projectId === peekRow.value.id)
})
function open(coll: Coll, row: any) { confirmDelete.value = false; peek.value = { coll, id: row.id } }
function onCreate(coll: Coll, defaults: Record<string, unknown>) { open(coll, create(coll, defaults)) }
function del() {
  if (!confirmDelete.value) { confirmDelete.value = true; return }
  const { coll, id } = peek.value!; peek.value = null; confirmDelete.value = false
  if (coll === 'projects' && props.projectId === id) emit('go', 'projects')
  remove(coll, [id])
}
const msProgress = (id: string) => progressOf(store.tasks.filter(t => t.milestoneId === id))
const msCount = (id: string) => { const l = store.tasks.filter(t => t.milestoneId === id); return `${l.filter(t => t.status === 'done').length} / ${l.length} tâches` }
</script>

<template>
  <!-- Accueil -->
  <AtPage v-if="page === 'projects'" title="Projets" description="Vue d’ensemble des projets et de la charge en cours." wide>
    <div class="pg-stats"><AtStat v-for="s in stats" :key="s.label" v-bind="s" :value="String(s.value)" :trend="s.trend as any" :color="s.color as any" /></div>
    <AtDataView
      v-model:views="store.views.projects" v-model:active-view="store.active.projects"
      :rows="store.projects" :schema="projectSchema" new-label="Nouveau projet"
      @update="(r, k, v) => update('projects', r, k, v)" @create="d => onCreate('projects', d)"
      @open="r => open('projects', r)" @delete="rs => remove('projects', rs.map(r => r.id))"
      @create-option="(p, o) => createOption(p.key, o)" @update-option="(p, v, patch) => updateOption(p.key, v, patch)" @delete-option="(p, v) => deleteOption(p.key, v)"
    />
    <p class="at-muted" style="font-size: 12px">Données d’exemple enregistrées dans ce navigateur. <a href="#" @click.prevent="reset">Réinitialiser</a></p>
  </AtPage>

  <!-- Toutes les tâches -->
  <AtPage v-else-if="page === 'tasks'" title="Toutes les tâches" description="Les tâches de tous les projets." wide>
    <AtDataView
      v-model:views="store.views.tasks" v-model:active-view="store.active.tasks"
      :rows="store.tasks" :schema="taskSchema()" new-label="Nouvelle tâche"
      @update="(r, k, v) => update('tasks', r, k, v)" @create="d => onCreate('tasks', d)"
      @open="r => open('tasks', r)" @delete="rs => remove('tasks', rs.map(r => r.id))"
      @create-option="(p, o) => createOption(p.key, o)" @update-option="(p, v, patch) => updateOption(p.key, v, patch)" @delete-option="(p, v) => deleteOption(p.key, v)"
    />
  </AtPage>

  <!-- Projet -->
  <AtPage v-else-if="project" :key="project.id" wide>
    <template #head>
      <div class="pg-proj">
        <AtPopover v-model:open="pickerOpen">
          <template #trigger="{ toggle }">
            <button type="button" class="pg-tile-btn" aria-label="Changer l’icône et la couleur" @click="toggle">
              <AtIconTile :name="project.icon || 'folder'" :color="project.color as any" size="lg" />
            </button>
          </template>
          <div class="pg-picker">
            <span class="at-label">Icône</span>
            <div class="pg-picker-icons">
              <AtButton
                v-for="i in PROJECT_ICONS" :key="i" variant="ghost" size="sm" :icon="i" icon-only :label="i"
                :aria-pressed="(project.icon || 'folder') === i" :class="(project.icon || 'folder') === i && 'pg-picked'" @click="project.icon = i"
              />
            </div>
            <span class="at-label">Couleur</span>
            <div class="pg-picker-colors">
              <button
                v-for="c in PROJECT_COLORS" :key="c" type="button" class="pg-swatch" :style="{ background: `var(--${c})` }"
                :aria-label="c" :aria-pressed="project.color === c" @click="project.color = c"
              />
            </div>
          </div>
        </AtPopover>
        <div style="flex: 1; min-width: 0">
          <input v-model="project.name" class="pg-bare t-heading-1" placeholder="Nom du projet" aria-label="Nom du projet">
          <input v-model="project.desc" class="pg-bare at-muted" placeholder="Ajouter une description" aria-label="Description">
        </div>
        <AtButton size="sm" icon="expand" @click="open('projects', project)">Propriétés</AtButton>
      </div>
    </template>

    <div style="display: flex; align-items: center; gap: 8px"><h2 class="t-heading-3" style="margin: 0">Milestones</h2></div>
    <div class="pg-ms">
      <AtCard v-for="m in store.milestones.filter(x => x.projectId === project!.id)" :key="m.id" href="#" :title="m.name || 'Sans titre'" :color="project.color as any" class="pg-ms-card" @click.prevent="open('milestones', m)">
        <template #actions><AtPropertyValue :prop="milestoneSchema[1]" :row="m" /></template>
        <AtProgress :value="msProgress(m.id)" />
        <div class="pg-ms-row"><span>{{ msCount(m.id) }}</span><AtPropertyValue :prop="milestoneSchema[2]" :row="m" /></div>
      </AtCard>
    </div>

    <AtTabs v-model="tab" label="Contenu du projet" :items="[{ value: 'tasks', label: 'Tâches', count: tasksOf(project.id).length }, { value: 'milestones', label: 'Milestones', count: store.milestones.filter(m => m.projectId === project!.id).length }]" />
    <AtDataView
      v-if="tab === 'tasks'" :key="'t' + project.id"
      v-model:views="store.views.projectTasks" v-model:active-view="store.active.projectTasks"
      :rows="tasksOf(project.id)" :schema="taskSchema(project.id)" new-label="Nouvelle tâche"
      @update="(r, k, v) => update('tasks', r, k, v)" @create="d => onCreate('tasks', { projectId: project!.id, ...d })"
      @open="r => open('tasks', r)" @delete="rs => remove('tasks', rs.map(r => r.id))"
      @create-option="(p, o) => createOption(p.key, o)" @update-option="(p, v, patch) => updateOption(p.key, v, patch)" @delete-option="(p, v) => deleteOption(p.key, v)"
    />
    <AtDataView
      v-else :key="'m' + project.id"
      v-model:views="store.views.milestones" v-model:active-view="store.active.milestones"
      :rows="store.milestones.filter(m => m.projectId === project!.id)" :schema="milestoneSchema" new-label="Nouvelle milestone"
      @update="(r, k, v) => update('milestones', r, k, v)" @create="d => onCreate('milestones', { projectId: project!.id, ...d })"
      @open="r => open('milestones', r)" @delete="rs => remove('milestones', rs.map(r => r.id))"
    />
  </AtPage>

  <AtDrawer v-model:open="peekOpen" :label="peek?.coll === 'tasks' ? 'Tâche' : peek?.coll === 'projects' ? 'Projet' : 'Milestone'">
    <template #actions>
      <AtButton v-if="peek?.coll === 'projects'" size="sm" icon="expand" @click="emit('go', 'project', peekRow.id); peek = null">Ouvrir la page</AtButton>
      <AtButton v-if="!confirmDelete" variant="ghost" size="sm" icon="trash" icon-only label="Supprimer" @click="del" />
      <AtButton v-else variant="danger" size="sm" @click="del">Confirmer la suppression</AtButton>
    </template>
    <template v-if="peekRow">
      <textarea v-model="peekRow[titleKey]" class="at-title-input" rows="1" placeholder="Sans titre" aria-label="Titre" />
      <AtPropertyList
        :schema="peekSchema" :row="peekRow" @update="(k, v) => update(peek!.coll, peekRow, k, v)"
        @create-option="createOption" @update-option="updateOption" @delete-option="deleteOption"
      />
      <div class="at-divider" />
      <label class="at-label" for="pg-desc">{{ peek?.coll === 'milestones' ? 'Objectif' : 'Description' }}</label>
      <textarea id="pg-desc" v-model="peekRow[descKey]" class="at-bare-textarea" placeholder="Ajouter quelques lignes…" />
      <template v-if="peek?.coll === 'tasks'">
        <div class="at-divider" />
        <AtComments
          :items="activityOf(peekRow.id)" :me="ME" :people="PEOPLE_NAMES"
          @post="t => addComment(peekRow.id, t)" @edit="(c, t) => editComment(c.id, t)" @delete="c => deleteComment(c.id)"
        />
      </template>
      <template v-if="peek?.coll !== 'tasks'">
        <span class="at-label">{{ peek?.coll === 'milestones' ? 'Tâches liées' : 'Milestones' }} · {{ linked.length }}</span>
        <div v-if="linked.length" class="at-linked">
          <button v-for="r in linked" :key="r.id" type="button" class="at-dv-li" @click="open(peek!.coll === 'milestones' ? 'tasks' : 'milestones', r)">
            <span class="at-pv-title">{{ r.title ?? r.name ?? 'Sans titre' }}</span>
          </button>
        </div>
      </template>
    </template>
  </AtDrawer>
</template>

<style>
.pg-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: var(--space-4); }
.pg-proj { display: flex; gap: var(--space-4); align-items: flex-start; }
.pg-tile-btn { display: block; align-self: center; padding: 0; background: none; border: 0; border-radius: var(--radius-xl); cursor: pointer; transition: transform var(--duration-fast) var(--ease-out); }
.pg-tile-btn:hover { transform: scale(1.05); }
.pg-tile-btn:focus-visible { outline: none; box-shadow: 0 0 0 2px var(--focus); }
.pg-picker { display: flex; flex-direction: column; gap: var(--space-2); padding: var(--space-3); width: 248px; background: var(--surface-raised); border-radius: var(--radius-lg); box-shadow: var(--shadow-md); }
.pg-picker-icons { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; }
.pg-picker .pg-picked { background: var(--surface-active); color: var(--ink); }
.pg-picker-colors { display: flex; gap: var(--space-2); }
.pg-swatch { width: 24px; height: 24px; padding: 0; border: 0; border-radius: var(--radius-sm); cursor: pointer; }
.pg-swatch[aria-pressed="true"] { box-shadow: 0 0 0 2px var(--surface-raised), 0 0 0 4px var(--ink); }
.pg-swatch:focus-visible { outline: none; box-shadow: 0 0 0 2px var(--surface-raised), 0 0 0 4px var(--focus); }
.pg-ms-card { padding: 16px; gap: 12px; }
.pg-bare { display: block; width: 100%; font-family: inherit; background: none; border: 0; padding: 2px 4px; margin-left: -4px; color: var(--ink); border-radius: var(--radius-sm); outline: none; }
.pg-bare:hover { background: var(--surface-hover); }
.pg-bare:focus-visible { box-shadow: 0 0 0 2px var(--focus); }
.pg-bare.at-muted { color: var(--ink-muted); font-size: 14px; }
.pg-ms { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: var(--space-3); }
.pg-ms-row { display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: var(--ink-muted); }
</style>
