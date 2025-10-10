import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

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
    // Use esbuild instead of rollup for better Vercel compatibility
    target: 'esnext',
    minify: 'esbuild',
    // Disable rollup to avoid platform issues
    rollupOptions: undefined
  },
  define: {
    global: 'globalThis'
  },
  // Use esbuild for everything
  esbuild: {
    target: 'esnext'
  }
})
