// Généré depuis tokens/tokens.json par scripts/build-tokens.mjs. Ne pas éditer à la main.
export const tokens = {
  "name": "Atelier",
  "version": 1,
  "color": {
    "themes": [
      {
        "id": "light",
        "name": "Clair"
      },
      {
        "id": "dark",
        "name": "Sombre"
      }
    ],
    "tokens": [
      {
        "name": "bg",
        "value": {
          "light": "#fbfaf8",
          "dark": "#191817"
        },
        "usage": "Fond de page (sites et apps). Sol par défaut sous tout le reste."
      },
      {
        "name": "surface",
        "value": {
          "light": "#ffffff",
          "dark": "#211f1d"
        },
        "usage": "Cartes, tableaux, champs, zone de contenu d'un dashboard."
      },
      {
        "name": "surface-sunken",
        "value": {
          "light": "#f5f4f1",
          "dark": "#1d1c1a"
        },
        "usage": "Sidebar, barres d'outils, en-têtes de tableau, fond des contrôles segmentés."
      },
      {
        "name": "surface-raised",
        "value": {
          "light": "#ffffff",
          "dark": "#2a2826"
        },
        "usage": "Menus, popovers, modales, toasts (toujours avec shadow-md ou shadow-lg)."
      },
      {
        "name": "surface-hover",
        "value": {
          "light": "#efeeea",
          "dark": "#2e2c29"
        },
        "usage": "Survol des éléments neutres : items de menu, lignes de tableau, boutons ghost, items de nav."
      },
      {
        "name": "surface-active",
        "value": {
          "light": "#e8e6e1",
          "dark": "#36332f"
        },
        "usage": "Élément pressé ou item de nav sélectionné."
      },
      {
        "name": "border",
        "value": {
          "light": "#ebe9e4",
          "dark": "#302e2b"
        },
        "usage": "Séparateurs, contours de carte, grilles de tableau. Décoratif : ne porte jamais seul une information."
      },
      {
        "name": "border-strong",
        "value": {
          "light": "#dcd9d2",
          "dark": "#3f3c38"
        },
        "usage": "Contour de carte au survol, séparateurs plus marqués, bouton secondary."
      },
      {
        "name": "border-control",
        "value": {
          "light": "#8e8980",
          "dark": "#7a756d"
        },
        "usage": "Contour des champs, cases à cocher, switch éteint. ≥3:1 sur surface, bg et surface-sunken."
      },
      {
        "name": "ink",
        "value": {
          "light": "#2f2c28",
          "dark": "#ecebe7"
        },
        "usage": "Texte principal et titres, sur bg, surface, surface-sunken, surface-raised et surface-hover."
      },
      {
        "name": "ink-muted",
        "value": {
          "light": "#67635c",
          "dark": "#aaa59d"
        },
        "usage": "Texte secondaire : descriptions, en-têtes de colonne, labels de stat, icônes. Mêmes sols que ink."
      },
      {
        "name": "ink-subtle",
        "value": {
          "light": "#767168",
          "dark": "#959087"
        },
        "usage": "Placeholders, métadonnées tertiaires, raccourcis clavier. Sur bg, surface et surface-raised uniquement."
      },
      {
        "name": "ink-disabled",
        "value": {
          "light": "#b5b0a7",
          "dark": "#5a5650"
        },
        "usage": "Texte et icônes désactivés (exemptés de contraste)."
      },
      {
        "name": "accent",
        "value": {
          "light": "#4f46e5",
          "dark": "#8b8cf6"
        },
        "usage": "Action principale (bouton primary), lien, case cochée, switch actif, indicateur de sélection."
      },
      {
        "name": "accent-hover",
        "value": {
          "light": "#4338ca",
          "dark": "#a3a4f8"
        },
        "usage": "Survol de tout ce qui est en accent."
      },
      {
        "name": "accent-soft",
        "value": {
          "light": "#eef0fd",
          "dark": "#2a2950"
        },
        "usage": "Fond de sélection : ligne de tableau sélectionnée, item de menu actif, surlignage."
      },
      {
        "name": "accent-ink",
        "value": {
          "light": "#3f37c9",
          "dark": "#b8b9fb"
        },
        "usage": "Texte et liens sur accent-soft, liens dans du texte courant sur bg/surface."
      },
      {
        "name": "on-accent",
        "value": {
          "light": "#ffffff",
          "dark": "#15143a"
        },
        "usage": "Texte et icônes posés sur accent ou accent-hover."
      },
      {
        "name": "focus",
        "value": {
          "light": "#4f46e5",
          "dark": "#a3a4f8"
        },
        "usage": "Anneau de focus : outline 2px plein, offset 2px. ≥3:1 sur tous les sols."
      },
      {
        "name": "overlay",
        "value": {
          "light": "rgba(25, 23, 20, 0.40)",
          "dark": "rgba(0, 0, 0, 0.60)"
        },
        "usage": "Voile derrière une modale ou un drawer."
      },
      {
        "name": "success",
        "value": {
          "light": "#1f7a4d",
          "dark": "#62c891"
        },
        "usage": "Succès, en ligne, terminé, variation positive. Texte sur success-soft, surface et bg."
      },
      {
        "name": "success-soft",
        "value": {
          "light": "#e7f3eb",
          "dark": "#1e3328"
        },
        "usage": "Fond des badges, callouts et bandeaux « success »."
      },
      {
        "name": "warning",
        "value": {
          "light": "#94570a",
          "dark": "#e6ab52"
        },
        "usage": "Attention, en attente, quota proche. Texte sur warning-soft, surface et bg."
      },
      {
        "name": "warning-soft",
        "value": {
          "light": "#fbf0dc",
          "dark": "#3a2d18"
        },
        "usage": "Fond des badges, callouts et bandeaux « warning »."
      },
      {
        "name": "danger",
        "value": {
          "light": "#c0352b",
          "dark": "#f17f73"
        },
        "usage": "Erreur, suppression, variation négative. Texte sur danger-soft, surface et bg."
      },
      {
        "name": "danger-soft",
        "value": {
          "light": "#fbe9e7",
          "dark": "#3d2220"
        },
        "usage": "Fond des badges, callouts et bandeaux « danger »."
      },
      {
        "name": "info",
        "value": {
          "light": "#1f6aa8",
          "dark": "#74b2e8"
        },
        "usage": "Information neutre, en cours, brouillon. Texte sur info-soft, surface et bg."
      },
      {
        "name": "info-soft",
        "value": {
          "light": "#e6eff8",
          "dark": "#1c2c3b"
        },
        "usage": "Fond des badges, callouts et bandeaux « info »."
      },
      {
        "name": "on-danger",
        "value": {
          "light": "#ffffff",
          "dark": "#2a0e0b"
        },
        "usage": "Texte sur un bouton danger plein."
      },
      {
        "name": "tag-gray-bg",
        "value": {
          "light": "#efeeeb",
          "dark": "#34322f"
        },
        "usage": "Fond d'un tag « gray » (options de select, catégories, propriétés de base de données)."
      },
      {
        "name": "tag-gray-fg",
        "value": {
          "light": "#5a5650",
          "dark": "#cdc9c2"
        },
        "usage": "Texte d'un tag « gray », sur tag-gray-bg."
      },
      {
        "name": "tag-brown-bg",
        "value": {
          "light": "#f3ebe4",
          "dark": "#3b2e25"
        },
        "usage": "Fond d'un tag « brown » (options de select, catégories, propriétés de base de données)."
      },
      {
        "name": "tag-brown-fg",
        "value": {
          "light": "#7a5233",
          "dark": "#d9b99e"
        },
        "usage": "Texte d'un tag « brown », sur tag-brown-bg."
      },
      {
        "name": "tag-orange-bg",
        "value": {
          "light": "#fbebdc",
          "dark": "#43301f"
        },
        "usage": "Fond d'un tag « orange » (options de select, catégories, propriétés de base de données)."
      },
      {
        "name": "tag-orange-fg",
        "value": {
          "light": "#9e470e",
          "dark": "#f0b07a"
        },
        "usage": "Texte d'un tag « orange », sur tag-orange-bg."
      },
      {
        "name": "tag-yellow-bg",
        "value": {
          "light": "#faf2d4",
          "dark": "#3d351c"
        },
        "usage": "Fond d'un tag « yellow » (options de select, catégories, propriétés de base de données)."
      },
      {
        "name": "tag-yellow-fg",
        "value": {
          "light": "#7a5900",
          "dark": "#e8cc72"
        },
        "usage": "Texte d'un tag « yellow », sur tag-yellow-bg."
      },
      {
        "name": "tag-green-bg",
        "value": {
          "light": "#e6f2ea",
          "dark": "#233428"
        },
        "usage": "Fond d'un tag « green » (options de select, catégories, propriétés de base de données)."
      },
      {
        "name": "tag-green-fg",
        "value": {
          "light": "#2a6b43",
          "dark": "#8fd1a8"
        },
        "usage": "Texte d'un tag « green », sur tag-green-bg."
      },
      {
        "name": "tag-blue-bg",
        "value": {
          "light": "#e5eefa",
          "dark": "#1f2f42"
        },
        "usage": "Fond d'un tag « blue » (options de select, catégories, propriétés de base de données)."
      },
      {
        "name": "tag-blue-fg",
        "value": {
          "light": "#1f5f99",
          "dark": "#8fc0f0"
        },
        "usage": "Texte d'un tag « blue », sur tag-blue-bg."
      },
      {
        "name": "tag-purple-bg",
        "value": {
          "light": "#efeafb",
          "dark": "#31284a"
        },
        "usage": "Fond d'un tag « purple » (options de select, catégories, propriétés de base de données)."
      },
      {
        "name": "tag-purple-fg",
        "value": {
          "light": "#6340b0",
          "dark": "#c3aef5"
        },
        "usage": "Texte d'un tag « purple », sur tag-purple-bg."
      },
      {
        "name": "tag-pink-bg",
        "value": {
          "light": "#fbe8f1",
          "dark": "#40253a"
        },
        "usage": "Fond d'un tag « pink » (options de select, catégories, propriétés de base de données)."
      },
      {
        "name": "tag-pink-fg",
        "value": {
          "light": "#a3326c",
          "dark": "#f0a3c8"
        },
        "usage": "Texte d'un tag « pink », sur tag-pink-bg."
      },
      {
        "name": "tag-red-bg",
        "value": {
          "light": "#fce9e7",
          "dark": "#432624"
        },
        "usage": "Fond d'un tag « red » (options de select, catégories, propriétés de base de données)."
      },
      {
        "name": "tag-red-fg",
        "value": {
          "light": "#b3352a",
          "dark": "#f3a199"
        },
        "usage": "Texte d'un tag « red », sur tag-red-bg."
      },
      {
        "name": "chart-1",
        "value": {
          "light": "#4f46e5",
          "dark": "#8b8cf6"
        },
        "usage": "Série 1 des graphiques (indigo). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres »."
      },
      {
        "name": "chart-2",
        "value": {
          "light": "#0f8a8c",
          "dark": "#4fc3c5"
        },
        "usage": "Série 2 des graphiques (sarcelle). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres »."
      },
      {
        "name": "chart-3",
        "value": {
          "light": "#d1690a",
          "dark": "#f0a35a"
        },
        "usage": "Série 3 des graphiques (orange). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres »."
      },
      {
        "name": "chart-4",
        "value": {
          "light": "#c2417f",
          "dark": "#ef8fbd"
        },
        "usage": "Série 4 des graphiques (rose). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres »."
      },
      {
        "name": "chart-5",
        "value": {
          "light": "#8a7208",
          "dark": "#d9b73f"
        },
        "usage": "Série 5 des graphiques (or). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres »."
      }
    ]
  },
  "type": {
    "fonts": [
      {
        "family": "Inter",
        "file": "fonts/Inter-Variable.woff2",
        "weight": "100 900",
        "style": "normal"
      },
      {
        "family": "JetBrains Mono",
        "file": "fonts/JetBrainsMono-Variable.woff2",
        "weight": "100 800",
        "style": "normal"
      }
    ],
    "families": {
      "sans": "\"Inter\", ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", sans-serif",
      "mono": "\"JetBrains Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace"
    },
    "groups": [
      {
        "name": "Titres",
        "family": "sans",
        "styles": [
          {
            "name": "t-display",
            "fontSize": "40px",
            "lineHeight": "48px",
            "fontWeight": 650,
            "usage": "Titre de hero ou de page de site. Un seul par page.",
            "letterSpacing": "-0.022em",
            "sample": "Des outils clairs pour le quotidien"
          },
          {
            "name": "t-heading-1",
            "fontSize": "30px",
            "lineHeight": "38px",
            "fontWeight": 650,
            "usage": "Titre de page (doc, dashboard).",
            "letterSpacing": "-0.018em",
            "sample": "Tableau de bord"
          },
          {
            "name": "t-heading-2",
            "fontSize": "22px",
            "lineHeight": "30px",
            "fontWeight": 600,
            "usage": "Titre de section.",
            "letterSpacing": "-0.012em",
            "sample": "Activité récente"
          },
          {
            "name": "t-heading-3",
            "fontSize": "17px",
            "lineHeight": "24px",
            "fontWeight": 600,
            "usage": "Titre de carte, de modale, de groupe.",
            "letterSpacing": "-0.006em",
            "sample": "Revenus du mois"
          }
        ]
      },
      {
        "name": "Texte",
        "family": "sans",
        "styles": [
          {
            "name": "t-prose",
            "fontSize": "16px",
            "lineHeight": "27px",
            "fontWeight": 400,
            "usage": "Texte long : articles, documentation, pages de site.",
            "sample": "Un texte qui respire, posé sur une colonne de 720 px au plus."
          },
          {
            "name": "t-body",
            "fontSize": "14px",
            "lineHeight": "22px",
            "fontWeight": 400,
            "usage": "Texte d'interface par défaut : contrôles, cellules, paragraphes d'app.",
            "sample": "Modifié il y a 3 minutes par Timothée"
          },
          {
            "name": "t-body-strong",
            "fontSize": "14px",
            "lineHeight": "22px",
            "fontWeight": 550,
            "usage": "Libellés de bouton, noms de ligne, emphase dans l'interface.",
            "sample": "Nouvelle page"
          },
          {
            "name": "t-small",
            "fontSize": "13px",
            "lineHeight": "20px",
            "fontWeight": 400,
            "usage": "Labels de champ, descriptions secondaires, menus.",
            "sample": "Visible uniquement par toi"
          },
          {
            "name": "t-caption",
            "fontSize": "12px",
            "lineHeight": "16px",
            "fontWeight": 500,
            "usage": "En-têtes de colonne, tags, métadonnées, légendes de graphique.",
            "sample": "Dernière modification"
          }
        ]
      },
      {
        "name": "Utilitaires",
        "family": "sans",
        "styles": [
          {
            "name": "t-overline",
            "fontSize": "11px",
            "lineHeight": "16px",
            "fontWeight": 600,
            "usage": "Labels de section de sidebar et de menu, en MAJUSCULES.",
            "letterSpacing": "0.06em",
            "sample": "ESPACES"
          },
          {
            "name": "t-stat",
            "fontSize": "28px",
            "lineHeight": "34px",
            "fontWeight": 600,
            "usage": "Valeur d'une stat de dashboard. Toujours en chiffres tabulaires.",
            "letterSpacing": "-0.02em",
            "sample": "12 480 €"
          },
          {
            "name": "t-code",
            "fontSize": "13px",
            "lineHeight": "20px",
            "fontWeight": 450,
            "usage": "Code, identifiants, raccourcis, valeurs techniques.",
            "family": "mono",
            "sample": "npm run dev --port 5173"
          }
        ]
      }
    ]
  },
  "spacing": {
    "tokens": [
      {
        "name": "space-1",
        "value": "4px",
        "usage": "Gap icône/texte serré, padding de tag."
      },
      {
        "name": "space-2",
        "value": "8px",
        "usage": "Gap dans un groupe de contrôles, padding horizontal d'item de menu."
      },
      {
        "name": "space-3",
        "value": "12px",
        "usage": "Padding horizontal des boutons et champs, cellules de tableau."
      },
      {
        "name": "space-4",
        "value": "16px",
        "usage": "Gap entre cartes de dashboard, padding de carte compacte."
      },
      {
        "name": "space-5",
        "value": "20px",
        "usage": "Padding de carte."
      },
      {
        "name": "space-6",
        "value": "24px",
        "usage": "Écart entre groupes d'une section, gouttière de page mobile."
      },
      {
        "name": "space-8",
        "value": "32px",
        "usage": "Padding de modale, gouttière de page desktop."
      },
      {
        "name": "space-10",
        "value": "40px",
        "usage": "Écart entre blocs d'une page."
      },
      {
        "name": "space-12",
        "value": "48px",
        "usage": "Écart entre sections d'un site."
      },
      {
        "name": "space-16",
        "value": "64px",
        "usage": "Respiration de hero, sections de landing."
      },
      {
        "name": "space-24",
        "value": "96px",
        "usage": "Grandes sections de site vitrine."
      }
    ]
  },
  "radius": {
    "tokens": [
      {
        "name": "radius-xs",
        "value": "3px",
        "usage": "Tags, kbd, cases à cocher."
      },
      {
        "name": "radius-sm",
        "value": "4px",
        "usage": "Items de menu et de nav, boutons sm."
      },
      {
        "name": "radius-md",
        "value": "6px",
        "usage": "Boutons, champs, onglets segmentés."
      },
      {
        "name": "radius-lg",
        "value": "8px",
        "usage": "Cartes, menus, popovers, tableaux."
      },
      {
        "name": "radius-xl",
        "value": "12px",
        "usage": "Modales, grandes cartes de site, images."
      },
      {
        "name": "radius-full",
        "value": "9999px",
        "usage": "Switch, avatars, pastilles de statut."
      }
    ]
  },
  "size": {
    "tokens": [
      {
        "name": "control-sm",
        "value": "28px",
        "usage": "Hauteur des contrôles sm et des items de nav (densité confortable)."
      },
      {
        "name": "control-md",
        "value": "32px",
        "usage": "Hauteur par défaut des boutons, champs, onglets (densité confortable)."
      },
      {
        "name": "control-lg",
        "value": "40px",
        "usage": "Contrôles lg : CTA de site, formulaires publics."
      },
      {
        "name": "control-sm-compact",
        "value": "24px",
        "usage": "control-sm en densité compacte."
      },
      {
        "name": "control-md-compact",
        "value": "28px",
        "usage": "control-md en densité compacte."
      },
      {
        "name": "control-lg-compact",
        "value": "32px",
        "usage": "control-lg en densité compacte."
      },
      {
        "name": "row",
        "value": "36px",
        "usage": "Hauteur de ligne de tableau (confortable)."
      },
      {
        "name": "row-compact",
        "value": "30px",
        "usage": "Hauteur de ligne de tableau (compacte)."
      },
      {
        "name": "sidebar",
        "value": "240px",
        "usage": "Largeur de la sidebar d'app."
      },
      {
        "name": "topbar",
        "value": "48px",
        "usage": "Hauteur de la barre supérieure d'app."
      },
      {
        "name": "measure-prose",
        "value": "720px",
        "usage": "Largeur max du texte long (articles, docs)."
      },
      {
        "name": "measure-page",
        "value": "1120px",
        "usage": "Largeur max du contenu d'un site."
      }
    ]
  },
  "shadow": {
    "tokens": [
      {
        "name": "shadow-sm",
        "value": {
          "light": "0 1px 2px rgba(25, 23, 20, 0.06)",
          "dark": "0 1px 2px rgba(0, 0, 0, 0.40)"
        },
        "usage": "Carte survolée, onglet segmenté actif."
      },
      {
        "name": "shadow-md",
        "value": {
          "light": "0 0 0 1px rgba(25, 23, 20, 0.06), 0 4px 12px rgba(25, 23, 20, 0.08), 0 12px 32px rgba(25, 23, 20, 0.10)",
          "dark": "0 0 0 1px rgba(255, 255, 255, 0.07), 0 4px 12px rgba(0, 0, 0, 0.40), 0 12px 32px rgba(0, 0, 0, 0.50)"
        },
        "usage": "Menus, popovers, toasts."
      },
      {
        "name": "shadow-lg",
        "value": {
          "light": "0 0 0 1px rgba(25, 23, 20, 0.06), 0 8px 24px rgba(25, 23, 20, 0.12), 0 24px 64px rgba(25, 23, 20, 0.16)",
          "dark": "0 0 0 1px rgba(255, 255, 255, 0.07), 0 8px 24px rgba(0, 0, 0, 0.50), 0 24px 64px rgba(0, 0, 0, 0.60)"
        },
        "usage": "Modales, drawers, palette de commandes."
      }
    ]
  },
  "duration": {
    "tokens": [
      {
        "name": "duration-fast",
        "value": "100ms",
        "usage": "Survols, changements de couleur."
      },
      {
        "name": "duration-base",
        "value": "160ms",
        "usage": "Ouverture de menus et popovers, switch."
      },
      {
        "name": "duration-slow",
        "value": "240ms",
        "usage": "Modales, drawers, transitions de panneau."
      }
    ]
  },
  "easing": {
    "tokens": [
      {
        "name": "ease-out",
        "value": "cubic-bezier(0.2, 0, 0, 1)",
        "usage": "Toute entrée et tout changement d'état."
      }
    ]
  }
} as const

