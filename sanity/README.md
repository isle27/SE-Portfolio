# Portfolio Sanity Studio

This folder contains a standalone Sanity Studio for managing portfolio content. It is intentionally not connected to the React portfolio yet; the current frontend remains unchanged.

## Content managed here

- Site Settings (singleton): global brand and SEO content
- Hero (singleton): greeting, CTAs, portrait, and copy
- Availability (singleton): work and opportunity cards
- Skill Categories and Technologies: reusable, ordered skill data
- Projects: images, descriptions, technology references, links, featured status, and ordering
- About (singleton): rich body content, optional image, and reusable statistics
- Contact (singleton): contact content and decorative message
- Social Links: reusable, ordered, enabled/disabled links

There is intentionally no Resume schema or Resume feature. Theme and visual design settings remain frontend concerns and are not managed by this Studio.

## Schema layout

```text
schemaTypes/
  documents/  # editable content documents
  objects/    # reusable embedded objects, such as Statistic
  index.ts    # schema registry
```

Singleton documents are set up in the Studio structure as Site Settings, Hero, Availability, About, and Contact. They use fixed document IDs and do not appear in the create menu.

## Setup after creating a Sanity account

1. Create a Sanity account and a new project in the Sanity management console.
2. Copy `.env.example` to `.env` in this `sanity/` folder.
3. Set `SANITY_STUDIO_PROJECT_ID` to your real project ID.
4. Set `SANITY_STUDIO_DATASET` to the dataset you created (normally `production`).
5. Install dependencies and start the Studio:

   ```bash
   cd sanity
   npm install
   npm run dev
   ```

6. Open the local Studio URL printed by Sanity and create your content.

## Useful commands

```bash
npm run dev
npm run build
npm run deploy
```

## Not done yet

- A real Sanity project/dataset has not been configured.
- No credentials or project IDs are included.
- The React portfolio does not read from Sanity yet.
- Frontend integration should be completed later as a separate change.
