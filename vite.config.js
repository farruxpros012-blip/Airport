import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves project sites at /<repo>/ — set base accordingly via env.
// Override with VITE_BASE=/Airport/ in CI for project sites.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    port: 5173,
  },
});
