import { CogIcon } from '@sanity/icons';
import { defineArrayMember, defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      description: 'Used both for the <meta> description tag for SEO, and the personal website subheader.',
      title: 'Description',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'footer',
      description: 'This is a block of text that will be displayed at the bottom of the page.',
      title: 'Footer Info',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      description: 'Displayed on main page hero section.',
      fields: [
        {
          name: 'altText',
          title: 'Descriptive text used by screen readers or when image not loaded.',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logoImage',
      title: 'Company or personal logo',
      type: 'image',
      description: 'Displayed on Navigation header.',
      fields: [
        {
          name: 'altText',
          title: 'Descriptive text used by screen readers or when image not loaded.',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Company logo',
        },
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'showcaseProjects',
      title: 'Showcase projects',
      description: 'These are the projects that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'post' }],
        }),
      ],
    }),
  ],
});
