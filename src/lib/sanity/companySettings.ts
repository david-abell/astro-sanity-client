import groq from 'groq';
import { client } from './client';
import type { CompanySettings } from './types';

export async function getSettings(): Promise<CompanySettings> {
  return await client.fetch(groq`*[_type == "companySettings"][0]`);
}

export async function getCompanyName(): Promise<CompanySettings> {
  return await client.fetch(groq`
  *[_type == "companySettings"][0].companyName
`);
}

// export async function getHomePageSettings(): Promise<CompanySettings> {
//   return await client.fetch(groq`
//   *[_type == "companySettings"][0]{
//     companyName,
//     overview,
//   }
// `);
// }

export async function getCallToAction(): Promise<CompanySettings> {
  return await client.fetch(groq`
  *[_type == "companySettings"][0]{
    callToAction,
  }
`);
}

// export async function getLogo(): Promise<CompanySettings> {
//   return await client.fetch(groq`
//   *[_type == "companySettings"][0]{
//     logoImage {
//       ...,
//     asset->},
//   }
// `);
// }

export const settingsQuery = groq`
  *[_type == "companySettings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`;
