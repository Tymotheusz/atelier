<script setup lang="ts">
import { computed, ref } from 'vue'
import { LOGO_TILE, brandGrid, logoApps, tokens } from '@tymotheusz/atelier'
import DocCode from '../DocCode.vue'

const apps = Object.entries(logoApps)
const tailles = [16, 24, 32, 64, 128]

/* ---------- Construction ---------- */
const choix = ref('atelier')
const glyphe = computed(() => logoApps[choix.value]?.glyph ?? '')
const lignes = Array.from({ length: brandGrid.size + 1 }, (_, i) => i)
const mesures = [
  { k: 'Grille', v: `${brandGrid.size} × ${brandGrid.size}, la tuile l’occupe entièrement.` },
  { k: 'Tuile', v: `Rayon ${brandGrid.radius} (25 %) sur trois coins.` },
  { k: 'Coin d’équerre', v: `Rayon ${brandGrid.corner}, en bas à gauche : la signature de la famille.` },
  { k: 'Zone utile', v: `${brandGrid.padding} → ${brandGrid.size - brandGrid.padding} ; les axes des traits restent entre 6 et 18.` },
  { k: 'Trait', v: `${brandGrid.stroke}, extrémités et jonctions arrondies — le gabarit des pictogrammes (1,5 sur 16 ≈ 2 sur 24).` },
  { k: 'Zone de protection', v: `${brandGrid.clearspace} (25 % du côté) tout autour, nom compris.` },
  { k: 'Nom', v: `Inter 650, corps 0,7 × le côté, approche −0,015 em, à 0,4 × le côté de la marque.` }
]

/* ---------- Contrastes, calculés depuis tokens.json ---------- */
type Theme = 'light' | 'dark'
const valeur = (nom: string, th: Theme) =>
  (tokens.color.tokens.find(t => t.name === nom)?.value as Record<Theme, string> | undefined)?.[th] ?? '#000000'
const lum = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map(c => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const ratio = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p)
  return (x + 0.05) / (y + 0.05)
}
const fr = (n: number) => n.toFixed(1).replace('.', ',') + ':1'
const famille = computed(() => apps.map(([id, a]) => ({
  id, ...a,
  clair: fr(ratio(valeur(a.color, 'light'), valeur('bg', 'light'))),
  sombre: fr(ratio(valeur(a.color, 'dark'), valeur('bg', 'dark')))
})))

const nouvelleApp = `import { registerLogoApps } from '@tymotheusz/atelier'

registerLogoApps({
  notes: {
    name: 'Notes',
    // Sur la grille de 24, au trait, axes entre 6 et 18.
    glyph: '<path d="M8 6h8v12H8z"/><path d="M10.5 10h3M10.5 13.5h3"/>',
    color: 'tag-yellow-fg'
  }
})

// puis : <AtLogo app="notes" />`
</script>

