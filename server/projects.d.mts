export function serveProjects(
  request: import('node:http').IncomingMessage,
  response: import('node:http').ServerResponse,
  databaseUrl: string | undefined,
): Promise<void>;
