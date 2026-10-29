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
    when?: () => boolean;
    /** Also fires while the focus is in a text field. */
    allowInInput?: boolean;
}
export interface ParsedShortcut {
    key: string;
    mod: boolean;
    ctrl: boolean;
    meta: boolean;
    alt: boolean;
    shift: boolean;
}
/** Selector of the open layers that suspend shortcuts. */
export declare const SHORTCUT_LAYERS = ".at-pop, [aria-modal=\"true\"]";
export declare const isApple: () => boolean;
export declare function parseShortcut(combo: string): ParsedShortcut;
/** Whether a keyboard event matches a parsed shortcut. */
export declare function matchShortcut(e: KeyboardEvent, s: ParsedShortcut, apple?: boolean): boolean;
/** Human label of a shortcut, for AtKbd: `'mod+enter'` → `'⌘↵'` (Apple) or `'Ctrl ↵'`. */
export declare function formatShortcut(combo: string, apple?: boolean): string;
/**
 * Registers a keyboard shortcut for the lifetime of the calling component (removed in `onBeforeUnmount`).
 * Outside a component, call the returned function to remove it.
 */
export declare function useShortcut(keys: string | string[], handler: (e: KeyboardEvent) => void, opts?: ShortcutOptions): () => void;
