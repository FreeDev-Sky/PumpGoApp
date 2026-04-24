import pg from 'pg';

const { Pool } = pg;

/** PostgreSQL pool — set `DATABASE_URL` (see `services/api/.env.example`). */
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30_000,
});
