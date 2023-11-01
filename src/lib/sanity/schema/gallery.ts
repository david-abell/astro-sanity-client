import { defineArrayMember, defineField, defineType } from 'sanity';

const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'name',
      title: 'Gallery Name',
      description: 'This field is the gallery name.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Gallery Headline',
      description: 'This field is the gallery headline.',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Describe the gallery contents in a few paragraphs.',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      validation: (Rule) => Rule.required(),
      options: {
        layout: 'grid',
      },
      of: [
        defineArrayMember({
          name: 'heroImage',
          title: 'Hero image',
          description: 'Displayed on main page hero section.',
          type: 'image',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'altText',
              title:
                'Describe the image content, for example "An assortment of pendant lights against a white wall". You should not say it is an image or picture.',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
  // preview: {
  //   select: {
  //     images: 'images',
  //     image: 'images.0',
  //   },
  //   prepare(selection) {
  //     const { images, image } = selection;

  //     return {
  //       title: `Gallery block of ${Object.keys(images).length} images`,
  //       subtitle: `Alt text: ${image.alt}`,
  //       media: image,
  //     };
  //   },
  // },
});

export default gallery;
