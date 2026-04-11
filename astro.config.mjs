import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  site: 'https://spabellastetic.com',
  output: 'static',
  devToolbar: {
    enabled: false
  },
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    plugins: [tailwindcss()]
  }
});