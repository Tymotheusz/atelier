import { ref } from 'vue'
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
  }
]
