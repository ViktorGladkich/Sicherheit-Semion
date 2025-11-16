import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 1000, // убрать предупреждения

    rollupOptions: {
      output: {
        // Разделяем зависимости на отдельные чанки
        manualChunks: {
          react: ['react', 'react-dom'],
          lottie: ['lottie-react'],
        },
      },
    },
  },
})