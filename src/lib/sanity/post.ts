import groq from 'groq';
import { client } from './client';
import type { Post } from './types';

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`);
}

export async function getPost(slug: string): Promise<Post> {
  return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
    slug,
  });
}
