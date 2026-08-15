import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'project', title: 'Project', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'shortDescription', title: 'Short description', type: 'text', rows: 3, validation: (Rule) => Rule.required().max(240) }),
    defineField({ name: 'fullDescription', title: 'Full description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: 'Project image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageAlt', title: 'Image alt text', type: 'string' }),
    defineField({ name: 'technologies', title: 'Technologies / tags', type: 'array', of: [{ type: 'reference', to: [{ type: 'technology' }] }] }),
    defineField({ name: 'githubUrl', title: 'GitHub URL', type: 'url', validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }) }),
    defineField({ name: 'liveUrl', title: 'Live website URL', type: 'url', validation: (Rule) => Rule.uri({ scheme: ['http', 'https'] }) }),
    defineField({ name: 'featured', title: 'Featured on homepage', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Display order', type: 'number', initialValue: 0 }),
    defineField({ name: 'status', title: 'Project status', type: 'string', options: { list: ['In progress', 'Live', 'Archived'] } }),
    defineField({ name: 'role', title: 'Role', type: 'string' }),
    defineField({ name: 'year', title: 'Date / year', type: 'string' }),
  ],
  orderings: [{ title: 'Display order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'status', media: 'image' } },
});
