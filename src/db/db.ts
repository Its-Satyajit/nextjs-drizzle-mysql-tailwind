import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

export const dbConfig = {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    port: Number(process.env.DB_PORT) as number,
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
