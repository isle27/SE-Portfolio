import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings', title: 'Site Settings', type: 'document',
  fields: [
    defineField({ name: 'siteTitle', title: 'Site title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'displayName', title: 'Portfolio owner / display name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'shortName', title: 'Short name', type: 'string' }),
    defineField({ name: 'brandAsset', title: 'Brand or avatar asset', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'favicon', title: 'Favicon / brand icon', type: 'image' }),
    defineField({ name: 'seoTitle', title: 'SEO title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO description', type: 'text', rows: 3 }),
    defineField({ name: 'socialSharingImage', title: 'Social sharing image', type: 'image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
});
