import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist' // Assurez-vous que ce répertoire correspond à ce que vous utilisez dans Vercel
  }
});
