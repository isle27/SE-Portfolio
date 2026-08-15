import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about', title: 'About', type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'body', title: 'Body content', type: 'array', of: [{ type: 'block' }], validation: (Rule) => Rule.required() }),
    defineField({ name: 'image', title: 'Optional image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'statistics', title: 'Statistics', type: 'array', of: [{ type: 'statistic' }] }),
  ],
  preview: { select: { title: 'heading', media: 'image' } },
});
