import groq from 'groq';
import { client } from './client';
import type { Homepage } from './types';

export async function getHomepage(): Promise<Homepage> {
  return await client.fetch(groq`*[_type == "homepage"][0]`);
}
