import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'availability', title: 'Availability', type: 'document',
  fields: [
    defineField({ name: 'availableForWork', title: 'Available for work', type: 'boolean', initialValue: true }),
    defineField({ name: 'availabilityTitle', title: 'Availability title', type: 'string' }),
    defineField({ name: 'availabilityDescription', title: 'Availability description', type: 'text', rows: 2 }),
    defineField({ name: 'openToOpportunities', title: 'Open to opportunities', type: 'boolean', initialValue: true }),
    defineField({ name: 'opportunityTitle', title: 'Opportunity title', type: 'string' }),
    defineField({ name: 'opportunityDescription', title: 'Opportunity description', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Availability' }) },
});
