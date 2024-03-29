import 'dotenv/config';

import type { Config } from 'drizzle-kit';

export default {
    schema: './src/db/schema.ts',
    out: './drizzle',
    driver: 'mysql2',
    dbCredentials: {
        host: process.env.DB_HOST as string,
        user: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_NAME as string,
        port: Number(process.env.DB_PORT) as number,
    },
    verbose: true,
    strict: true,
} as Config;
