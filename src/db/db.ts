import { drizzle, MySql2Database } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

export const dbConfig = {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    port: Number(process.env.DB_PORT) as number,
};

export const connection: { con: mysql.Connection | null } = { con: null };

export const createConnection = async (): Promise<void> => {
    try {
        connection.con = await mysql.createConnection(dbConfig);
        console.log('Database connection established.');
    } catch (error) {
        console.error('Error while creating database connection:', error);
        throw error; // Rethrow the error to handle it in the caller
    }
};

export const getDb = async (): Promise<MySql2Database<Record<string, never>> | null> => {
    try {
        if (!connection.con) {
            console.warn('WARNING: Connection has not been established yet.');
            await createConnection();
        }
        return drizzle(connection.con!);
    } catch (error) {
        console.error('Error while getting database:', error);
        return null;
    }
};

export const closeDb = async (): Promise<void> => {
    try {
        await connection.con?.end();
        console.log('Database connection closed.');
    } catch (error) {
        console.error('Error while closing database connection:', error);
    }
};
