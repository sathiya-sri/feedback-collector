import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Explicitly set output directory
    emptyOutDir: true, // Clear the directory before building
    sourcemap: true, // Helpful for debugging
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          react: ['react', 'react-dom'],
          vendors: ['axios', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 5173, // Default Vite port
    strictPort: true, // Exit if port is in use
  },
  preview: {
    port: 4173, // Preview port
    strictPort: true,
  },
  // Netlify Function compatibility
  define: {
    'process.env': process.env,
  },
});