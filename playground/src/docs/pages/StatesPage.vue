<script setup lang="ts">
import { ref } from 'vue'
import DocCode from '../DocCode.vue'
import DocExample from '../DocExample.vue'

const SURVOL = `
  <div style="width: 240px; background: var(--surface-sunken); padding: 8px; border-radius: var(--radius-lg)">
    <AtNavGroup>
      <AtNavItem icon="home" active>Page courante (surface-active)</AtNavItem>
      <AtNavItem icon="inbox">Survolez-moi (surface-hover)</AtNavItem>
    </AtNavGroup>
  </div>
  <div style="display: flex; gap: var(--space-2); flex-wrap: wrap">
    <AtButton variant="primary">Survolez (accent-hover)</AtButton>
    <AtButton>Survolez (surface-hover)</AtButton>
  </div>
`

const FOCUS = `
  <p class="at-muted">Parcourez au clavier : chaque arrêt doit être visible sans ambiguïté, dans les deux thèmes.</p>
  <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; align-items: center">
    <AtButton>Bouton</AtButton>
    <AtInput model-value="Champ" />
    <AtCheckbox :model-value="true" label="Case" />
    <AtSwitch :model-value="true" label="Interrupteur" />
    <AtTag>Non focusable</AtTag>
  </div>
`

const DESACTIVE = `
  <div style="display: flex; gap: var(--space-3); flex-wrap: wrap; align-items: center">
    <AtButton variant="primary" disabled>Publier</AtButton>
    <span class="at-muted" style="font-size: 13px">Ajoute une date de publication pour activer ce bouton.</span>
  </div>
  <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; align-items: center">
    <AtInput model-value="Lecture seule" disabled />
    <AtCheckbox :model-value="true" disabled label="Verrouillé par l’administrateur" />
  </div>
`

const ERREUR = `
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-4)">
    <AtField v-slot="f" label="E-mail" :error="mail.includes('.') ? undefined : 'Adresse incomplète : il manque le domaine.'">
      <AtInput :id="f.id" v-model="mail" :invalid="f.invalid" />
    </AtField>
    <AtField v-slot="f" label="Estimation" hint="En heures, nombre entier.">
      <AtInput :id="f.id" v-model="h" type="number" />
    </AtField>
  </div>
`
</script>

<template>
  <AtPage title="États" description="Survol, focus, désactivé, erreur, sélection : les mêmes signaux partout.">
    <p class="doc-lead">
      Un état se lit toujours à deux signaux : la couleur, et quelque chose d’autre — une bordure, un mot, une
      icône. C’est ce qui permet de garder l’interface lisible en thème sombre, à faible contraste et pour qui
      distingue mal les couleurs.
    </p>

    <section class="doc-sec">
      <h2 class="t-heading-2">Survol</h2>
      <ul class="doc-list">
        <li>Survol neutre : fond <code class="t-code">surface-hover</code>.</li>
        <li>Survol d’un élément accentué : <code class="t-code">accent-hover</code>.</li>
        <li>Item courant ou pressé : <code class="t-code">surface-active</code>.</li>
        <li>La transition de couleur dure <code class="t-code">duration-fast</code>.</li>
      </ul>
      <DocExample frame="col" :code="SURVOL" />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Focus clavier</h2>
      <ul class="doc-list">
        <li>Contour de 2 px plein en <code class="t-code">focus</code>, décalé de 2 px.</li>
        <li>Sur un champ, le décalage est nul : c’est la bordure qui passe en <code class="t-code">focus</code>.</li>
        <li>Contraste ≥ 3:1 sur tous les sols, dans les deux thèmes.</li>
        <li>Jamais <code class="t-code">outline: none</code> sans remplacement visible.</li>
      </ul>
      <DocExample frame="col" :code="FOCUS" />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Désactivé</h2>
      <ul class="doc-list">
        <li>Fond <code class="t-code">surface-sunken</code>, texte <code class="t-code">ink-disabled</code>, curseur interdit.</li>
        <li><strong>Et une explication à proximité</strong> : un contrôle désactivé sans raison est une impasse.</li>
        <li>Préférer un bouton actif qui explique ce qui manque à un bouton grisé muet.</li>
      </ul>
      <DocExample frame="col" :code="DESACTIVE" />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Erreur</h2>
      <ul class="doc-list">
        <li>Bordure <code class="t-code">danger</code> et message <code class="t-code">at-hint--error</code>, relié par <code class="t-code">aria-describedby</code>.</li>
        <li>Le message dit ce qui ne va pas, puis comment corriger. Sans « Erreur : ».</li>
        <li>L’erreur s’affiche quand la correction est possible, pas à chaque frappe.</li>
      </ul>
      <DocExample frame="plain" :code="ERREUR" :setup="() => ({ mail: ref('timothee@exemple'), h: ref(6) })" />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Sélection</h2>
      <ul class="doc-list">
        <li>Ligne sélectionnée : <code class="t-code">aria-selected="true"</code> et fond <code class="t-code">accent-soft</code>.</li>
        <li>C’est le seul emploi décoratif de l’accent : il dit « ceci est retenu ».</li>
        <li>Une sélection multiple affiche toujours son compte et ses actions groupées.</li>
      </ul>
      <DocCode label="CSS" :code="`.at-table tr[aria-selected='true'] { background: var(--accent-soft); }`" />
    </section>
  </AtPage>
</template>
