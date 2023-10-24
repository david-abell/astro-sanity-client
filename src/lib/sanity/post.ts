import groq from 'groq';
import { sanityClient } from 'sanity:client';
import type { Post } from './types';

export async function getPosts(): Promise<Post[]> {
  return await sanityClient.fetch(groq`*[_type == "post" && defined(slug.current)]  {
    ...,
    mainImage {
      ...,
       asset->
      }
    } | order(_createdAt desc)`);
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      ...,
      mainImage {
        ...,
         asset->
        }
      }`,
    {
      slug,
    },
  );
}
