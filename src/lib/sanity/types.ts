import type { ImageAsset, PortableTextBlock, Slug } from '@sanity/types';

export type ImageAssetWithAltText = {
  altText: string;
} & ImageAsset;

export interface Post {
  _type: 'post';
  _createdAt: string;
  title: string;
  author: string;
  // categories: ...;
  excerpt?: string;
  publishedAt?: string;
  slug: Slug;
  mainImage: ImageAssetWithAltText;
  body: PortableTextBlock[];
}

export interface Settings {
  _type: 'settings';
  _createdAt: string;
  title: string;
  overview: PortableTextBlock[];
  footer: PortableTextBlock[];
  heroImage: ImageAssetWithAltText;
  logoImage?: ImageAssetWithAltText;
  ogImage: ImageAsset;
  // showcaseProjects: ...
}
