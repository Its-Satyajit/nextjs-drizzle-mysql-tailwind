import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import env from '@/env';

import * as schema from './schema';

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
    conn: mysql.Connection | undefined;
};

export const clientConfig = {
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    database: env.DB_DATABASE,
};

async function getDatabaseConnection() {
    const conn =
        globalForDb.conn ??
        (await mysql.createConnection({
            ...clientConfig,
            // ssl: env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : undefined,
        }));
    if (env.NODE_ENV !== 'production') globalForDb.conn = conn;
    return conn;
}

export const dbPromise = getDatabaseConnection().then((conn) => drizzle(conn, { schema, mode: 'default' }));
