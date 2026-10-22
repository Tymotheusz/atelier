import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@tymotheusz/atelier': fileURLToPath(new URL('../src/index.ts', import.meta.url)),
      // La documentation compile les templates de ses exemples à l'exécution :
      // l'aperçu et le code affiché sont le même texte, ils ne peuvent pas diverger.
      vue: 'vue/dist/vue.esm-bundler.js'
    }
  },
  define: { __VUE_PROD_DEVTOOLS__: 'false' },
  build: { outDir: fileURLToPath(new URL('../playground-dist', import.meta.url)), emptyOutDir: true }
})
