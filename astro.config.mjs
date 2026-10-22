import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://compuvecino.cl",

  vite: {
    plugins: [tailwindcss()],
  },
});