export type ColorToken = 'bg' | 'surface' | 'surface-sunken' | 'surface-raised' | 'surface-hover' | 'surface-active' | 'border' | 'border-strong' | 'border-control' | 'ink' | 'ink-muted' | 'ink-subtle' | 'ink-disabled' | 'accent' | 'accent-hover' | 'accent-soft' | 'accent-ink' | 'on-accent' | 'focus' | 'overlay' | 'success' | 'success-soft' | 'warning' | 'warning-soft' | 'danger' | 'danger-soft' | 'info' | 'info-soft' | 'on-danger' | 'tag-gray-bg' | 'tag-gray-fg' | 'tag-brown-bg' | 'tag-brown-fg' | 'tag-orange-bg' | 'tag-orange-fg' | 'tag-yellow-bg' | 'tag-yellow-fg' | 'tag-green-bg' | 'tag-green-fg' | 'tag-blue-bg' | 'tag-blue-fg' | 'tag-purple-bg' | 'tag-purple-fg' | 'tag-pink-bg' | 'tag-pink-fg' | 'tag-red-bg' | 'tag-red-fg' | 'chart-1' | 'chart-2' | 'chart-3' | 'chart-4' | 'chart-5'

/** Référence CSS d'un token : cssVar('accent') → 'var(--accent)'. */
export const cssVar = (name: string) => `var(--${name})`

/** Couleurs de séries pour les graphiques, dans l'ordre d'usage. */
export const chartColors = ['chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5'].map(cssVar)
