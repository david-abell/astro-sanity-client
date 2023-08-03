import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';
import { client } from './client';

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`);
}

export async function getPost(slug: string): Promise<Post> {
  return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
    slug,
  });
}

export interface Post {
  _type: 'post';
  _createdAt: string;
  title: string;
  author: string;
  // categories: ...;
  excerpt?: string;
  publishedAt?: string;
  slug: Slug;
  mainImage: ImageAsset;
  body: PortableTextBlock[];
}
