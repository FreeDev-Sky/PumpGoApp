import { createServer } from 'node:http';

const port = Number(process.env.PORT ?? 3000);

const server = createServer((_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: true, service: 'PumpGoApp API', database: 'PostgreSQL (configure DATABASE_URL)' }));
});

server.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
