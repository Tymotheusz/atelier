<script setup lang="ts">
import { href } from '../../router'

const principes = [
  {
    titre: 'Le contenu d’abord',
    corps: 'L’interface se retire : fonds chauds et neutres, peu de contours, aucune décoration. La couleur est réservée à l’action, à l’état et aux données. Ce qui reste à l’écran, c’est le texte de la messe, la ligne du tableau, le chiffre du mois.',
    icon: 'doc'
  },
  {
    titre: 'Un seul accent',
    corps: 'L’indigo ne marque que ce qui est cliquable ou sélectionné. Pas d’accent décoratif, pas de dégradé, pas de titre coloré. Du coup, quand il apparaît, il veut dire quelque chose.',
    icon: 'star'
  },
  {
    titre: 'Contours plutôt qu’ombres',
    corps: 'Les surfaces au repos se séparent par un contour. Les ombres sont réservées à ce qui flotte réellement : menus, popovers, modales. Une page n’est donc pas un empilement de cartes qui lèvent.',
    icon: 'checkbox'
  },
  {
    titre: 'Deux densités, un système',
    corps: 'Confortable par défaut, compacte pour les vues de données. Même rythme, mêmes couleurs, mêmes composants : seules les hauteurs changent. Une app compacte reste la même app.',
    icon: 'sliders'
  }
]
</script>

<template>
  <AtPage title="Principes" description="Quatre décisions, prises une fois, qui tiennent tout le reste." wide>
    <p class="doc-lead">
      Atelier est le système d’une seule personne pour ses sites et ses outils : un papier chaud, une encre
      presque noire, un seul indigo pour agir. Ces quatre principes expliquent pourquoi les tokens et les
      composants sont ce qu’ils sont — et comment trancher quand un cas nouveau se présente.
    </p>

    <section class="doc-sec">
      <div class="doc-grid doc-grid--wide">
        <AtCard v-for="p in principes" :key="p.titre" :title="p.titre">
          <template #actions><AtIcon :name="p.icon" /></template>
          <p style="margin: 0; color: var(--ink-muted); line-height: 22px">{{ p.corps }}</p>
        </AtCard>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Deux registres, les mêmes tokens</h2>
      <div class="doc-prose">
        <p>
          <strong>Le site</strong> est fait pour lire : colonne étroite, <code class="t-code">t-prose</code>,
          sections séparées par de l’espace plutôt que par des fonds colorés, contrôles en taille
          <code class="t-code">lg</code>. <strong>L’app</strong> est faite pour travailler : densité, tableaux,
          vues enregistrées, contrôles en <code class="t-code">md</code> et <code class="t-code">sm</code>.
        </p>
        <p>
          Les deux partagent la totalité des tokens : ce sont les mêmes couleurs, la même échelle d’espacement et
          la même typographie, employées à des rythmes différents. C’est ce qui fait qu’un site et son outil
          d’administration ont l’air d’avoir été dessinés le même jour.
        </p>
      </div>
      <div style="display: flex; gap: var(--space-2); flex-wrap: wrap">
        <AtButton icon="doc" :href="href('doc/canons/site')">Canon de site</AtButton>
        <AtButton icon="chart" :href="href('doc/canons/dashboard')">Canon de dashboard</AtButton>
        <AtButton icon="table" :href="href('doc/canons/base-de-donnees')">Canon de base de données</AtButton>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Ce que le système n’a pas</h2>
      <ul class="doc-list doc-list--avoid">
        <li>Pas de palette secondaire : un accent, des tons d’état, neuf couleurs d’étiquette, cinq couleurs de série.</li>
        <li>Pas de taille de texte hors des douze classes <code class="t-code">t-*</code>.</li>
        <li>Pas d’ombre portée décorative, pas de dégradé, pas de bordure colorée pour « animer » une carte.</li>
        <li>Pas d’emoji dans l’interface, pas de MAJUSCULES hors <code class="t-code">t-overline</code>.</li>
        <li>Pas de composant qui écrit dans les données du parent : un composant émet, le parent applique.</li>
      </ul>
    </section>
  </AtPage>
</template>
