import groq from 'groq';
import { sanityClient } from 'sanity:client';
import type { Homepage } from './types';

export async function getHomepage(): Promise<Homepage> {
  return await sanityClient.fetch(groq`*[_type == "homepage"][0]`);
}
