import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  base: './',
  plugins: [vue()],
  resolve: {
    alias: { '@tymotheusz/atelier': fileURLToPath(new URL('../src/index.ts', import.meta.url)) }
  },
  build: { outDir: fileURLToPath(new URL('../playground-dist', import.meta.url)), emptyOutDir: true }
})
