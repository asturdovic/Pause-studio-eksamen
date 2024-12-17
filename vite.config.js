import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Pause-studio-eksamen/', // Make sure to use your GitHub repo name
  build: {
    outDir: 'dist', // Set the output directory
    rollupOptions: {
      input: 'index.html', // Ensure this points to your entry file
    },
  },
  plugins: [react()],
});
