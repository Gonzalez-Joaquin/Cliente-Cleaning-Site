import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          layout: ['./src/Pages/HomePage/Layout/index.ts'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
