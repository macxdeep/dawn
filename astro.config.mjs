// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: set to the deployed URL (needed for canonical URLs / sitemap / RSS)
  // site: 'https://example.com',
  server: { port: 2511 },
  vite: { plugins: [tailwindcss()] },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: [400, 600, 800],
      // latin-ext covers "Ǝ" (U+018E) in the logo; plain latin stops at U+00FF
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Helvetica', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Lora',
      cssVariable: '--font-lora',
      weights: [500, 700],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
