import { serveProjects } from '../server/projects.mjs';

export default function projects(request, response) {
  return serveProjects(request, response, process.env.DATABASE_URL);
}
