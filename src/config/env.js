import 'dotenv/config';
import { z } from 'zod';
const schema = z.object({ NODE_ENV:z.enum(['development','test','production']).default('development'), PORT:z.coerce.number().int().positive().default(3000), DATABASE_URL:z.string().optional(), CORS_ORIGIN:z.string().default('http://localhost:5173'), RATE_LIMIT_WINDOW_MS:z.coerce.number().positive().default(60000), RATE_LIMIT_MAX:z.coerce.number().int().positive().default(100) });
export const env = schema.parse(process.env);
