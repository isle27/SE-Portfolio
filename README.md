# Elsa Chanyalew’s portfolio

Run `npm install` and `npm run dev` to start the Vite development server.

## Manage projects in Neon

1. Run `schema.sql` from Portfolio Studio in the Neon SQL Editor, using the same database and branch as the dashboard. For a fresh database, run [database/projects.sql](database/projects.sql) first if you want the three original SE projects.
2. Set a server-side `DATABASE_URL` in `.env.local` for Vite or in the Node host for production. The portfolio role only needs `SELECT` on `public.portfolio_published_projects`.
3. Use the private dashboard to choose where projects appear and set their order.

For production run `npm run build` followed by `npm start` on a Node host. The SE site reads published projects assigned to Software Engineering from the shared table in dashboard order.

On Vercel, use the Vite preset and set DATABASE_URL for Production. The api/projects.mjs function serves the projects route. Redeploy after changing the environment variable.
