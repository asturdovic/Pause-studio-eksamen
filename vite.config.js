import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', // Sæt root til den aktuelle mappe
  build: {
    outDir: 'dist', // Angiv output-mappen
    rollupOptions: {
      input: 'index.html', // Angiv korrekt input-fil
    },
  },
  plugins: [react()],
});