<template>
  <AtPage title="Marque" description="Le compas d’Atelier, et une famille de logos pour chaque app : même tuile, même trait, un glyphe et une couleur.">
    <p class="doc-lead">
      La marque est un outil posé sur l’établi : un compas d’atelier — une charnière, deux branches, une traverse —
      qui se lit aussi comme un A. Elle est dessinée sur la grille des pictogrammes, au même trait, et tient dans
      une tuile au coin d’équerre. Chaque app de la famille reprend cette tuile et ce trait, change le glyphe et la
      couleur : on reconnaît l’app à son dessin, et la famille à sa construction.
    </p>

    <div class="doc-brand-duo">
      <div v-for="th in ['light', 'dark']" :key="th" :data-theme="th" class="doc-brand-hero">
        <AtLogo :size="56" wordmark />
        <span class="doc-brand-caption">{{ th === 'light' ? 'Thème clair' : 'Thème sombre' }}</span>
      </div>
    </div>

    <section class="doc-sec">
      <h2 class="t-heading-2">Construction</h2>
      <p class="at-muted doc-brand-p">
        Une grille de 24, celle des pictogrammes à l’échelle 1,5. Tout ce qui varie d’une app à l’autre tient dans la
        zone utile ; tout le reste est commun.
      </p>
      <div class="doc-brand-build">
        <div class="doc-brand-figure">
          <div class="doc-brand-pick" role="group" aria-label="App montrée sur la grille">
            <button v-for="[id, a] in apps" :key="id" type="button" class="doc-brand-chip"
              :aria-pressed="choix === id" :title="a.name" @click="choix = id">
              <AtLogo :app="id" :size="20" :label="a.name" />
            </button>
          </div>
          <svg class="doc-brand-grid" :viewBox="`-1.5 -1.5 ${brandGrid.size + 3} ${brandGrid.size + 3}`" role="img" :aria-label="`Construction du logo ${logoApps[choix]?.name}`">
            <path class="doc-brand-grid__tile" :d="LOGO_TILE" />
            <g class="doc-brand-grid__lines">
              <path v-for="i in lignes" :key="'v' + i" :d="`M${i} 0V${brandGrid.size}`" />
              <path v-for="i in lignes" :key="'h' + i" :d="`M0 ${i}H${brandGrid.size}`" />
            </g>
            <rect class="doc-brand-grid__live" :x="brandGrid.padding" :y="brandGrid.padding"
              :width="brandGrid.size - 2 * brandGrid.padding" :height="brandGrid.size - 2 * brandGrid.padding" />
            <rect class="doc-brand-grid__axis" x="6" y="6" width="12" height="12" />
            <circle class="doc-brand-grid__corner" cx="0.3" cy="23.7" r="1.2" />
            <g class="doc-brand-grid__glyph" :stroke-width="brandGrid.stroke" v-html="glyphe" />
            <g class="doc-brand-grid__skeleton" v-html="glyphe" />
          </svg>
          <div class="doc-brand-legend">
            <span><i class="doc-brand-key doc-brand-key--live" />Zone utile 5 → 19</span>
            <span><i class="doc-brand-key doc-brand-key--axis" />Axes des traits 6 → 18</span>
            <span><i class="doc-brand-key doc-brand-key--corner" />Coin d’équerre</span>
          </div>
        </div>
        <dl class="doc-kv doc-brand-kv">
          <template v-for="m in mesures" :key="m.k"><dt>{{ m.k }}</dt><dd>{{ m.v }}</dd></template>
        </dl>
      </div>

      <h3 class="t-heading-3">Zone de protection</h3>
      <div class="doc-brand-clear">
        <div class="doc-brand-clear__box"><AtLogo :size="40" wordmark /></div>
        <div class="doc-brand-clear__box"><AtLogo :size="40" /></div>
        <p class="at-muted doc-brand-p">
          Un quart du côté de la marque, tout autour : rien — texte, contour, bord d’écran — n’entre dans la zone
          pointillée.
        </p>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Tailles</h2>
      <p class="at-muted doc-brand-p">
        Le même dessin de 16 à 512 px, sans version simplifiée : le trait reste à 1/12 du côté. En dessous de 16 px,
        la marque n’est plus lisible — utiliser un pictogramme.
      </p>
      <div class="doc-brand-duo">
        <div v-for="th in ['light', 'dark']" :key="th" :data-theme="th" class="doc-brand-sizes">
          <div v-for="s in tailles" :key="s" class="doc-brand-size">
            <AtLogo :size="s" />
            <span class="doc-brand-caption">{{ s }} px</span>
          </div>
        </div>
      </div>
      <ul class="doc-list">
        <li><strong>16 px</strong> : favicon, onglet du navigateur.</li>
        <li><strong>20 px</strong> : en tête de barre latérale, à côté du nom de l’app (<code>at-workspace</code>).</li>
        <li><strong>32 – 48 px</strong> : sélecteur d’apps, écran de connexion, page d’accueil d’un outil.</li>
        <li><strong>64 px et plus</strong> : icône d’application installée, page de présentation.</li>
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">La famille</h2>
      <p class="at-muted doc-brand-p">
        Une couleur par app, prise dans les tokens. La tuile est pleine, le glyphe est posé en <code class="t-code">bg</code> :
        une seule paire à vérifier, qui garantit à la fois la lisibilité du glyphe et la visibilité de la tuile sur la page
        (≥ 3:1, élément graphique). Les quatre apps principales prennent les couleurs d’entité
        <code class="t-code">chart-2</code> à <code class="t-code">chart-5</code> ; les suivantes, les encres d’étiquette
        <code class="t-code">tag-*-fg</code>.
      </p>
      <div class="doc-brand-duo doc-brand-duo--stack">
        <div v-for="th in ['light', 'dark']" :key="th" :data-theme="th" class="doc-brand-family">
          <span class="doc-brand-caption doc-brand-family__theme">{{ th === 'light' ? 'Clair' : 'Sombre' }}</span>
          <div v-for="a in famille" :key="a.id" class="doc-brand-member">
            <AtLogo :app="a.id" :size="48" />
            <span class="doc-brand-caption">{{ a.name }}</span>
          </div>
        </div>
      </div>
      <div class="doc-grid">
        <div v-for="a in famille" :key="a.id" class="doc-token">
          <AtLogo :app="a.id" :size="34" />
          <span class="doc-token__body">
            <span class="t-body-strong">{{ a.name }}</span>
            <code class="doc-token__name">app="{{ a.id }}" · --{{ a.color }}</code>
            <span class="doc-token__use">Contre <code>bg</code> : {{ a.clair }} en clair, {{ a.sombre }} en sombre.</span>
          </span>
        </div>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">En situation</h2>
      <div class="doc-brand-duo">
        <div v-for="th in ['light', 'dark']" :key="th" :data-theme="th" class="doc-brand-scene">
          <div class="doc-brand-tab">
            <AtLogo :size="16" />
            <span class="at-ellipsis">Atelier — design system</span>
          </div>
          <div class="doc-brand-side">
            <div class="at-workspace"><AtLogo app="mail" />Courrier</div>
            <AtNavGroup>
              <AtNavItem icon="inbox" active :count="12">Boîte de réception</AtNavItem>
              <AtNavItem icon="star">Suivis</AtNavItem>
            </AtNavGroup>
          </div>
        </div>
      </div>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Règles</h2>
      <h3 class="t-heading-3">À faire</h3>
      <ul class="doc-list">
        <li>Poser la marque avec <code>AtLogo</code>, ou en CSS seul avec les fichiers de <code>brand/</code> : jamais un dessin refait à la main.</li>
        <li>En tête de barre latérale, la marque de l’app à 20 px suivie de son nom en texte : c’est le logo de l’espace de travail.</li>
        <li>Garder la zone de protection, et la marque à 16 px au moins.</li>
        <li>Pour un document hors de l’interface, préférer <code>brand/mono/</code> (une couleur, glyphe évidé) sur un fond chargé.</li>
      </ul>
      <h3 class="t-heading-3">À ne pas faire</h3>
      <ul class="doc-list doc-list--avoid">
        <li>Arrondir le coin d’équerre, tourner, étirer ou détourer la tuile.</li>
        <li>Recolorer le glyphe, ajouter une ombre, un contour ou un dégradé.</li>
        <li>Mettre une initiale ou un pictogramme du jeu courant dans la tuile.</li>
        <li>Donner l’indigo à une app (<code>accent</code>, <code>chart-1</code>, <code>tag-purple-*</code>) : il reste réservé à l’action.</li>
        <li>Composer un nom « Atelier Tâches » en dessin : le nom de l’app s’écrit en texte, à côté.</li>
      </ul>
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Ajouter une app</h2>
      <ol class="doc-brand-steps">
        <li><strong>Un objet, pas une lettre.</strong> Choisir l’objet qui dit ce que fait l’app (le compteur du tableau de bord, l’enveloppe du courrier).</li>
        <li><strong>Le dessiner sur la grille de 24</strong>, au trait 2, en deux à quatre traits, axes entre 6 et 18, centré optiquement. Un élément plein porte <code>fill="currentColor"</code>.</li>
        <li><strong>Vérifier à 16 px</strong> : les contre-formes ne doivent pas se boucher. Simplifier plutôt qu’ajouter un détail.</li>
        <li><strong>Choisir une couleur libre</strong> parmi les <code>tag-*-fg</code> (ou <code>chart-*</code> s’il en reste), jamais l’indigo, jamais celle d’une app voisine. Le contraste contre <code>bg</code> doit tenir 3:1 dans les deux thèmes.</li>
        <li><strong>L’enregistrer</strong> : dans le paquet, une entrée de <code>logoApps</code> dans <code>src/brand.ts</code> puis <code>npm run build:brand</code> (fichiers SVG) ; dans une app, <code>registerLogoApps</code>.</li>
      </ol>
      <DocCode label="logo.ts" :code="nouvelleApp" />
    </section>

    <section class="doc-sec">
      <h2 class="t-heading-2">Fichiers</h2>
      <dl class="doc-kv">
        <dt>brand/atelier-logo.svg</dt><dd>Marque et nom, une couleur (<code>currentColor</code>), glyphe évidé.</dd>
        <dt>brand/mono/&lt;app&gt;.svg</dt><dd>Marque seule de chaque app, une couleur, glyphe évidé.</dd>
        <dt>brand/color/&lt;app&gt;.svg</dt><dd>Marque en couleur, autonome : valeurs des tokens, thème sombre par <code>prefers-color-scheme</code>. Favicon.</dd>
        <dt>brand/color/atelier-logo.svg</dt><dd>Marque et nom en couleur, autonome.</dd>
      </dl>
      <p class="at-muted doc-brand-p">
        Tous générés par <code class="t-code">npm run build:brand</code> depuis <code class="t-code">src/brand.ts</code>
        et <code class="t-code">tokens/tokens.json</code>, et publiés avec le paquet :
        <code class="t-code">@tymotheusz/atelier/brand/color/atelier.svg</code>.
      </p>
    </section>
  </AtPage>
</template>
