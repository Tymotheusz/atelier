export declare const tokens: {
    readonly name: "Atelier";
    readonly version: 1;
    readonly color: {
        readonly themes: readonly [{
            readonly id: "light";
            readonly name: "Clair";
        }, {
            readonly id: "dark";
            readonly name: "Sombre";
        }];
        readonly tokens: readonly [{
            readonly name: "bg";
            readonly value: {
                readonly light: "#fbfaf8";
                readonly dark: "#191817";
            };
            readonly usage: "Fond de page (sites et apps). Sol par défaut sous tout le reste.";
        }, {
            readonly name: "surface";
            readonly value: {
                readonly light: "#ffffff";
                readonly dark: "#211f1d";
            };
            readonly usage: "Cartes, tableaux, champs, zone de contenu d'un dashboard.";
        }, {
            readonly name: "surface-sunken";
            readonly value: {
                readonly light: "#f5f4f1";
                readonly dark: "#1d1c1a";
            };
            readonly usage: "Sidebar, barres d'outils, en-têtes de tableau, fond des contrôles segmentés.";
        }, {
            readonly name: "surface-raised";
            readonly value: {
                readonly light: "#ffffff";
                readonly dark: "#2a2826";
            };
            readonly usage: "Menus, popovers, modales, toasts (toujours avec shadow-md ou shadow-lg).";
        }, {
            readonly name: "surface-hover";
            readonly value: {
                readonly light: "#efeeea";
                readonly dark: "#2e2c29";
            };
            readonly usage: "Survol des éléments neutres : items de menu, lignes de tableau, boutons ghost, items de nav.";
        }, {
            readonly name: "surface-active";
            readonly value: {
                readonly light: "#e8e6e1";
                readonly dark: "#36332f";
            };
            readonly usage: "Élément pressé ou item de nav sélectionné.";
        }, {
            readonly name: "border";
            readonly value: {
                readonly light: "#ebe9e4";
                readonly dark: "#302e2b";
            };
            readonly usage: "Séparateurs, contours de carte, grilles de tableau. Décoratif : ne porte jamais seul une information.";
        }, {
            readonly name: "border-strong";
            readonly value: {
                readonly light: "#dcd9d2";
                readonly dark: "#3f3c38";
            };
            readonly usage: "Contour de carte au survol, séparateurs plus marqués, bouton secondary.";
        }, {
            readonly name: "border-control";
            readonly value: {
                readonly light: "#8e8980";
                readonly dark: "#7a756d";
            };
            readonly usage: "Contour des champs, cases à cocher, switch éteint. ≥3:1 sur surface, bg et surface-sunken.";
        }, {
            readonly name: "ink";
            readonly value: {
                readonly light: "#2f2c28";
                readonly dark: "#ecebe7";
            };
            readonly usage: "Texte principal et titres, sur bg, surface, surface-sunken, surface-raised et surface-hover.";
        }, {
            readonly name: "ink-muted";
            readonly value: {
                readonly light: "#67635c";
                readonly dark: "#aaa59d";
            };
            readonly usage: "Texte secondaire : descriptions, en-têtes de colonne, labels de stat, icônes. Mêmes sols que ink.";
        }, {
            readonly name: "ink-subtle";
            readonly value: {
                readonly light: "#767168";
                readonly dark: "#959087";
            };
            readonly usage: "Placeholders, métadonnées tertiaires, raccourcis clavier. Sur bg, surface et surface-raised uniquement.";
        }, {
            readonly name: "ink-disabled";
            readonly value: {
                readonly light: "#b5b0a7";
                readonly dark: "#5a5650";
            };
            readonly usage: "Texte et icônes désactivés (exemptés de contraste).";
        }, {
            readonly name: "accent";
            readonly value: {
                readonly light: "#4f46e5";
                readonly dark: "#8b8cf6";
            };
            readonly usage: "Action principale (bouton primary), lien, case cochée, switch actif, indicateur de sélection.";
        }, {
            readonly name: "accent-hover";
            readonly value: {
                readonly light: "#4338ca";
                readonly dark: "#a3a4f8";
            };
            readonly usage: "Survol de tout ce qui est en accent.";
        }, {
            readonly name: "accent-soft";
            readonly value: {
                readonly light: "#eef0fd";
                readonly dark: "#2a2950";
            };
            readonly usage: "Fond de sélection : ligne de tableau sélectionnée, item de menu actif, surlignage.";
        }, {
            readonly name: "accent-ink";
            readonly value: {
                readonly light: "#3f37c9";
                readonly dark: "#b8b9fb";
            };
            readonly usage: "Texte et liens sur accent-soft, liens dans du texte courant sur bg/surface.";
        }, {
            readonly name: "on-accent";
            readonly value: {
                readonly light: "#ffffff";
                readonly dark: "#15143a";
            };
            readonly usage: "Texte et icônes posés sur accent ou accent-hover.";
        }, {
            readonly name: "focus";
            readonly value: {
                readonly light: "#4f46e5";
                readonly dark: "#a3a4f8";
            };
            readonly usage: "Anneau de focus : outline 2px plein, offset 2px. ≥3:1 sur tous les sols.";
        }, {
            readonly name: "overlay";
            readonly value: {
                readonly light: "rgba(25, 23, 20, 0.40)";
                readonly dark: "rgba(0, 0, 0, 0.60)";
            };
            readonly usage: "Voile derrière une modale ou un drawer.";
        }, {
            readonly name: "success";
            readonly value: {
                readonly light: "#1f7a4d";
                readonly dark: "#62c891";
            };
            readonly usage: "Succès, en ligne, terminé, variation positive. Texte sur success-soft, surface et bg.";
        }, {
            readonly name: "success-soft";
            readonly value: {
                readonly light: "#e7f3eb";
                readonly dark: "#1e3328";
            };
            readonly usage: "Fond des badges, callouts et bandeaux « success ».";
        }, {
            readonly name: "warning";
            readonly value: {
                readonly light: "#94570a";
                readonly dark: "#e6ab52";
            };
            readonly usage: "Attention, en attente, quota proche. Texte sur warning-soft, surface et bg.";
        }, {
            readonly name: "warning-soft";
            readonly value: {
                readonly light: "#fbf0dc";
                readonly dark: "#3a2d18";
            };
            readonly usage: "Fond des badges, callouts et bandeaux « warning ».";
        }, {
            readonly name: "danger";
            readonly value: {
                readonly light: "#c0352b";
                readonly dark: "#f17f73";
            };
            readonly usage: "Erreur, suppression, variation négative. Texte sur danger-soft, surface et bg.";
        }, {
            readonly name: "danger-soft";
            readonly value: {
                readonly light: "#fbe9e7";
                readonly dark: "#3d2220";
            };
            readonly usage: "Fond des badges, callouts et bandeaux « danger ».";
        }, {
            readonly name: "info";
            readonly value: {
                readonly light: "#1f6aa8";
                readonly dark: "#74b2e8";
            };
            readonly usage: "Information neutre, en cours, brouillon. Texte sur info-soft, surface et bg.";
        }, {
            readonly name: "info-soft";
            readonly value: {
                readonly light: "#e6eff8";
                readonly dark: "#1c2c3b";
            };
            readonly usage: "Fond des badges, callouts et bandeaux « info ».";
        }, {
            readonly name: "on-danger";
            readonly value: {
                readonly light: "#ffffff";
                readonly dark: "#2a0e0b";
            };
            readonly usage: "Texte sur un bouton danger plein.";
        }, {
            readonly name: "tag-gray-bg";
            readonly value: {
                readonly light: "#efeeeb";
                readonly dark: "#34322f";
            };
            readonly usage: "Fond d'un tag « gray » (options de select, catégories, propriétés de base de données).";
        }, {
            readonly name: "tag-gray-fg";
            readonly value: {
                readonly light: "#5a5650";
                readonly dark: "#cdc9c2";
            };
            readonly usage: "Texte d'un tag « gray », sur tag-gray-bg.";
        }, {
            readonly name: "tag-brown-bg";
            readonly value: {
                readonly light: "#f3ebe4";
                readonly dark: "#3b2e25";
            };
            readonly usage: "Fond d'un tag « brown » (options de select, catégories, propriétés de base de données).";
        }, {
            readonly name: "tag-brown-fg";
            readonly value: {
                readonly light: "#7a5233";
                readonly dark: "#d9b99e";
            };
            readonly usage: "Texte d'un tag « brown », sur tag-brown-bg.";
        }, {
            readonly name: "tag-orange-bg";
            readonly value: {
                readonly light: "#fbebdc";
                readonly dark: "#43301f";
            };
            readonly usage: "Fond d'un tag « orange » (options de select, catégories, propriétés de base de données).";
        }, {
            readonly name: "tag-orange-fg";
            readonly value: {
                readonly light: "#9e470e";
                readonly dark: "#f0b07a";
            };
            readonly usage: "Texte d'un tag « orange », sur tag-orange-bg.";
        }, {
            readonly name: "tag-yellow-bg";
            readonly value: {
                readonly light: "#faf2d4";
                readonly dark: "#3d351c";
            };
            readonly usage: "Fond d'un tag « yellow » (options de select, catégories, propriétés de base de données).";
        }, {
            readonly name: "tag-yellow-fg";
            readonly value: {
                readonly light: "#7a5900";
                readonly dark: "#e8cc72";
            };
            readonly usage: "Texte d'un tag « yellow », sur tag-yellow-bg.";
        }, {
            readonly name: "tag-green-bg";
            readonly value: {
                readonly light: "#e6f2ea";
                readonly dark: "#233428";
            };
            readonly usage: "Fond d'un tag « green » (options de select, catégories, propriétés de base de données).";
        }, {
            readonly name: "tag-green-fg";
            readonly value: {
                readonly light: "#2a6b43";
                readonly dark: "#8fd1a8";
            };
            readonly usage: "Texte d'un tag « green », sur tag-green-bg.";
        }, {
            readonly name: "tag-blue-bg";
            readonly value: {
                readonly light: "#e5eefa";
                readonly dark: "#1f2f42";
            };
            readonly usage: "Fond d'un tag « blue » (options de select, catégories, propriétés de base de données).";
        }, {
            readonly name: "tag-blue-fg";
            readonly value: {
                readonly light: "#1f5f99";
                readonly dark: "#8fc0f0";
            };
            readonly usage: "Texte d'un tag « blue », sur tag-blue-bg.";
        }, {
            readonly name: "tag-purple-bg";
            readonly value: {
                readonly light: "#efeafb";
                readonly dark: "#31284a";
            };
            readonly usage: "Fond d'un tag « purple » (options de select, catégories, propriétés de base de données).";
        }, {
            readonly name: "tag-purple-fg";
            readonly value: {
                readonly light: "#6340b0";
                readonly dark: "#c3aef5";
            };
            readonly usage: "Texte d'un tag « purple », sur tag-purple-bg.";
        }, {
            readonly name: "tag-pink-bg";
            readonly value: {
                readonly light: "#fbe8f1";
                readonly dark: "#40253a";
            };
            readonly usage: "Fond d'un tag « pink » (options de select, catégories, propriétés de base de données).";
        }, {
            readonly name: "tag-pink-fg";
            readonly value: {
                readonly light: "#a3326c";
                readonly dark: "#f0a3c8";
            };
            readonly usage: "Texte d'un tag « pink », sur tag-pink-bg.";
        }, {
            readonly name: "tag-red-bg";
            readonly value: {
                readonly light: "#fce9e7";
                readonly dark: "#432624";
            };
            readonly usage: "Fond d'un tag « red » (options de select, catégories, propriétés de base de données).";
        }, {
            readonly name: "tag-red-fg";
            readonly value: {
                readonly light: "#b3352a";
                readonly dark: "#f3a199";
            };
            readonly usage: "Texte d'un tag « red », sur tag-red-bg.";
        }, {
            readonly name: "chart-1";
            readonly value: {
                readonly light: "#4f46e5";
                readonly dark: "#8b8cf6";
            };
            readonly usage: "Série 1 des graphiques (indigo). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres ».";
        }, {
            readonly name: "chart-2";
            readonly value: {
                readonly light: "#0f8a8c";
                readonly dark: "#4fc3c5";
            };
            readonly usage: "Série 2 des graphiques (sarcelle). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres ».";
        }, {
            readonly name: "chart-3";
            readonly value: {
                readonly light: "#d1690a";
                readonly dark: "#f0a35a";
            };
            readonly usage: "Série 3 des graphiques (orange). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres ».";
        }, {
            readonly name: "chart-4";
            readonly value: {
                readonly light: "#c2417f";
                readonly dark: "#ef8fbd";
            };
            readonly usage: "Série 4 des graphiques (rose). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres ».";
        }, {
            readonly name: "chart-5";
            readonly value: {
                readonly light: "#8a7208";
                readonly dark: "#d9b73f";
            };
            readonly usage: "Série 5 des graphiques (or). Toujours dans cet ordre ; au-delà de 5 séries, regrouper en « Autres ».";
        }, {
            readonly name: "chart-1-soft";
            readonly value: {
                readonly light: "#dee3ff";
                readonly dark: "#323359";
            };
            readonly usage: "Fond pâle d'une tuile d'icône chart-1. Jamais pour une série de graphique.";
        }, {
            readonly name: "chart-1-ink";
            readonly value: {
                readonly light: "#4c4fbe";
                readonly dark: "#b6bafe";
            };
            readonly usage: "Icône ou texte sur chart-1-soft (≥ 4,5:1).";
        }, {
            readonly name: "chart-2-soft";
            readonly value: {
                readonly light: "#bff0f0";
                readonly dark: "#024142";
            };
            readonly usage: "Fond pâle d'une tuile d'icône chart-2. Jamais pour une série de graphique.";
        }, {
            readonly name: "chart-2-ink";
            readonly value: {
                readonly light: "#066e70";
                readonly dark: "#14dbdf";
            };
            readonly usage: "Icône ou texte sur chart-2-soft (≥ 4,5:1).";
        }, {
            readonly name: "chart-3-soft";
            readonly value: {
                readonly light: "#feddc9";
                readonly dark: "#4f2f0f";
            };
            readonly usage: "Fond pâle d'une tuile d'icône chart-3. Jamais pour une série de graphique.";
        }, {
            readonly name: "chart-3-ink";
            readonly value: {
                readonly light: "#954801";
                readonly dark: "#ffac5d";
            };
            readonly usage: "Icône ou texte sur chart-3-soft (≥ 4,5:1).";
        }, {
            readonly name: "chart-4-soft";
            readonly value: {
                readonly light: "#ffd9e6";
                readonly dark: "#51293c";
            };
            readonly usage: "Fond pâle d'une tuile d'icône chart-4. Jamais pour une série de graphique.";
        }, {
            readonly name: "chart-4-ink";
            readonly value: {
                readonly light: "#a42666";
                readonly dark: "#fe9ecc";
            };
            readonly usage: "Icône ou texte sur chart-4-soft (≥ 4,5:1).";
        }, {
            readonly name: "chart-5-soft";
            readonly value: {
                readonly light: "#efe5c0";
                readonly dark: "#443706";
            };
            readonly usage: "Fond pâle d'une tuile d'icône chart-5. Jamais pour une série de graphique.";
        }, {
            readonly name: "chart-5-ink";
            readonly value: {
                readonly light: "#735f01";
                readonly dark: "#e0be46";
            };
            readonly usage: "Icône ou texte sur chart-5-soft (≥ 4,5:1).";
        }];
    };
    readonly type: {
        readonly fonts: readonly [{
            readonly family: "Inter";
            readonly file: "fonts/Inter-Variable.woff2";
            readonly weight: "100 900";
            readonly style: "normal";
        }, {
            readonly family: "JetBrains Mono";
            readonly file: "fonts/JetBrainsMono-Variable.woff2";
            readonly weight: "100 800";
            readonly style: "normal";
        }];
        readonly families: {
            readonly sans: "\"Inter\", ui-sans-serif, system-ui, -apple-system, \"Segoe UI\", sans-serif";
            readonly mono: "\"JetBrains Mono\", ui-monospace, \"SF Mono\", Menlo, Consolas, monospace";
        };
        readonly groups: readonly [{
            readonly name: "Titres";
            readonly family: "sans";
            readonly styles: readonly [{
                readonly name: "t-display";
                readonly fontSize: "40px";
                readonly lineHeight: "48px";
                readonly fontWeight: 650;
                readonly usage: "Titre de hero ou de page de site. Un seul par page.";
                readonly letterSpacing: "-0.022em";
                readonly sample: "Des outils clairs pour le quotidien";
            }, {
                readonly name: "t-heading-1";
                readonly fontSize: "30px";
                readonly lineHeight: "38px";
                readonly fontWeight: 650;
                readonly usage: "Titre de page (doc, dashboard).";
                readonly letterSpacing: "-0.018em";
                readonly sample: "Tableau de bord";
            }, {
                readonly name: "t-heading-2";
                readonly fontSize: "22px";
                readonly lineHeight: "30px";
                readonly fontWeight: 600;
                readonly usage: "Titre de section.";
                readonly letterSpacing: "-0.012em";
                readonly sample: "Activité récente";
            }, {
                readonly name: "t-heading-3";
                readonly fontSize: "17px";
                readonly lineHeight: "24px";
                readonly fontWeight: 600;
                readonly usage: "Titre de carte, de modale, de groupe.";
                readonly letterSpacing: "-0.006em";
                readonly sample: "Revenus du mois";
            }];
        }, {
            readonly name: "Texte";
            readonly family: "sans";
            readonly styles: readonly [{
                readonly name: "t-prose";
                readonly fontSize: "16px";
                readonly lineHeight: "27px";
                readonly fontWeight: 400;
                readonly usage: "Texte long : articles, documentation, pages de site.";
                readonly sample: "Un texte qui respire, posé sur une colonne de 720 px au plus.";
            }, {
                readonly name: "t-body";
                readonly fontSize: "14px";
                readonly lineHeight: "22px";
                readonly fontWeight: 400;
                readonly usage: "Texte d'interface par défaut : contrôles, cellules, paragraphes d'app.";
                readonly sample: "Modifié il y a 3 minutes par Alice";
            }, {
                readonly name: "t-body-strong";
                readonly fontSize: "14px";
                readonly lineHeight: "22px";
                readonly fontWeight: 550;
                readonly usage: "Libellés de bouton, noms de ligne, emphase dans l'interface.";
                readonly sample: "Nouvelle page";
            }, {
                readonly name: "t-small";
                readonly fontSize: "13px";
                readonly lineHeight: "20px";
                readonly fontWeight: 400;
                readonly usage: "Labels de champ, descriptions secondaires, menus.";
                readonly sample: "Visible uniquement par toi";
            }, {
                readonly name: "t-caption";
                readonly fontSize: "12px";
                readonly lineHeight: "16px";
                readonly fontWeight: 500;
                readonly usage: "En-têtes de colonne, tags, métadonnées, légendes de graphique.";
                readonly sample: "Dernière modification";
            }];
        }, {
            readonly name: "Utilitaires";
            readonly family: "sans";
            readonly styles: readonly [{
                readonly name: "t-overline";
                readonly fontSize: "11px";
                readonly lineHeight: "16px";
                readonly fontWeight: 600;
                readonly usage: "Labels de section de sidebar et de menu, en MAJUSCULES.";
                readonly letterSpacing: "0.06em";
                readonly sample: "ESPACES";
            }, {
                readonly name: "t-stat";
                readonly fontSize: "28px";
                readonly lineHeight: "34px";
                readonly fontWeight: 600;
                readonly usage: "Valeur d'une stat de dashboard. Toujours en chiffres tabulaires.";
                readonly letterSpacing: "-0.02em";
                readonly sample: "12 480 €";
            }, {
                readonly name: "t-code";
                readonly fontSize: "13px";
                readonly lineHeight: "20px";
                readonly fontWeight: 450;
                readonly usage: "Code, identifiants, raccourcis, valeurs techniques.";
                readonly family: "mono";
                readonly sample: "npm run dev --port 5173";
            }];
        }];
    };
    readonly spacing: {
        readonly tokens: readonly [{
            readonly name: "space-1";
            readonly value: "4px";
            readonly usage: "Gap icône/texte serré, padding de tag.";
        }, {
            readonly name: "space-2";
            readonly value: "8px";
            readonly usage: "Gap dans un groupe de contrôles, padding horizontal d'item de menu.";
        }, {
            readonly name: "space-3";
            readonly value: "12px";
            readonly usage: "Padding horizontal des boutons et champs, cellules de tableau.";
        }, {
            readonly name: "space-4";
            readonly value: "16px";
            readonly usage: "Gap entre cartes de dashboard, padding de carte compacte.";
        }, {
            readonly name: "space-5";
            readonly value: "20px";
            readonly usage: "Padding de carte.";
        }, {
            readonly name: "space-6";
            readonly value: "24px";
            readonly usage: "Écart entre groupes d'une section, gouttière de page mobile.";
        }, {
            readonly name: "space-8";
            readonly value: "32px";
            readonly usage: "Padding de modale, gouttière de page desktop.";
        }, {
            readonly name: "space-10";
            readonly value: "40px";
            readonly usage: "Écart entre blocs d'une page.";
        }, {
            readonly name: "space-12";
            readonly value: "48px";
            readonly usage: "Écart entre sections d'un site.";
        }, {
            readonly name: "space-16";
            readonly value: "64px";
            readonly usage: "Respiration de hero, sections de landing.";
        }, {
            readonly name: "space-24";
            readonly value: "96px";
            readonly usage: "Grandes sections de site vitrine.";
        }];
    };
    readonly radius: {
        readonly tokens: readonly [{
            readonly name: "radius-xs";
            readonly value: "3px";
            readonly usage: "Tags, kbd, cases à cocher.";
        }, {
            readonly name: "radius-sm";
            readonly value: "4px";
            readonly usage: "Items de menu et de nav, boutons sm.";
        }, {
            readonly name: "radius-md";
            readonly value: "6px";
            readonly usage: "Boutons, champs, onglets segmentés.";
        }, {
            readonly name: "radius-lg";
            readonly value: "8px";
            readonly usage: "Cartes, menus, popovers, tableaux.";
        }, {
            readonly name: "radius-xl";
            readonly value: "12px";
            readonly usage: "Modales, grandes cartes de site, images.";
        }, {
            readonly name: "radius-full";
            readonly value: "9999px";
            readonly usage: "Switch, avatars, pastilles de statut.";
        }];
    };
    readonly size: {
        readonly tokens: readonly [{
            readonly name: "control-sm";
            readonly value: "28px";
            readonly usage: "Hauteur des contrôles sm et des items de nav (densité confortable).";
        }, {
            readonly name: "control-md";
            readonly value: "32px";
            readonly usage: "Hauteur par défaut des boutons, champs, onglets (densité confortable).";
        }, {
            readonly name: "control-lg";
            readonly value: "40px";
            readonly usage: "Contrôles lg : CTA de site, formulaires publics.";
        }, {
            readonly name: "control-sm-compact";
            readonly value: "24px";
            readonly usage: "control-sm en densité compacte.";
        }, {
            readonly name: "control-md-compact";
            readonly value: "28px";
            readonly usage: "control-md en densité compacte.";
        }, {
            readonly name: "control-lg-compact";
            readonly value: "32px";
            readonly usage: "control-lg en densité compacte.";
        }, {
            readonly name: "row";
            readonly value: "36px";
            readonly usage: "Hauteur de ligne de tableau (confortable).";
        }, {
            readonly name: "row-compact";
            readonly value: "30px";
            readonly usage: "Hauteur de ligne de tableau (compacte).";
        }, {
            readonly name: "sidebar";
            readonly value: "240px";
            readonly usage: "Largeur de la sidebar d'app.";
        }, {
            readonly name: "topbar";
            readonly value: "48px";
            readonly usage: "Hauteur de la barre supérieure d'app.";
        }, {
            readonly name: "measure-prose";
            readonly value: "720px";
            readonly usage: "Largeur max du texte long (articles, docs).";
        }, {
            readonly name: "measure-page";
            readonly value: "1120px";
            readonly usage: "Largeur max du contenu d'un site.";
        }, {
            readonly name: "measure-wide";
            readonly value: "1920px";
            readonly usage: "Garde-fou des pages de données (tableau, board) : fluides jusqu'à cette largeur, gouttières comprises.";
        }, {
            readonly name: "stripe";
            readonly value: "4px";
            readonly usage: "Largeur de la barre de couleur posée à gauche du titre des tuiles de stat et des cartes.";
        }];
    };
    readonly shadow: {
        readonly tokens: readonly [{
            readonly name: "shadow-sm";
            readonly value: {
                readonly light: "0 1px 2px rgba(25, 23, 20, 0.06)";
                readonly dark: "0 1px 2px rgba(0, 0, 0, 0.40)";
            };
            readonly usage: "Carte survolée, onglet segmenté actif.";
        }, {
            readonly name: "shadow-md";
            readonly value: {
                readonly light: "0 0 0 1px rgba(25, 23, 20, 0.06), 0 4px 12px rgba(25, 23, 20, 0.08), 0 12px 32px rgba(25, 23, 20, 0.10)";
                readonly dark: "0 0 0 1px rgba(255, 255, 255, 0.07), 0 4px 12px rgba(0, 0, 0, 0.40), 0 12px 32px rgba(0, 0, 0, 0.50)";
            };
            readonly usage: "Menus, popovers, toasts.";
        }, {
            readonly name: "shadow-lg";
            readonly value: {
                readonly light: "0 0 0 1px rgba(25, 23, 20, 0.06), 0 8px 24px rgba(25, 23, 20, 0.12), 0 24px 64px rgba(25, 23, 20, 0.16)";
                readonly dark: "0 0 0 1px rgba(255, 255, 255, 0.07), 0 8px 24px rgba(0, 0, 0, 0.50), 0 24px 64px rgba(0, 0, 0, 0.60)";
            };
            readonly usage: "Modales, drawers, palette de commandes.";
        }];
    };
    readonly duration: {
        readonly tokens: readonly [{
            readonly name: "duration-fast";
            readonly value: "100ms";
            readonly usage: "Survols, changements de couleur.";
        }, {
            readonly name: "duration-base";
            readonly value: "160ms";
            readonly usage: "Ouverture de menus et popovers, switch.";
        }, {
            readonly name: "duration-slow";
            readonly value: "240ms";
            readonly usage: "Modales, drawers, transitions de panneau.";
        }];
    };
    readonly easing: {
        readonly tokens: readonly [{
            readonly name: "ease-out";
            readonly value: "cubic-bezier(0.2, 0, 0, 1)";
            readonly usage: "Toute entrée et tout changement d'état.";
        }];
    };
};
export type ColorToken = 'bg' | 'surface' | 'surface-sunken' | 'surface-raised' | 'surface-hover' | 'surface-active' | 'border' | 'border-strong' | 'border-control' | 'ink' | 'ink-muted' | 'ink-subtle' | 'ink-disabled' | 'accent' | 'accent-hover' | 'accent-soft' | 'accent-ink' | 'on-accent' | 'focus' | 'overlay' | 'success' | 'success-soft' | 'warning' | 'warning-soft' | 'danger' | 'danger-soft' | 'info' | 'info-soft' | 'on-danger' | 'tag-gray-bg' | 'tag-gray-fg' | 'tag-brown-bg' | 'tag-brown-fg' | 'tag-orange-bg' | 'tag-orange-fg' | 'tag-yellow-bg' | 'tag-yellow-fg' | 'tag-green-bg' | 'tag-green-fg' | 'tag-blue-bg' | 'tag-blue-fg' | 'tag-purple-bg' | 'tag-purple-fg' | 'tag-pink-bg' | 'tag-pink-fg' | 'tag-red-bg' | 'tag-red-fg' | 'chart-1' | 'chart-2' | 'chart-3' | 'chart-4' | 'chart-5' | 'chart-1-soft' | 'chart-1-ink' | 'chart-2-soft' | 'chart-2-ink' | 'chart-3-soft' | 'chart-3-ink' | 'chart-4-soft' | 'chart-4-ink' | 'chart-5-soft' | 'chart-5-ink';
/** Référence CSS d'un token : cssVar('accent') → 'var(--accent)'. */
export declare const cssVar: (name: string) => string;
/** Couleurs de séries pour les graphiques, dans l'ordre d'usage. */
export declare const chartColors: string[];
