import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';
import { client } from '@lib/sanity/client';

const builder = imageUrlBuilder(client);

type Size = 'logo' | 'logo-sq' | 'thumb' | 'thumb-lg' | 'social' | 'hero' | 'hero-sm' | 'full';

const sizes = {
  logo: { width: 250, height: 100 },
  'logo-sq': { width: 100, height: 100 },
  thumb: { width: 150, height: 150 },
  'thumb-lg': { width: 350, height: 350 },
  social: { width: 32, height: 32 },
  hero: { width: 1280, height: 720 },
  'hero-sm': { width: 1200, height: 630 },
  full: { width: 1800, height: 600 },
};

export function imageBuilder(source: Image, size: Size, vertical: boolean = false) {
  const image = builder.image(source).format('webp');
  const { width, height } = sizes[size];

  return vertical ? image.size(height, width).url() : image.size(width, height).url();
}
