import { defineArrayMember, defineField, defineType } from 'sanity';

const homepage = defineType({
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      description: 'This field is the homepage headline. Best kept to 6 words or around 60 characters. ',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      description: 'This field is the homepage subheadline. Usually twice as long as a headline. 10-30 words.',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
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
    defineField({
      name: 'introduction',
      title: 'Company introduction statement',
      description: 'Introduce your company in a few paragraphs.',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'companyPortrait',
      title: 'Company portrait',
      description: 'Displayed on main page with the company introduction text.',
      type: 'image',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'altText',
          title:
            'Describe the image content, for example "A group of five people in casual clothing waving". You should not say it is an image or picture.',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'problemTitle',
      title: 'Problem statement Title',
      description: 'Short (4 word appr.) title for your problem statement.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'problem',
      title: 'Problem statement',
      description: 'Describe the problem your company solves.',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solutionTitle',
      title: 'Solution statement Title',
      description: 'Short 4 word appr. title for your companies solution statement.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solution',
      title: 'Solution statement',
      description: 'Describe your companies solution the the problem it solves.',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits and services',
      description: 'Describe four benefits or services your company provides.',
      type: 'array',
      validation: (Rule) => Rule.length(4),
      of: [
        defineArrayMember({
          type: 'benefit',
        }),
      ],
    }),
    // defineField({
    //   name: 'showcaseProjects',
    //   title: 'Showcase projects',
    //   description: 'These are the projects that will appear first on your home page.',
    //   type: 'array',
    //   of: [
    //     defineArrayMember({
    //       type: 'reference',
    //       to: [{ type: 'post' }],
    //     }),
    //   ],
    // }),
  ],
});

export default homepage;
