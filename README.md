# Elsa Chanyalew’s portfolio

Run `npm install` and `npm run dev` to start the Vite development server.

## Manage projects in Neon

1. Open the SQL Editor for your Neon database and run [database/projects.sql](database/projects.sql) to create the table and import the three existing projects.
2. Put your Neon connection string in `.env.local` as `DATABASE_URL=postgresql://…`, then restart Vite. Keep this variable server-side. A role with SELECT access to the projects table is sufficient for the website.
3. In Neon’s Tables view, insert a row into `portfolio_projects`. Set a unique `slug`, title, description, image URL or local public path, and technologies. Turn on `featured` to show it on the home page. Set `published` to false for drafts. Lower `sort_order` values appear first.

For production, use `npm run build` followed by `npm start` on a Node host with `DATABASE_URL` set in the server environment. The server serves the site and `GET /api/projects` from the same origin. Set `PORT` if your host requires it. Static-only deployments display the bundled projects. The bundled projects also display when the API is unavailable.
