import { Pool } from 'pg'

const connectionString = process.env.NEON_DATABASE_URL || process.env.DATABASE_URL

export const pool = new Pool({
  connectionString,
  ssl: process.env.PGSSL === 'false' ? false : { rejectUnauthorized: false },
  max: 3,
})

export async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS bookings (
      id SERIAL PRIMARY KEY,
      owner_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      dog_name TEXT,
      dog_breed TEXT,
      dog_age TEXT,
      check_in DATE,
      check_out DATE,
      services JSONB DEFAULT '[]'::jsonb,
      total INTEGER DEFAULT 0,
      status TEXT DEFAULT 'new',
      created_at TIMESTAMPTZ DEFAULT now()
    );
    CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
  `)
}


