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
        host: process.env.DB_HOST as string,
        user: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_NAME as string,
        port: Number(process.env.DB_PORT),
    },
});
