import type { ImageAsset, PortableTextBlock, Slug, Image } from '@sanity/types';

export type ImageWithExpandedMetaData = Image & {
  altText: string;
  asset: ImageAsset;
};

export type ImageWithOptionalDescription = ImageWithExpandedMetaData & {
  subtext?: string;
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
  introduction: PortableTextBlock[];
  companyPortrait: ImageWithExpandedMetaData;
  problemTitle: 'string';
  problem: PortableTextBlock[];
  solutionTitle: 'string';
  solution: PortableTextBlock[];
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
  images: ImageWithOptionalDescription[];
}
