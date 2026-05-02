import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // Necesitas instalar: npm install @types/node -D

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Ahora puedes usar '@' para referirte a 'src'
      '@': path.resolve(__dirname, './src'),
    },
  },
})