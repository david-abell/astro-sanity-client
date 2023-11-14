import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { loadEnv } from 'vite';
import nodejs from '@astrojs/node';

const {
  PUBLIC_SANITY_STUDIO_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
} = loadEnv(import.meta.env.MODE, process.cwd(), '');

// Different environments use different variables
const projectId = PUBLIC_SANITY_STUDIO_PROJECT_ID || PUBLIC_SANITY_PROJECT_ID;
const dataset = PUBLIC_SANITY_STUDIO_DATASET || PUBLIC_SANITY_DATASET;

// Change this depending on your hosting provider (Vercel, Netlify etc)
// https://docs.astro.build/en/guides/server-side-rendering/#adding-an-adapter
// import vercel from '@astrojs/vercel/serverless';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  // Hybrid+adapter is required to support embedded Sanity Studio
  output: 'hybrid',
  // adapter: vercel(),
  adapter: nodejs({
    mode: 'standalone',
  }),
  integrations: [
    mdx(),
    tailwind(),
    sanity({
      projectId,
      dataset,
      studioBasePath: '/admin',
      useCdn: false, // `false` if you want to ensure fresh data
      apiVersion: '2023-09-28', // Set to date of setup to use the latest API version
    }),
    react(),
  ],
  // unsafe fix expose to local dev server with npm linked packages and `npx astro dev --host`
  // vite: {
  //   server: {
  //     fs: {
  //       strict: false,
  //     },
  //   },
  // },
});
