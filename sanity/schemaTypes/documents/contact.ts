import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'contact', title: 'Contact', type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.required().email() }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'decorativeMessage', title: 'Decorative handwritten message', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'heading', subtitle: 'email' } },
});
