import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Exportación por defecto de la configuración del proyecto : https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
