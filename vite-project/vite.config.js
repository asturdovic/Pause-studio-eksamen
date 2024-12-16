import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src', // Rodmappen til projektet, hvor dine kildefiler ligger
  build: {
    outDir: '../dist', // Udbudsområdet skal være udenfor 'src' mappen
    rollupOptions: {
      input: 'src/index.html', // Startpunktet for Vite byggeren
    },
  },
  plugins: [react()],
});
