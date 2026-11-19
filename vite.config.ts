import { defineConfig, loadEnv, type Connect } from 'vite';
import react from '@vitejs/plugin-react';
import { serveProjects } from './server/projects.mjs';

export default defineConfig(({ mode }) => {
  const databaseUrl = loadEnv(mode, process.cwd(), 'DATABASE_URL').DATABASE_URL;
  const middleware: Connect.NextHandleFunction = (request, response, next) => {
    if (request.url?.split('?')[0] === '/api/projects') {
      void serveProjects(request, response, databaseUrl);
      return;
    }
    next();
  };

  return {
    plugins: [
      react(),
      {
        name: 'portfolio-projects',
        configureServer(server) {
          server.middlewares.use(middleware);
        },
        configurePreviewServer(server) {
          server.middlewares.use(middleware);
        },
      },
    ],
  };
});
