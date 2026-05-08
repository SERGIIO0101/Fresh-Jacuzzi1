import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import path from 'path'

// Configuración para que __dirname funcione en entornos ESM (Vite estándar)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Configuración robusta del alias @
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    // ESTO ES CLAVE: Fuerza a Vite a pre-empaquetar lucide-react 
    // y evita los errores de "export not found"
    include: ['lucide-react'],
  },
  // Opcional: Esto ayuda si tienes problemas persistentes de caché en el navegador
  server: {
    watch: {
      usePolling: true,
    },
  },
})