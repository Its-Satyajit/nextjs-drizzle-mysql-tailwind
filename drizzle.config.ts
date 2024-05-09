import dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

dotenv.config();

export default defineConfig({
    dialect: 'mysql',
    verbose: true,
    strict: true,
    schema: './src/db/schema/*',
    out: 'drizzle',
    dbCredentials: {
        url: process.env.DB_URL,
    },
});
