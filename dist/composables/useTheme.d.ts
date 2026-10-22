import type { ThemeMode, Density } from '../types';
/**
 * Thème clair / sombre / système, appliqué via data-theme sur <html> et mémorisé.
 * `resolved` donne le thème réellement affiché.
 */
export declare function useTheme(): {
    mode: import("vue").Ref<ThemeMode>;
    resolved: import("vue").ComputedRef<"light" | "dark">;
    toggle: () => void;
};
/** Densité confortable / compacte, appliquée via data-density sur <html>. */
export declare function useDensity(): {
    density: import("vue").Ref<Density>;
};
