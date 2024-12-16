import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  root: 'src', // this should point to your source folder where index.html is located
  build: {
    outDir: '../dist', // this specifies the output directory for the build
    rollupOptions: {
      input: 'src/index.html', // this should point to your index.html
    },
  },
  plugins: [react()],
});
