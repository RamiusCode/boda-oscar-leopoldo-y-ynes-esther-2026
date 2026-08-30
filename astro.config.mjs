// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL de despliegue: de aquí sale la ruta absoluta de og:image.
  // Si cambia el dominio, hay que actualizarla o la miniatura de
  // WhatsApp deja de cargar.
  site: 'https://boda-oscar-leopoldo-y-ynes-esther-2.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});