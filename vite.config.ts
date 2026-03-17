import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Custom domain — no path prefix needed
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})