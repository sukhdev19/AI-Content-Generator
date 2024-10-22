import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';  // Ensure that the schema is being imported correctly

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);  // Ensure that the environment variable is set
export const db = drizzle(sql, { schema });  // Pass the schema directly
