import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: { chunkSizeWarningLimit: 1600, }, // Added
  base: '/behind-closed-doors/'
})
