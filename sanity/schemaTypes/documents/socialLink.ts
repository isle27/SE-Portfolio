import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'socialLink', title: 'Social Link', type: 'document',
  fields: [
    defineField({ name: 'platform', title: 'Platform', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'url', title: 'URL', type: 'url', validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'] }) }),
    defineField({ name: 'iconIdentifier', title: 'Icon identifier', type: 'string', description: 'A frontend-recognized icon key.' }),
    defineField({ name: 'order', title: 'Display order', type: 'number', initialValue: 0 }),
    defineField({ name: 'enabled', title: 'Enabled', type: 'boolean', initialValue: true }),
  ],
  orderings: [{ title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'platform', subtitle: 'url' } },
});
