<script setup lang="ts">
import { tokens } from '@tymotheusz/atelier'

const rayons = tokens.radius.tokens
const ombres = tokens.shadow.tokens
</script>

<template>
  <AtPage title="Formes et ombres" description="Un rayon par usage, et trois ombres réservées à ce qui flotte." wide>
    <p class="doc-lead">
      Les surfaces au repos se séparent par un contour, pas par une ombre. Une ombre dit « ceci est au-dessus » :
      menus, popovers, modales, et le seul survol de carte. Partout ailleurs, <code class="t-code">border</code> suffit.
    </p>

    <section class="doc-sec">
      <h2 class="t-heading-2">Rayons</h2>
      <div class="doc-grid">
        <div v-for="t in rayons" :key="t.name" class="doc-shape">
          <span class="doc-shape__box" :style="{ borderRadius: t.value }" />
          <code class="doc-token__name">--{{ t.name }}</code>
          <span class="doc-token__val">{{ t.value }}</span>
          <span class="doc-token__use">{{ t.usage }}</span>
        </div>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Ombres</h2>
      <div class="doc-grid doc-grid--wide">
        <div v-for="t in ombres" :key="t.name" class="doc-shape">
          <span class="doc-shape__float" :style="{ boxShadow: `var(--${t.name})` }" />
          <code class="doc-token__name">--{{ t.name }}</code>
          <span class="doc-token__use">{{ t.usage }}</span>
        </div>
      </div>
      <ul class="doc-list">
        <li>Une carte au repos n’a pas d’ombre ; au survol, <code class="t-code">shadow-sm</code> et <code class="t-code">border-strong</code>.</li>
        <li><code class="t-code">shadow-md</code> pour les menus, popovers et toasts ; <code class="t-code">shadow-lg</code> pour les modales et la palette de commandes.</li>
        <li>Rien d’autre n’a d’ombre. Pas d’ombre sur un bouton, pas d’ombre sur un champ.</li>
        <li>Les valeurs diffèrent entre les deux thèmes : en sombre, l’ombre est plus dense pour rester visible.</li>
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">En situation</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--space-4)">
        <AtCard title="Carte" description="radius-lg, contour, aucune ombre au repos" />
        <AtCard href="#/doc/fondations/formes" title="Carte-lien" description="Survolez : border-strong + shadow-sm" />
        <div>
          <AtMenu label="Menu" :min-width="200">
            <AtMenuItem icon="copy">Dupliquer</AtMenuItem>
            <AtMenuItem icon="link">Copier le lien</AtMenuItem>
          </AtMenu>
          <p class="at-muted" style="font-size: 12px; margin: var(--space-2) 0 0">radius-lg + shadow-md</p>
        </div>
      </div>
    </section>
  </AtPage>
</template>
