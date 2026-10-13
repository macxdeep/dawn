import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const words = defineCollection({
  // entry id (= URL slug) comes from the filename
  loader: glob({ pattern: '**/*.md', base: './src/content/words' }),
  schema: z.object({
    title: z.string(),
    // sort key only (newest first); never rendered
    date: z.coerce.date(),
  }),
});

const images = defineCollection({
  // one yaml per photo; photo files live in src/assets/images
  loader: glob({ pattern: '**/*.yaml', base: './src/content/images' }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      alt: z.string(),
      // sort key only (newest first); never rendered
      date: z.coerce.date(),
    }),
});

export const collections = { words, images };
