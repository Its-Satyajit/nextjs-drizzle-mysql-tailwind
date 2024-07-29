import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import env from '@/env';

export const dbConfig = {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    port: Number(env.DB_PORT),
};

const pool = mysql.createPool({
    ...dbConfig,
    connectionLimit: 10,
});

export const getDb = async (): Promise<MySql2Database<Record<string, never>> | null> => {
    try {
        const connection = await pool.getConnection();
        const db = drizzle(connection);
        return db;
    } catch (error) {
        console.error('Error while getting database:', error);
        return null;
    }
};

export const closeDb = async (): Promise<void> => {
    try {
        pool.end();
        console.log('Database connection pool closed.');
    } catch (error) {
        console.error('Error while closing database connection pool:', error);
    }
};
