import { computed, ref } from 'vue'
import type { ComponentDoc } from '../types'

export const forms: ComponentDoc[] = [
  {
    name: 'AtField',
    slug: 'at-field',
    family: 'Formulaires',
    tagline: 'Enveloppe un contrôle : label, texte d’aide, message d’erreur.',
    about: [
      'Le slot par défaut reçoit `{ id, invalid, describedby }` : l’`id` est relié au `for` du label, `invalid` vaut vrai dès qu’une `error` est passée. Un `id` est généré si aucun n’est fourni.'
    ],
    rules: [
      'Le label est toujours visible. Le placeholder donne un exemple, jamais la consigne.',
      'Message d’erreur : ce qui ne va pas, puis comment corriger — sans « Erreur : ».',
      'Largeur du champ = largeur de la donnée attendue. Un code postal n’occupe pas toute la ligne.',
      '`error` remplace `hint` : ne pas afficher les deux.'
    ],
    props: [
      { name: 'label', type: 'string', desc: 'Libellé du champ.' },
      { name: 'hint', type: 'string', desc: 'Texte d’aide sous le contrôle.' },
      { name: 'error', type: 'string', desc: 'Message d’erreur ; remplace `hint` et passe `invalid` à vrai.' },
      { name: 'id', type: 'string', desc: 'Identifiant imposé, sinon généré.' }
    ],
    slots: [{ name: 'default', type: '{ id: string; invalid: boolean; describedby?: string }', desc: 'Le contrôle de saisie.' }],
    classes: ['at-field', 'at-label', 'at-hint', 'at-hint--error', 'at-field-row'],
    related: ['at-input', 'at-select', 'at-textarea'],
    examples: [
      {
        title: 'Label, aide et erreur',
        frame: 'grid',
        code: `
          <AtField v-slot="f" label="Nom du projet" hint="Visible dans la barre latérale.">
            <AtInput :id="f.id" v-model="nom" />
          </AtField>
          <AtField v-slot="f" label="E-mail"
            :error="mail.includes('.') ? undefined : 'Adresse incomplète : il manque le domaine.'">
            <AtInput :id="f.id" v-model="mail" :invalid="f.invalid" />
          </AtField>
        `,
        setup: () => ({ nom: ref('Refonte du site'), mail: ref('alice@exemple') })
      }
    ]
  },

  {
    name: 'AtInput',
    slug: 'at-input',
    family: 'Formulaires',
    tagline: 'Champ de saisie sur une ligne, avec icône et raccourci optionnels.',
    about: [
      'Les attributs non déclarés (`autocomplete`, `maxlength`, `inputmode`, `aria-*`…) sont posés sur l’`<input>` lui-même. Le composant expose `focus()` et `el`.'
    ],
    rules: [
      '`icon` à gauche pour qualifier la saisie (recherche, URL) ; `kbd` à droite pour annoncer le raccourci qui y amène.',
      '`size="sm"` dans les barres d’outils et les tableaux, `md` partout ailleurs.',
      'Un champ en erreur reçoit `invalid` : la bordure passe en `danger` et `aria-invalid` est posé.'
    ],
    models: [{ name: 'modelValue', type: 'string | number | null', desc: 'Valeur du champ.' }],
    props: [
      { name: 'type', type: 'string', default: `'text'`, desc: 'Type natif de l’input.' },
      { name: 'placeholder', type: 'string', desc: 'Exemple de valeur, jamais la consigne.' },
      { name: 'icon', type: 'string', desc: 'Pictogramme à gauche.' },
      { name: 'kbd', type: 'string', desc: 'Raccourci affiché à droite, ex. `⌘K`.' },
      { name: 'invalid', type: 'boolean', desc: 'État d’erreur (`aria-invalid`).' },
      { name: 'disabled', type: 'boolean', desc: 'Désactive le champ.' },
      { name: 'size', type: `'sm' | 'md'`, default: `'md'`, desc: 'Hauteur du champ.' }
    ],
    classes: ['at-input', 'at-input-wrap'],
    related: ['at-field', 'at-textarea', 'at-select', 'at-kbd'],
    examples: [
      {
        title: 'Variantes',
        frame: 'grid',
        code: `
          <AtField v-slot="f" label="Recherche">
            <AtInput :id="f.id" v-model="q" icon="search" kbd="⌘K" placeholder="Rechercher une page…" />
          </AtField>
          <AtField v-slot="f" label="Estimation" hint="En heures.">
            <AtInput :id="f.id" v-model="h" type="number" style="max-width: 120px" />
          </AtField>
          <AtField v-slot="f" label="Champ désactivé">
            <AtInput :id="f.id" model-value="Lecture seule" disabled />
          </AtField>
          <AtField v-slot="f" label="Petite taille">
            <AtInput :id="f.id" v-model="q" size="sm" icon="filter" />
          </AtField>
        `,
        setup: () => ({ q: ref(''), h: ref(6) })
      }
    ]
  },

  {
    name: 'AtTextarea',
    slug: 'at-textarea',
    family: 'Formulaires',
    tagline: 'Saisie multiligne, pour une description ou une note.',
    rules: [
      '`rows` donne la hauteur de départ : 3 lignes par défaut, davantage pour un contenu rédigé.',
      'Pour un titre éditable à même la page, préférer `at-title-input` ou `at-bare-textarea` en CSS.'
    ],
    models: [{ name: 'modelValue', type: 'string | null', desc: 'Contenu du champ.' }],
    props: [
      { name: 'placeholder', type: 'string', desc: 'Exemple de contenu.' },
      { name: 'rows', type: 'number', default: '3', desc: 'Hauteur initiale, en lignes.' },
      { name: 'invalid', type: 'boolean', desc: 'État d’erreur.' },
      { name: 'disabled', type: 'boolean', desc: 'Désactive le champ.' }
    ],
    classes: ['at-input', 'at-bare-textarea', 'at-title-input'],
    related: ['at-field', 'at-input'],
    examples: [
      {
        code: `
          <AtField v-slot="f" label="Notes" hint="Quelques lignes pour situer le projet." style="width: 100%">
            <AtTextarea :id="f.id" v-model="notes" :rows="4" placeholder="Contexte, décisions, liens utiles…" />
          </AtField>
        `,
        setup: () => ({ notes: ref('') })
      }
    ]
  },

  {
    name: 'AtSelect',
    slug: 'at-select',
    family: 'Formulaires',
    tagline: 'Choix unique dans une liste courte, sur un <select> natif.',
    about: [
      'S’appuie sur le `<select>` du navigateur : clavier, recherche à la frappe et affichage mobile sont ceux du système. Pour un choix avec couleurs, icônes ou recherche, utiliser une propriété `select` ou `status` d’`AtDataView`.'
    ],
    rules: [
      '`placeholder` ajoute une première option désactivée, sélectionnée quand la valeur est `null`.',
      'Au-delà d’une dizaine d’options, préférer un champ avec recherche.',
      'Les options gardent l’ordre métier, pas l’ordre alphabétique, quand il a un sens (statuts, priorités).'
    ],
    models: [{ name: 'modelValue', type: 'V | null', desc: 'Valeur choisie.' }],
    props: [
      { name: 'options', type: 'SelectOption<V>[]', required: true, desc: '`{ value, label, disabled? }`.' },
      { name: 'placeholder', type: 'string', desc: 'Option vide affichée tant que rien n’est choisi.' },
      { name: 'disabled', type: 'boolean', desc: 'Désactive le champ.' },
      { name: 'invalid', type: 'boolean', desc: 'État d’erreur.' },
      { name: 'size', type: `'sm' | 'md'`, default: `'md'`, desc: 'Hauteur du champ.' }
    ],
    classes: ['at-select'],
    related: ['at-field', 'at-tag', 'at-data-view'],
    examples: [
      {
        title: 'Statut d’une tâche',
        frame: 'grid',
        code: `
          <AtField v-slot="f" label="Statut">
            <AtSelect :id="f.id" v-model="statut" :options="options" />
          </AtField>
          <AtField v-slot="f" label="Responsable" hint="Vide par défaut.">
            <AtSelect :id="f.id" v-model="qui" placeholder="Choisir une personne"
              :options="[{ value: 'u1', label: 'Alice' }, { value: 'u2', label: 'Bruno' }]" />
          </AtField>
        `,
        setup: () => ({
          statut: ref('doing'),
          qui: ref(null),
          options: [
            { value: 'todo', label: 'À faire' },
            { value: 'doing', label: 'En cours' },
            { value: 'done', label: 'Terminé' }
          ]
        })
      }
    ]
  },

  {
    name: 'AtCheckbox',
    slug: 'at-checkbox',
    family: 'Formulaires',
    tagline: 'Case à cocher : choix dans une liste, sélection de lignes, consentement.',
    about: [
      'Avec un `label` ou un slot, le contrôle est enveloppé dans un `<label class="at-toggle">` cliquable. Sans libellé, seule la case est rendue : penser à un `aria-label`.'
    ],
    rules: [
      '`indeterminate` pour une sélection partielle (case d’en-tête d’un tableau).',
      'Pour un réglage qui s’applique immédiatement, c’est `AtSwitch` qu’il faut.',
      'Ne jamais laisser une case sans libellé ni `aria-label`.'
    ],
    models: [{ name: 'modelValue', type: 'boolean', default: 'false', desc: 'État coché.' }],
    props: [
      { name: 'label', type: 'string', desc: 'Libellé cliquable.' },
      { name: 'indeterminate', type: 'boolean', desc: 'Sélection partielle.' },
      { name: 'disabled', type: 'boolean', desc: 'Désactive le contrôle.' }
    ],
    slots: [{ name: 'default', type: '—', desc: 'Libellé, si plus riche qu’un texte.' }],
    classes: ['at-check', 'at-toggle'],
    related: ['at-switch'],
    examples: [
      {
        title: 'Liste et sélection partielle',
        frame: 'col',
        code: `
          <AtCheckbox :model-value="tout" :indeterminate="partiel" label="Toutes les étiquettes"
            @update:model-value="v => choix = v ? [...toutes] : []" />
          <AtCheckbox v-for="t in toutes" :key="t" :model-value="choix.includes(t)" :label="t"
            @update:model-value="v => choix = v ? [...choix, t] : choix.filter(x => x !== t)" />
          <AtCheckbox model-value disabled label="Archivées (verrouillé)" />
        `,
        setup: () => {
          const toutes = ['Front', 'Back', 'Design']
          const choix = ref<string[]>(['Front'])
          return {
            toutes, choix,
            tout: computed(() => choix.value.length === toutes.length),
            partiel: computed(() => choix.value.length > 0 && choix.value.length < toutes.length)
          }
        }
      }
    ]
  },

  {
    name: 'AtSwitch',
    slug: 'at-switch',
    family: 'Formulaires',
    tagline: 'Interrupteur : un réglage qui s’applique sans bouton Enregistrer.',
    rules: [
      'Le libellé décrit l’état activé : « Mode compact », pas « Désactiver le mode étendu ».',
      'Pas de bouton de validation à côté : si la valeur doit être enregistrée explicitement, utiliser une case à cocher.',
      'Porte `role="switch"` : l’état est annoncé par les lecteurs d’écran.'
    ],
    models: [{ name: 'modelValue', type: 'boolean', default: 'false', desc: 'État activé.' }],
    props: [
      { name: 'label', type: 'string', desc: 'Libellé cliquable.' },
      { name: 'disabled', type: 'boolean', desc: 'Désactive le contrôle.' }
    ],
    slots: [{ name: 'default', type: '—', desc: 'Libellé.' }],
    classes: ['at-switch', 'at-toggle'],
    related: ['at-checkbox'],
    examples: [
      {
        frame: 'col',
        code: `
          <AtSwitch v-model="notif" label="Notifications par e-mail" />
          <AtSwitch v-model="hebdo" label="Résumé hebdomadaire" :disabled="!notif" />
          <p v-if="!notif" class="at-muted">Le résumé suit les notifications : il reste désactivé tant qu’elles sont coupées.</p>
        `,
        setup: () => ({ notif: ref(true), hebdo: ref(false) })
      }
    ]
  }
]
