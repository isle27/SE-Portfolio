import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes';

const singletonTypes = ['siteSettings', 'hero', 'availability', 'about', 'contact'];

export default defineConfig({
  name: 'default',
  title: 'Elsa Portfolio CMS',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) => S.list()
        .title('Portfolio Content')
        .items([
          ...singletonTypes.map((typeName) => S.listItem()
            .title(typeName)
            .id(typeName)
            .child(S.document().schemaType(typeName).documentId(typeName))),
          S.divider(),
          ...S.documentTypeListItems().filter((item) => !singletonTypes.includes(item.getId() || '')),
        ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter((template) => !singletonTypes.includes(template.schemaType)),
  },
});
