import dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

import env from '@/env';

dotenv.config();

export default defineConfig({
    dialect: 'mysql',
    verbose: true,
    strict: true,
    schema: './src/db/schema/*',
    out: 'drizzle',
    dbCredentials: {
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE,
        port: Number(env.DB_PORT),
    },
});
