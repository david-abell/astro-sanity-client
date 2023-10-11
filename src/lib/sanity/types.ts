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
  excerpt?: string;
  publishedAt?: string;
  slug: Slug;
  mainImage: ImageWithExpandedMetaData;
  body: PortableTextBlock[];
}

export interface Settings {
  _type: 'settings';
  _createdAt: string;
  title: string;
  overview: PortableTextBlock[];
  footer: PortableTextBlock[];
  heroImage: ImageWithExpandedMetaData;
  logoImage?: ImageWithExpandedMetaData;
  ogImage: ImageAsset;
  // showcaseProjects: ...
}
