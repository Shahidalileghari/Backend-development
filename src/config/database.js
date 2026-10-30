import pg from 'pg';
import { env } from './env.js';
const { Pool } = pg;
export const pool = env.DATABASE_URL ? new Pool({connectionString:env.DATABASE_URL,max:10,idleTimeoutMillis:30000}) : null;
export async function query(sql, params=[]) { if (!pool) throw new Error('DATABASE_URL is not configured'); return pool.query(sql,params); }
export async function closeDatabase() { if (pool) await pool.end(); }
