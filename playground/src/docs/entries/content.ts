import { ref } from 'vue'
import type { ComponentDoc } from '../types'

export const content: ComponentDoc[] = [
  {
    name: 'AtCard',
    slug: 'at-card',
    family: 'Contenu',
    tagline: 'Surface de contenu : en-tête, corps libre, pied d’actions.',
    about: [
      'Avec `href`, la carte entière devient un lien (`at-card--link`) : survol en `border-strong` + `shadow-sm`. C’est le cas des listes d’articles ou de projets.',
      '`color` ajoute une barre de 4 px à gauche du titre (`at-card--striped`) : elle rattache la carte à une entité (la couleur du projet) ou à une série. Elle ne remplace pas le texte, elle le double.'
    ],
    rules: [
      'Pas d’ombre au repos : la séparation vient du contour.',
      'Ne pas imbriquer de cartes. À l’intérieur, séparer par un filet `border` ou par l’espacement.',
      'Dans une grille de dashboard, gap `space-4` ; sur un site, `space-6`.',
      'Le slot `actions` est réservé à une action ou un badge, pas à une barre d’outils.',
      '`color` : la couleur de l’entité (`chart-1` à `chart-5`) ou un état. Une carte sans entité n’a pas de bande.'
    ],
    props: [
      { name: 'title', type: 'string', desc: 'Titre de la carte.' },
      { name: 'description', type: 'string', desc: 'Sous-titre.' },
      { name: 'href', type: 'string', desc: 'Rend un `<a>` : toute la carte devient cliquable.' },
      { name: 'as', type: 'string', default: `'section'`, desc: 'Balise rendue quand il n’y a pas de `href`.' },
      { name: 'color', type: `'chart-1' … 'chart-5' | 'success' | 'warning' | 'danger' | 'info'`, desc: 'Barre de couleur à gauche du titre.' }
    ],
    slots: [
      { name: 'default', type: '—', desc: 'Corps de la carte.' },
      { name: 'actions', type: '—', desc: 'Action ou badge, à droite du titre.' },
      { name: 'footer', type: '—', desc: 'Pied : actions de la carte.' }
    ],
    classes: ['at-card', 'at-card--link', 'at-card--striped', 'at-tone-*', 'at-card__head', 'at-card__title', 'at-card__desc', 'at-card__foot'],
    related: ['at-empty', 'at-stat', 'at-icon-tile', 'at-page'],
    examples: [
      {
        title: 'Carte de dashboard et carte-lien',
        frame: 'grid',
        code: `
          <AtCard title="Sauvegardes" description="Dernière exécution le 21 oct. à 03:00">
            <template #actions><AtBadge tone="success">OK</AtBadge></template>
            <p style="margin: 0">Les sauvegardes quotidiennes sont conservées 30 jours, puis archivées chaque mois.</p>
            <template #footer>
              <AtButton size="sm">Lancer maintenant</AtButton>
              <AtButton size="sm" variant="ghost">Historique</AtButton>
            </template>
          </AtCard>
          <AtCard href="#/doc/fondations/principes"
            title="Construire un design system pour ses projets perso"
            description="Tokens, densité, thèmes : les choix qui font tenir un système sur plusieurs sites.">
            <div style="display: flex; gap: 8px; align-items: center">
              <AtTag color="blue">Dev</AtTag>
              <span class="at-muted" style="font-size: 12px">5 min de lecture</span>
            </div>
          </AtCard>
        `
      },
      {
        title: 'Bande de couleur',
        desc: 'La bande reprend la couleur de l’entité : une carte de ce projet se reconnaît sans lire le titre.',
        frame: 'grid',
        code: `
          <AtCard color="chart-1" title="Version bêta" description="Connexion, recherche, notifications.">
            <AtProgress :value="62" />
          </AtCard>
          <AtCard color="chart-2" title="Pages produit" description="Pages produit et comparatif en ligne.">
            <AtProgress :value="38" />
          </AtCard>
          <AtCard color="danger" title="Incident de production" description="Depuis 14:05, file d’envoi bloquée.">
            <AtBadge tone="danger">En cours</AtBadge>
          </AtCard>
        `
      }
    ]
  },

  {
    name: 'AtEmpty',
    slug: 'at-empty',
    family: 'Contenu',
    tagline: 'État vide : dit ce qui manque et propose l’action qui remplit.',
    rules: [
      'Dire ce qui manque, pas « Aucune donnée » : « Aucune tâche en retard. »',
      'Une seule action, celle qui crée le premier élément.',
      'Distinguer le vide initial (rien n’existe) du vide filtré (le filtre ne ramène rien) : le texte n’est pas le même.'
    ],
    props: [{ name: 'message', type: 'string', desc: 'Texte, si le slot par défaut n’est pas utilisé.' }],
    slots: [
      { name: 'default', type: '—', desc: 'Message.' },
      { name: 'action', type: '—', desc: 'Action proposée.' }
    ],
    classes: ['at-empty'],
    related: ['at-card', 'at-data-view'],
    examples: [
      {
        frame: 'col',
        code: `
          <AtEmpty message="Aucune tâche dans ce projet.">
            <template #action><AtButton size="sm" variant="primary" icon="plus">Nouvelle tâche</AtButton></template>
          </AtEmpty>
          <AtEmpty message="Aucun résultat pour « facture ». Essayer un autre mot ou retirer un filtre." />
        `
      }
    ]
  },

  {
    name: 'AtComments',
    slug: 'at-comments',
    family: 'Contenu',
    tagline: 'Fil d’activité : commentaires et changements mêlés, saisie en bas.',
    about: [
      'Les éléments sont triés par date. Un `comment` affiche l’avatar, le nom, l’heure relative et le texte ; un `event` (« a passé le statut à En revue ») est une ligne grise, plus discrète. La saisie est en bas, comme dans une conversation : ⌘ Entrée (Ctrl Entrée) envoie.',
      '`@` ouvre la liste des personnes de `people` ; la mention est mise en valeur dans le message. Ses propres messages (auteur = `me`) se modifient et se suppriment au survol.',
      '**Le composant n’écrit jamais dans `items`** : il émet `post`, `edit` et `delete`. C’est à l’app de consigner les changements (`kind: \'event\'`) quand elle modifie une ligne.'
    ],
    rules: [
      'Dans un panneau de détail, sous la description, séparé par un `at-divider`.',
      'Les événements disent un changement, au passé composé et sans sujet : « a passé le statut à Bloqué », « a créé la tâche ». L’auteur est affiché devant.',
      'Ne consigner que ce qui aide à comprendre l’histoire (statut, assignation, priorité), pas chaque frappe.',
      '`at` est une date ISO complète : l’heure relative (« il y a 2 h », « hier à 16:40 ») est calculée à l’affichage et se met à jour.'
    ],
    props: [
      { name: 'items', type: 'CommentItem[]', required: true, desc: '`{ id, kind?: \'comment\' | \'event\', author, text, at, editedAt? }`.' },
      { name: 'me', type: 'string', required: true, desc: 'Nom de la personne connectée : avatar de la saisie, droit de modifier ses messages.' },
      { name: 'people', type: 'string[]', default: '[]', desc: 'Personnes mentionnables avec `@`.' },
      { name: 'label', type: 'string', default: `'Activité'`, desc: 'Titre du fil, aussi `aria-label`. Vide : pas de titre.' },
      { name: 'placeholder', type: 'string', default: `'Ajouter un commentaire…'`, desc: 'Texte d’attente de la saisie.' }
    ],
    events: [
      { name: 'post', type: '(text: string)', desc: 'Nouveau commentaire envoyé.' },
      { name: 'edit', type: '(item: CommentItem, text: string)', desc: 'Commentaire modifié : penser à `editedAt`.' },
      { name: 'delete', type: '(item: CommentItem)', desc: 'Commentaire supprimé.' }
    ],
    classes: ['at-comments', 'at-comment', 'at-comment__meta', 'at-comment__body', 'at-mention', 'at-event', 'at-composer', 'at-composer__box', 'at-composer__text'],
    related: ['at-drawer', 'at-avatar', 'at-property-list'],
    examples: [
      {
        title: 'Fil d’une tâche',
        desc: 'Écrire un message, mentionner avec @, modifier ou supprimer ses propres messages au survol.',
        frame: 'plain',
        code: `
          <div style="max-width: 460px">
            <AtComments :items="fil" me="Timothée Cornic" :people="['Alice', 'Bruno', 'Chloé']"
              @post="t => fil.push({ id: String(Date.now()), author: 'Timothée Cornic', text: t, at: new Date().toISOString() })"
              @edit="(c, t) => Object.assign(c, { text: t, editedAt: new Date().toISOString() })"
              @delete="c => fil.splice(fil.indexOf(c), 1)" />
          </div>
        `,
        setup: () => {
          const ago = (min: number) => new Date(Date.now() - min * 60000).toISOString()
          return {
            fil: ref([
              { id: 'e1', kind: 'event', author: 'Alice', text: 'a créé la tâche', at: ago(4 * 1440) },
              { id: 'c1', author: 'Bruno', text: 'Les notifications partent bien sur iOS. Android reste bloqué par le certificat, @Chloé tu peux regarder ?', at: ago(1500) },
              { id: 'e2', kind: 'event', author: 'Chloé', text: 'a passé le statut à En revue', at: ago(125) },
              { id: 'c2', author: 'Chloé', text: 'Certificat renouvelé, c’est bon des deux côtés.', at: ago(120) },
              { id: 'c3', author: 'Timothée Cornic', text: 'Parfait, je relis demain matin.', at: ago(30) }
            ])
          }
        }
      }
    ]
  },
  {
    name: 'AtModal',
    slug: 'at-modal',
    family: 'Contenu',
    tagline: 'Boîte de dialogue centrée : confirmer, ou une saisie courte et bloquante.',
    about: [
      'Téléportée dans `<body>`, avec voile, `role="dialog"`, `aria-modal`, focus déplacé sur le panneau à l’ouverture et rendu au déclencheur à la fermeture. Échap ferme — sauf si un popover est ouvert par-dessus.'
    ],
    rules: [
      'Titre à la question posée : « Supprimer la page ? »',
      'Le pied d’actions va de la moins engageante (gauche, `ghost`) à la plus engageante (droite, `primary` ou `danger`).',
      '`dismissible` à faux seulement si l’action est vraiment obligatoire : sinon on enferme la personne.',
      'Pour un panneau de détail que l’on consulte sans bloquer la page, utiliser `AtDrawer`.'
    ],
    models: [{ name: 'open', type: 'boolean', default: 'false', desc: 'Ouverture.' }],
    props: [
      { name: 'title', type: 'string', required: true, desc: 'Titre, aussi utilisé comme `aria-label`.' },
      { name: 'description', type: 'string', desc: 'Une ligne de contexte sous le titre.' },
      { name: 'size', type: `'sm' | 'md' | 'lg'`, default: `'md'`, desc: 'Largeur du panneau.' },
      { name: 'dismissible', type: 'boolean', default: 'true', desc: 'Bouton de fermeture et clic sur le voile.' }
    ],
    slots: [
      { name: 'default', type: '—', desc: 'Corps de la modale.' },
      { name: 'footer', type: '{ close: () => void }', desc: 'Actions ; `close` referme.' }
    ],
    classes: ['at-modal', 'at-modal--sm|--lg', 'at-modal__head', 'at-modal__title', 'at-modal__desc', 'at-modal__body', 'at-modal__foot', 'at-overlay'],
    related: ['at-drawer', 'at-popover'],
    examples: [
      {
        title: 'Confirmation de suppression',
        code: `
          <AtButton variant="danger" icon="trash" @click="ouvert = true">Supprimer la page</AtButton>
          <span v-if="fait" class="at-muted">Page déplacée dans la corbeille.</span>
          <AtModal v-model:open="ouvert" title="Supprimer la page ?"
            description="La page et ses sous-pages iront dans la corbeille pendant 30 jours.">
            <p style="margin: 0">Tu pourras la restaurer depuis la corbeille.</p>
            <template #footer="{ close }">
              <AtButton variant="ghost" @click="close">Annuler</AtButton>
              <AtButton variant="danger" @click="fait = true; close()">Supprimer</AtButton>
            </template>
          </AtModal>
        `,
        setup: () => ({ ouvert: ref(false), fait: ref(false) })
      }
    ]
  },

  {
    name: 'AtDrawer',
    slug: 'at-drawer',
    family: 'Contenu',
    tagline: 'Panneau latéral droit : la vue détaillée d’une ligne, sans quitter la liste.',
    about: [
      'C’est le « peek » des bases de données : on ouvre une ligne, on la modifie, on referme et la liste n’a pas bougé. Mêmes garanties d’accessibilité que la modale ; Échap ou un clic sur le voile ferment.'
    ],
    rules: [
      'Le titre de l’objet est éditable à même le panneau (`at-title-input`), pas dans l’en-tête.',
      'Les propriétés viennent d’`AtPropertyList`, avec le même schéma que la vue de données.',
      'Les actions de l’objet (ouvrir en pleine page, supprimer) vont dans le slot `actions`.',
      'Sur mobile, le panneau prend toute la largeur : `width` est une largeur maximale.'
    ],
    models: [{ name: 'open', type: 'boolean', default: 'false', desc: 'Ouverture.' }],
    props: [
      { name: 'label', type: 'string', desc: 'Nature de l’objet (« Tâche »), affichée en fil d’Ariane et comme `aria-label`.' },
      { name: 'width', type: 'number', default: '580', desc: 'Largeur maximale, en pixels.' }
    ],
    slots: [
      { name: 'default', type: '—', desc: 'Corps du panneau.' },
      { name: 'crumb', type: '—', desc: 'Fil d’Ariane, à la place de `label`.' },
      { name: 'actions', type: '—', desc: 'Actions, à gauche du bouton de fermeture.' }
    ],
    classes: ['at-drawer', 'at-drawer__head', 'at-drawer__crumb', 'at-drawer__body', 'at-overlay'],
    related: ['at-modal', 'at-property-list', 'at-data-view'],
    examples: [
      {
        title: 'Détail d’une tâche',
        code: `
          <AtButton icon="expand" @click="ouvert = true">Ouvrir la tâche</AtButton>
          <AtDrawer v-model:open="ouvert" label="Tâche">
            <template #actions>
              <AtButton variant="ghost" size="sm" icon="trash" icon-only label="Supprimer" />
            </template>
            <textarea v-model="tache.title" class="at-title-input" rows="1" aria-label="Titre" />
            <AtPropertyList :schema="schema" :row="tache" @update="(k, v) => tache[k] = v" />
            <div class="at-divider" />
            <label class="at-label" for="ex-desc">Description</label>
            <textarea id="ex-desc" v-model="tache.desc" class="at-bare-textarea" placeholder="Ajouter quelques lignes…" />
          </AtDrawer>
        `,
        setup: () => ({
          ouvert: ref(false),
          tache: ref<Record<string, any>>({ title: 'Notifications push', statut: 'doing', due: '2026-11-04', desc: '' }),
          schema: [
            { key: 'statut', name: 'Statut', type: 'status', options: [
              { value: 'todo', label: 'À faire' },
              { value: 'doing', label: 'En cours', tone: 'info' },
              { value: 'done', label: 'Terminé', tone: 'success' }
            ] },
            { key: 'due', name: 'Échéance', type: 'date' }
          ]
        })
      }
    ]
  }
]
