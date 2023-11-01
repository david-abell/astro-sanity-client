import imageUrlBuilder from '@sanity/image-url';
import { sanityClient } from 'sanity:client';
import type { ImageWithExpandedMetaData } from './types';
const builder = imageUrlBuilder(sanityClient);

export type ImageFormFactor = 'thumb' | 'ogImage' | 'hero' | 'hero-sq' | 'full' | 'portrait';

export const imageSizes = {
  thumb: {
    small: { width: 150, height: 150 },
    medium: { width: 250, height: 250 },
    large: { width: 380, height: 380 },
  },
  ogImage: { width: 1200, height: 630 },
  hero: {
    small: { width: 600, height: 315 },
    medium: { width: 1200, height: 630 },
    large: { width: 1800, height: 945 },
  },
  'hero-sq': {
    small: { width: 315, height: 315 },
    medium: { width: 500, height: 500 },
    large: { width: 630, height: 630 },
  },
  full: {
    small: 600,
    medium: 1200,
    large: 1800,
  },
  portrait: {
    small: { width: 236, height: 315 },
    medium: { width: 338, height: 450 },
    large: { width: 472, height: 630 },
  },
} as const;

export function imageBuilder(source: ImageWithExpandedMetaData, form: ImageFormFactor) {
  const image = builder.image(source).format('webp');

  if (form === 'ogImage') {
    return { ogImageUrl: image.size(imageSizes[form].width, imageSizes[form].height).url() };
  }

  if (form === 'full') {
    const { aspectRatio } = source.asset.metadata.dimensions;
    const { small, medium, large } = imageSizes[form];

    if (aspectRatio >= 1) {
      const smallUrl = image
        .size(small, Math.round(small / aspectRatio))
        .crop('center')
        .fit('crop')
        .url();

      const mediumUrl = image
        .size(medium, Math.round(medium / aspectRatio))
        .crop('center')
        .fit('crop')
        .url();

      const largeUrl = image
        .size(large, Math.round(large / aspectRatio))
        .crop('center')
        .fit('crop')
        .url();

      return { smallUrl, mediumUrl, largeUrl };
    }
    const smallUrl = image
      .size(Math.round(small * aspectRatio), small)
      .crop('center')
      .fit('crop')
      .url();

    const mediumUrl = image
      .size(Math.round(medium * aspectRatio), medium)
      .crop('center')
      .fit('crop')
      .url();

    const largeUrl = image
      .size(Math.round(large * aspectRatio), large)
      .crop('center')
      .fit('crop')
      .url();

    return { smallUrl, mediumUrl, largeUrl };
  }

  const { small, medium, large } = imageSizes[form];

  const smallUrl = image.size(small.width, small.height).url();
  const mediumUrl = image.size(medium.width, medium.height).url();
  const largeUrl = image.size(large.width, large.height).url();

  return { smallUrl, mediumUrl, largeUrl };
}

export function placeholderBuilder(source: ImageWithExpandedMetaData) {
  return source.asset?.metadata?.lqip || '';
}
