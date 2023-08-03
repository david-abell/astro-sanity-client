import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset } from '@sanity/types';
// import type { Post } from './post';
import groq from 'groq';
import { client } from './client';

export async function getSettings(): Promise<Settings> {
  return await client.fetch(groq`*[_type == "settings"[0]`);
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

export interface Settings {
  _type: 'settings';
  _createdAt: string;
  title: string;
  overview: PortableTextBlock[];
  footer: PortableTextBlock[];
  ogImage: ImageAsset;
  // showcaseProjects: ...
}
