import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    }
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        manualChunks: {
          // React core libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // Animation library
          'framer-motion': ['framer-motion'],
          // Form handling
          'form-vendor': ['react-hook-form', 'zod'],
          // UI utilities
          'ui-vendor': ['lucide-react', 'react-intersection-observer'],
          // Database
          'db-vendor': ['@neondatabase/serverless']
        }
      }
    },
    chunkSizeWarningLimit: 600
  },
  define: {
    global: 'globalThis'
  },
  esbuild: {
    target: 'esnext'
  }
})
