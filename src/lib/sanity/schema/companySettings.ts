import { CogIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

const companySettings = defineType({
  name: 'companySettings',
  title: 'Company settings',
  type: 'document',
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      description: 'This field is your companies name.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyAddress',
      title: 'Company Address',
      description: 'This field is your companies address.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyEmail',
      title: 'Company Email',
      description: 'This field is your companies email address.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyPhone',
      title: 'Company Phone',
      description: 'This field is your companies phone.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      description: 'This field is your companies tagline.',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'overview',
      title: 'Description',
      description:
        'Brief company description often displayed by search engines like Google. Maximum length 155 Characters.',
      type: 'string',
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'callToAction',
      title: 'Call-to-action',
      description:
        'A call-to-action encourages the visitor to do something like send a message with a contact form or make a phone call.',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      description: 'Displayed on social cards and search engine results.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default companySettings;
