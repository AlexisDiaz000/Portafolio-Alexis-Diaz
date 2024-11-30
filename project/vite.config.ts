import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portafolio-Alexis-Diaz/', // Corregido para coincidir con el nombre exacto del repositorio
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
