import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // Point to your API server
        changeOrigin: true,
        // Uncomment if your API doesn't use /api prefix
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})



