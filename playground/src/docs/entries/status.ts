import { ref } from 'vue'
import { useToast } from '@tymotheusz/atelier'
import type { ComponentDoc } from '../types'

export const status: ComponentDoc[] = [
  {
    name: 'AtTag',
    slug: 'at-tag',
    family: 'Statut',
    tagline: 'Étiquette : valeur d’une propriété select ou multi-select, catégorie, mot-clé.',
    about: [
      'Neuf couleurs, sans signification système : la couleur est attribuée à une option une fois pour toutes, comme dans une base de données. Elle n’indique ni gravité ni état.'
    ],
    rules: [
      'Un ou deux mots, en sentence case.',
      'Plusieurs tags sur une même ligne : oui. Plusieurs badges : non.',
      'Pour un état d’objet (en ligne, échec, brouillon), c’est `AtBadge`.',
      'La couleur ne porte jamais seule l’information : le texte dit la valeur.'
    ],
    props: [
      { name: 'color', type: `'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red'`, default: `'gray'`, desc: 'Couleur de l’option.' },
      { name: 'label', type: 'string', desc: 'Texte, si le slot par défaut n’est pas utilisé.' }
    ],
    slots: [{ name: 'default', type: '—', desc: 'Texte de l’étiquette.' }],
    classes: ['at-tag', 'at-tag--brown|--orange|--yellow|--green|--blue|--purple|--pink|--red'],
    related: ['at-badge', 'at-property-value'],
    examples: [
      {
        title: 'Les neuf couleurs',
        code: `
          <AtTag>Personnel</AtTag>
          <AtTag color="brown">Lecture</AtTag>
          <AtTag color="orange">Urgent</AtTag>
          <AtTag color="yellow">Idée</AtTag>
          <AtTag color="green">Publié</AtTag>
          <AtTag color="blue">Dev</AtTag>
          <AtTag color="purple">Design</AtTag>
          <AtTag color="pink">Famille</AtTag>
          <AtTag color="red">Bloqué</AtTag>
        `
      }
    ]
  },

  {
    name: 'AtBadge',
    slug: 'at-badge',
    family: 'Statut',
    tagline: 'État d’un objet, avec pastille colorée.',
    rules: [
      'Un badge par ligne au plus : c’est l’état de l’objet, il n’y en a qu’un.',
      'Le texte dit toujours l’état ; la couleur ne suffit jamais.',
      '`neutral` pour brouillon, archivé, inactif.',
      'Pour une catégorie ou un mot-clé, utiliser `AtTag`.'
    ],
    props: [
      { name: 'tone', type: `'neutral' | 'success' | 'warning' | 'danger' | 'info'`, default: `'neutral'`, desc: 'Ton de l’état.' },
      { name: 'label', type: 'string', desc: 'Texte, si le slot par défaut n’est pas utilisé.' }
    ],
    slots: [{ name: 'default', type: '—', desc: 'Texte de l’état.' }],
    classes: ['at-badge', 'at-badge--success|--warning|--danger|--info'],
    related: ['at-tag', 'at-property-value'],
    examples: [
      {
        title: 'Tons',
        code: `
          <AtBadge tone="success">En ligne</AtBadge>
          <AtBadge tone="warning">En attente</AtBadge>
          <AtBadge tone="danger">Échec</AtBadge>
          <AtBadge tone="info">En cours</AtBadge>
          <AtBadge>Brouillon</AtBadge>
        `
      }
    ]
  },

  {
    name: 'AtAvatar',
    slug: 'at-avatar',
    family: 'Statut',
    tagline: 'Pastille d’identité : initiales ou photo.',
    about: ['Sans `src`, les initiales sont tirées du `name` (deux lettres au plus). Le `name` est aussi posé en `title`.'],
    rules: [
      '`sm` dans les cellules et les listes, `md` dans un en-tête de page, `lg` sur une fiche.',
      'Toujours fournir `name`, même avec une image : il sert d’alternative textuelle.',
      'Un avatar seul ne suffit pas à désigner une personne dans un tableau : afficher aussi le nom.'
    ],
    props: [
      { name: 'name', type: 'string', required: true, desc: 'Nom complet : source des initiales et de l’alternative textuelle.' },
      { name: 'src', type: 'string', desc: 'URL de la photo.' },
      { name: 'size', type: `'sm' | 'md' | 'lg'`, default: `'sm'`, desc: 'Diamètre.' },
      { name: 'tone', type: `'neutral' | 'accent'`, default: `'neutral'`, desc: '`accent` : fond indigo doux, réservé à l’utilisateur connecté (`AtUserMenu`).' }
    ],
    classes: ['at-avatar', 'at-avatar--md', 'at-avatar--lg', 'at-avatar--accent'],
    related: ['at-property-value'],
    examples: [
      {
        code: `
          <AtAvatar name="Alice Martin" />
          <AtAvatar name="Alice Martin" size="md" />
          <AtAvatar name="Bruno" size="lg" />
          <AtAvatar name="Timothée Cornic" size="md" tone="accent" />
          <span class="at-pv-person"><AtAvatar name="Chloé Lemaire" /> Chloé Lemaire</span>
        `
      }
    ]
  },

  {
    name: 'AtProgress',
    slug: 'at-progress',
    family: 'Statut',
    tagline: 'Barre d’avancement avec pourcentage.',
    about: ['La valeur est bornée à l’intervalle 0–`max` et arrondie au pourcentage entier ; `role="progressbar"` et les `aria-value*` sont posés.'],
    rules: [
      '`showLabel` à faux dans une cellule étroite, où la place manque.',
      '`label` donne le nom de ce qui progresse, pour les lecteurs d’écran.',
      'Pour un avancement calculé à partir de lignes, utiliser une propriété `progress` avec `compute`.'
    ],
    props: [
      { name: 'value', type: 'number', required: true, desc: 'Valeur courante.' },
      { name: 'max', type: 'number', default: '100', desc: 'Valeur maximale.' },
      { name: 'showLabel', type: 'boolean', default: 'true', desc: 'Affiche le pourcentage à droite.' },
      { name: 'label', type: 'string', desc: '`aria-label` de la barre.' }
    ],
    classes: ['at-progress', 'at-progress__track', 'at-progress__bar', 'at-progress__label'],
    related: ['at-stat', 'at-property-value'],
    examples: [
      {
        frame: 'col',
        code: `
          <div style="width: 280px"><AtProgress :value="avance" label="Avancement du projet" /></div>
          <div style="width: 280px"><AtProgress :value="7" :max="12" /></div>
          <div style="width: 120px"><AtProgress :value="avance" :show-label="false" /></div>
          <AtButton size="sm" @click="avance = (avance + 10) % 110">Avancer</AtButton>
        `,
        setup: () => ({ avance: ref(40) })
      }
    ]
  },

  {
    name: 'AtKbd',
    slug: 'at-kbd',
    family: 'Statut',
    tagline: 'Raccourci clavier.',
    rules: [
      'Les symboles tels qu’ils sont imprimés sur le clavier : `⌘K`, `⌥⏎`, `Échap`.',
      'Dans un menu, `AtMenuItem` place le raccourci tout seul via sa prop `kbd`.',
      'Dans un champ, `AtInput` l’affiche à droite via sa prop `kbd`.'
    ],
    slots: [{ name: 'default', type: '—', desc: 'Touches.' }],
    classes: ['at-kbd'],
    related: ['at-menu-item', 'at-input'],
    examples: [
      {
        code: `
          <span>Ouvrir la recherche <AtKbd>⌘K</AtKbd></span>
          <span>Enregistrer <AtKbd>⌘S</AtKbd></span>
          <span>Fermer <AtKbd>Échap</AtKbd></span>
        `
      }
    ]
  },

  {
    name: 'AtToaster',
    slug: 'at-toaster',
    family: 'Statut',
    tagline: 'Toasts : confirmation brève d’une action, avec « Annuler » ou « Ouvrir ».',
    about: [
      '`AtToaster` se monte **une fois**, à la racine de l’app : il affiche la file en bas à droite. `useToast()` renvoie `{ toast, dismiss }` et marche partout, y compris hors d’un composant (un store, un appel d’API) : la file est un état partagé du module.',
      'Trois toasts au plus sont visibles ; les suivants attendent, et leur minuteur ne part qu’à leur affichage. Le survol ou le focus suspend tous les minuteurs. Cliquer l’action l’exécute puis ferme le toast.',
      'La zone est `aria-live="polite"` ; un toast `danger` passe en `role="alert"` (assertif). Avec `prefers-reduced-motion`, ils apparaissent sans glisser.'
    ],
    rules: [
      'Une phrase courte au passé : « Idée classée dans Site vitrine. »',
      'Une seule action, à l’infinitif ou en un mot : « Annuler », « Ouvrir ».',
      'Pour une erreur qui bloque la saisie, un message dans la page (`AtField` en erreur), pas un toast qui disparaît.',
      '`duration: 0` garde le toast jusqu’à sa fermeture : à réserver à ce qui demande une réponse.'
    ],
    params: [
      { name: 'message', type: 'string', required: true, desc: 'Texte du toast.' },
      { name: 'tone', type: `'neutral' | 'success' | 'danger' | 'warning' | 'info'`, default: `'neutral'`, desc: 'Pictogramme et, pour `danger`, annonce assertive.' },
      { name: 'action', type: '{ label: string; onClick: () => void }', desc: 'Bouton d’action ; le toast se ferme après l’appel.' },
      { name: 'duration', type: 'number', default: '5000', desc: 'Millisecondes avant fermeture ; `0` : jusqu’à fermeture.' }
    ],
    exposes: [
      { name: 'toast', type: '(opts: ToastOptions) => number', desc: 'Ajoute un toast à la file et renvoie son identifiant.' },
      { name: 'dismiss', type: '(id?: number) => void', desc: 'Ferme un toast, ou tous sans identifiant.' }
    ],
    imports: `import { AtToaster, useToast } from '@tymotheusz/atelier'
// une fois, à la racine : <AtToaster />
const { toast, dismiss } = useToast()`,
    classes: ['at-toaster', 'at-toast', 'at-toast--success|--danger|--warning|--info', 'at-toast__icon', 'at-toast__msg', 'at-toast__action'],
    related: ['at-button', 'use-shortcut'],
    examples: [
      {
        title: 'Confirmer, proposer d’annuler',
        desc: 'Le toaster de cette documentation est monté une fois à la racine. Survoler un toast suspend sa fermeture.',
        code: `
          <AtButton @click="classer">Classer l’idée</AtButton>
          <AtButton variant="secondary" @click="toast({ message: 'Projet enregistré.', tone: 'success' })">Enregistrer</AtButton>
          <AtButton variant="danger" @click="toast({ message: 'Envoi impossible : connexion perdue.', tone: 'danger', duration: 0 })">Erreur</AtButton>
          <span class="at-muted">{{ etat }}</span>
        `,
        setup: () => {
          const { toast } = useToast()
          const etat = ref('Dans l’inbox')
          function classer() {
            etat.value = 'Classée dans Site vitrine'
            toast({
              message: 'Idée classée dans Site vitrine.',
              action: { label: 'Annuler', onClick: () => { etat.value = 'Dans l’inbox' } }
            })
          }
          return { toast, etat, classer }
        }
      }
    ]
  }
]
