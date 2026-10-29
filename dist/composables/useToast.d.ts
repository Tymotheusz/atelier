export type ToastTone = 'neutral' | 'success' | 'danger' | 'warning' | 'info';
export interface ToastOptions {
    message: string;
    tone?: ToastTone;
    /** Action button; clicking it runs `onClick` then closes the toast. */
    action?: {
        label: string;
        onClick: () => void;
    };
    /** Milliseconds before closing, 5000 by default; 0 keeps the toast until closed. */
    duration?: number;
}
export interface ToastItem {
    id: number;
    message: string;
    tone: ToastTone;
    action?: {
        label: string;
        onClick: () => void;
    };
    duration: number;
}
/** Toasts shown at once; the next ones wait in the queue (their timer starts when they show). */
export declare const TOAST_VISIBLE = 3;
declare function toast(opts: ToastOptions): number;
/** Closes one toast, or all of them without an id. */
declare function dismiss(id?: number): void;
/** Suspends every running timer (hover or focus on the toaster). */
declare function pauseToasts(): void;
declare function resumeToasts(): void;
/** Runs a toast's action, then closes it. */
declare function runAction(id: number): void;
/** Shared toast queue: works inside and outside components. Mount `AtToaster` once to display it. */
export declare function useToast(): {
    toast: typeof toast;
    dismiss: typeof dismiss;
};
/** Internal state for AtToaster. */
export declare const toastState: {
    items: readonly ToastItem[];
    pause: typeof pauseToasts;
    resume: typeof resumeToasts;
    runAction: typeof runAction;
    dismiss: typeof dismiss;
};
export {};
