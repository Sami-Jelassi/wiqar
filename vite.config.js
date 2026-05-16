import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://54.37.159.225:6000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})