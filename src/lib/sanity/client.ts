import { createClient } from '@sanity/client';

if (!import.meta.env.PUBLIC_SANITY_PROJECT_ID || !import.meta.env.PUBLIC_SANITY_DATASET) {
  throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: 'v2023-07-28', // date of setup
});
