<script setup lang="ts">
import DocExample from '../DocExample.vue'

const paires = [
  { sujet: 'Bouton', bon: 'Publier', mauvais: 'PUBLIER MAINTENANT', pourquoi: 'Infinitif, sentence case. Les majuscules crient et ralentissent la lecture.' },
  { sujet: 'Item de menu', bon: 'Déplacer vers…', mauvais: 'Déplacer', pourquoi: 'Les points de suspension annoncent une étape supplémentaire. Sans elles, l’action est immédiate.' },
  { sujet: 'Erreur de champ', bon: 'Adresse incomplète : il manque le domaine.', mauvais: 'Erreur : champ invalide', pourquoi: 'Ce qui ne va pas, puis comment corriger. Jamais le mot « Erreur » en préfixe.' },
  { sujet: 'État vide', bon: 'Aucune tâche en retard.', mauvais: 'Aucune donnée', pourquoi: 'L’état vide parle de ce qui manque, dans les mots du métier.' },
  { sujet: 'Interrupteur', bon: 'Mode compact', mauvais: 'Désactiver le mode étendu', pourquoi: 'Le libellé décrit l’état activé, pas l’action de bascule.' },
  { sujet: 'Montant', bon: '12 480 €', mauvais: '12480EUR', pourquoi: 'Espace pour les milliers, unité après une espace, virgule décimale.' }
]

const TUTOIEMENT = `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-4)">
    <AtCard title="Dans un outil perso" description="Tutoiement">
      <AtField v-slot="f" label="Note privée" hint="Visible uniquement par toi.">
        <AtInput :id="f.id" placeholder="Un mot sur cette tâche…" />
      </AtField>
    </AtCard>
    <AtCard title="Sur un site public" description="Vouvoiement">
      <AtField v-slot="f" label="Votre e-mail" hint="Vous recevrez le guide en PDF.">
        <AtInput :id="f.id" icon="person" placeholder="prenom@exemple.fr" />
      </AtField>
    </AtCard>
  </div>
`
</script>

<template>
  <AtPage title="Ton et contenu" description="Français, sentence case, verbes à l’infinitif, nombres à la française." wide>
    <p class="doc-lead">
      Les mots font autant que les couleurs. Le système fixe quelques règles d’écriture pour que deux écrans
      faits à six mois d’intervalle parlent de la même voix.
    </p>

    <section class="doc-sec">
      <h2 class="t-heading-2">Règles</h2>
      <ul class="doc-list">
        <li>Sentence case partout : « Nouvelle page », pas « Nouvelle Page ». Les MAJUSCULES n’existent que via <code class="t-code">t-overline</code>.</li>
        <li>Tutoiement dans les outils perso, vouvoiement sur les sites publics.</li>
        <li>Boutons et items de menu à l’infinitif : « Publier », « Dupliquer », « Copier le lien ».</li>
        <li>Messages d’erreur : ce qui ne va pas, puis comment corriger.</li>
        <li>Nombres à la française : espace pour les milliers, virgule décimale, unité après une espace.</li>
        <li>Pas d’emoji dans l’interface. Une page peut avoir une icône, jamais un titre décoré.</li>
        <li>Le placeholder donne un exemple, jamais la consigne : la consigne est dans le label ou l’aide.</li>
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Avant / après</h2>
      <AtTable
        :columns="[
          { key: 'sujet', label: 'Où', width: '14%' },
          { key: 'bon', label: 'À écrire', width: '26%' },
          { key: 'mauvais', label: 'À éviter', width: '22%' },
          { key: 'pourquoi', label: 'Pourquoi' }
        ]"
        :rows="paires" row-key="sujet"
      >
        <template #cell-bon="{ value }"><strong style="font-weight: 550">{{ value }}</strong></template>
        <template #cell-mauvais="{ value }"><span style="color: var(--ink-subtle); text-decoration: line-through">{{ value }}</span></template>
      </AtTable>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Tutoiement ou vouvoiement</h2>
      <DocExample frame="plain" :code="TUTOIEMENT" />
    </section>
  </AtPage>
</template>
