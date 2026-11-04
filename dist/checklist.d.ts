/**
 * Pure logic of AtChecklist and AtTimer: ordering of the steps, next step, hidden steps, durations.
 * No Vue here, so it is tested on its own (tests/checklist.test.ts).
 */
/** État d'une étape de checklist. */
export type ChecklistState = 'todo' | 'done' | 'skipped';
/** Étape d'une checklist (`AtChecklist`). */
export interface ChecklistItem {
    id: string;
    title: string;
    /** Lien de l'étape : affiche le bouton « Ouvrir », et Entrée émet `open`. */
    href?: string | null;
    /** Texte simple affiché sous l'étape courante (retours à la ligne gardés). */
    note?: string;
    /** Identifiant du groupe (`ChecklistGroup.id`). */
    group?: string | null;
    state: ChecklistState;
}
/** Intertitre d'une checklist : regroupe les étapes dont `group` vaut `id`. */
export interface ChecklistGroup {
    id: string;
    label: string;
    hint?: string;
}
/**
 * Steps in display order: groups in the order of `groups`, the items of each group in array order,
 * then the items without a known group. Without `groups`, the array order.
 */
export declare function orderChecklist(items: ChecklistItem[], groups?: ChecklistGroup[] | null): ChecklistItem[];
/**
 * Step that becomes current once `fromId` is no longer to do: the next `todo` after it,
 * otherwise the first `todo` of the list, otherwise null. `fromId` itself is never returned.
 */
export declare function nextTodo(ordered: ChecklistItem[], fromId: string | null): string | null;
/**
 * Ids of the steps folded away by `collapseDone`: the done or skipped steps placed before the current one
 * (before the end of the list if there is none), except the `keep` last of them.
 */
export declare function collapsedIds(ordered: ChecklistItem[], current: string | null | undefined, keep: number | null | undefined): Set<string>;
/** Durée lisible : `m:ss`, `h:mm:ss` au-delà d'une heure ; négatif ou invalide → `0:00`. */
export declare function formatDuration(seconds: number): string;
