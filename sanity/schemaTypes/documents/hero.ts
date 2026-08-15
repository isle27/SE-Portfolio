import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'hero', title: 'Hero', type: 'document',
  fields: [
    defineField({ name: 'greeting', title: 'Greeting', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'headline', title: 'Headline', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'highlightedHeadlineText', title: 'Highlighted headline text', type: 'string', description: 'Optional part of the headline that the frontend may style differently.' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: 'primaryCtaLabel', title: 'Primary CTA label', type: 'string' }),
    defineField({ name: 'primaryCtaTarget', title: 'Primary CTA target', type: 'string', description: 'For example, #projects.' }),
    defineField({ name: 'secondaryCtaLabel', title: 'Secondary CTA label', type: 'string' }),
    defineField({ name: 'secondaryCtaTarget', title: 'Secondary CTA target', type: 'string', description: 'For example, #contact.' }),
    defineField({ name: 'portrait', title: 'Portrait image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'portraitAlt', title: 'Portrait alt text', type: 'string' }),
  ],
  preview: { select: { title: 'headline', subtitle: 'greeting', media: 'portrait' } },
});
