import groq from 'groq';
import { client } from './client';
import type { Settings } from './types';

export async function getSettings(): Promise<Settings> {
  return await client.fetch(groq`*[_type == "settings"][0]`);
}

export async function getHomePageTitle(): Promise<Settings> {
  return await client.fetch(groq`
  *[_type == "settings"][0].title
`);
}

export async function getHomePageSettings(): Promise<Settings> {
  return await client.fetch(groq`
  *[_type == "settings"][0]{
    title,
    overview,
  }
`);
}

export async function getFooterText(): Promise<Settings> {
  return await client.fetch(groq`
  *[_type == "settings"][0]{
    footer,
  }
`);
}

export async function getLogo(): Promise<Settings> {
  return await client.fetch(groq`
  *[_type == "settings"][0]{
    logoImage {
      ...,
    asset->},
  }
`);
}

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`;
