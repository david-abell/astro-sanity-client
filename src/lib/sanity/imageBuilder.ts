import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from 'sanity:client';
import type { ImageWithExpandedMetaData } from './types';
import type { Image } from 'sanity';

const builder = imageUrlBuilder(sanityClient);

export type ImageFormFactor =
  | 'logo'
  | 'logo-sq'
  | 'thumb'
  | 'thumb-lg'
  | 'social'
  | 'hero'
  | 'hero-xs'
  | 'hero-sq'
  | 'hero-sm'
  | 'full';

export const imageSizes = {
  logo: { width: 250, height: 100 },
  'logo-sq': { width: 100, height: 100 },
  thumb: { width: 150, height: 150 },
  'thumb-lg': { width: 350, height: 350 },
  social: { width: 32, height: 32 },
  hero: { width: 1280, height: 720 },
  'hero-xs': { width: 600, height: 315 },
  'hero-sm': { width: 1200, height: 630 },
  'hero-sq': { width: 720, height: 720 },
  full: { width: 1800, height: 600 },
} as const;

export function imageBuilder(
  source: ImageWithExpandedMetaData | Image,
  size: ImageFormFactor,
  vertical: boolean = false,
) {
  // don't transform svgs
  if (source.asset?._ref && source.asset?._ref.length >= 3) {
    if (source.asset?._ref.slice(source.asset?._ref.length - 3).toLowerCase() === 'svg') {
      return builder.image(source).url();
    }
  }

  const { width, height } = imageSizes[size];
  const image = builder.image(source).format('webp');

  return vertical ? image.size(height, width).url() : image.size(width, height).url();
}

export function placeholderBuilder(source: ImageWithExpandedMetaData) {
  return source.asset?.metadata?.lqip || '';
}
