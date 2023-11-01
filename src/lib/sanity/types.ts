import type { ImageAsset, PortableTextBlock, Slug, Image } from '@sanity/types';

export type ImageWithExpandedMetaData = Image & {
  altText: string;
  asset: ImageAsset;
};

export interface Post {
  _type: 'post';
  _createdAt: string;
  title: string;
  author: string;
  // categories: ...;
  excerpt: string;
  publishedAt?: string;
  slug: Slug;
  mainImage: ImageWithExpandedMetaData;
  body: PortableTextBlock[];
}

export interface CompanySettings {
  _type: 'settings';
  _createdAt: string;
  companyName: string;
  companyAddress: string;
  companyEmail: string;
  companyPhone: string;
  tagline: string;
  overview: PortableTextBlock[];
  callToAction: PortableTextBlock[];
  ogImage: ImageWithExpandedMetaData;
}

export interface Benefit {
  headline: string;
  textBlock: PortableTextBlock[];
  benefitImage: ImageWithExpandedMetaData;
}

export interface Homepage {
  _type: 'settings';
  _createdAt: string;
  headline: 'string';
  subheadline: 'string';
  heroImage: ImageWithExpandedMetaData;
  introduction: 'string';
  companyPortrait: ImageWithExpandedMetaData;
  problemTitle: 'string';
  problem: 'string';
  solutionTitle: 'string';
  solution: 'string';
  benefits: Benefit[];
  // showcaseProjects: Post[]; // This is actually an array of references...
}

export interface Gallery {
  _type: 'settings';
  _createdAt: string;
  title: 'string';
  slug: Slug;
  headline: 'string';
  description: 'string';
  images: ImageWithExpandedMetaData[];
}
