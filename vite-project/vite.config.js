import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', // Dette angiver, at root-mappen er den aktuelle mappe, som indeholder `index.html`
  build: {
    outDir: 'dist', // Output-mappen
    rollupOptions: {
      input: 'index.html', // Startpunkt for bygningen
    },
  },
  plugins: [react()],
});
