import { defineType, defineField, defineArrayMember } from 'sanity';

export default defineType({
  name: 'benefit',
  title: 'Benefit',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      description: 'This field is the benefit headline.',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Benefit description',
      name: 'textBlock',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Block',
          name: 'blockText',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Quote', value: 'blockquote' },
          ],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'benefitImage',
      title: 'Benefit image',
      type: 'image',
      description: 'Image associated with this benefit.',
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
});
