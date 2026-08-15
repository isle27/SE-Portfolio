import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'technology', title: 'Technology', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'iconIdentifier', title: 'Icon identifier', type: 'string', description: 'A frontend-recognized icon key.' }),
    defineField({ name: 'customIcon', title: 'Custom icon image', type: 'image' }),
    defineField({ name: 'category', title: 'Skill category', type: 'reference', to: [{ type: 'skillCategory' }] }),
    defineField({ name: 'order', title: 'Display order', type: 'number', initialValue: 0 }),
    defineField({ name: 'enabled', title: 'Enabled', type: 'boolean', initialValue: true }),
  ],
  orderings: [{ title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name', subtitle: 'category.title', media: 'customIcon' } },
});
