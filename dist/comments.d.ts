/** Logique pure du fil de commentaires : dates relatives et mentions. */
/** « à l'instant », « il y a 5 min », « il y a 2 h », « hier à 16:40 », « 12 oct. à 9:05 », « 12 oct. 2025 ». */
export declare function formatRelative(iso: string, now?: Date): string;
export interface TextPart {
    text: string;
    mention?: boolean;
}
/** Découpe un texte autour des mentions `@Prénom` des personnes connues (la plus longue d'abord). */
export declare function splitMentions(text: string, people: string[]): TextPart[];
/** Mention en cours de saisie juste avant le curseur : `@Ch|` → `{ start, query: 'Ch' }`. */
export declare function mentionAt(text: string, caret: number): {
    start: number;
    query: string;
} | null;
