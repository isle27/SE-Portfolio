import express from 'express';
import { fileURLToPath } from 'node:url';
import { serveProjects } from './projects.mjs';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const app = express();

app.all('/api/projects', (request, response) => serveProjects(request, response, process.env.DATABASE_URL));
app.use(express.static(dist));
app.get('/projects', (_request, response) => response.sendFile('index.html', { root: dist }));
app.listen(process.env.PORT || 4173);
