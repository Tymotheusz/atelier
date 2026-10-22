import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      formats: ['es'],
      fileName: () => 'atelier.js'
    },
    rollupOptions: { external: ['vue'] },
    sourcemap: true,
    emptyOutDir: true
  },
  test: { environment: 'happy-dom' }
} as any)
