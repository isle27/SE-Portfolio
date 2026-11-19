import { neon } from '@neondatabase/serverless';

export async function serveProjects(request, response, databaseUrl) {
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Cache-Control', 'no-store');
  if (request.method !== 'GET') {
    response.setHeader('Allow', 'GET');
    response.statusCode = 405;
    response.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  if (!databaseUrl) {
    response.statusCode = 503;
    response.end(JSON.stringify({ error: 'Project database is not configured' }));
    return;
  }

  try {
    const portfolio = new URL(request.url, 'http://localhost').searchParams.get('portfolio') ?? 'se';
    if (portfolio !== 'se') {
      response.statusCode = 400;
      response.end(JSON.stringify({ error: 'Unknown portfolio' }));
      return;
    }
    const sql = neon(databaseUrl, { fetchOptions: { signal: AbortSignal.timeout(5000) } });
    const projects = await sql`
      SELECT id, title, description, image, technologies, github, live, featured
      FROM public.portfolio_published_projects
      WHERE show_on_se
      ORDER BY sort_order, id
    `;
    response.end(JSON.stringify(projects));
  } catch {
    console.error('Unable to load portfolio projects from Neon.');
    response.statusCode = 503;
    response.end(JSON.stringify({ error: 'Project database unavailable' }));
  }
}
