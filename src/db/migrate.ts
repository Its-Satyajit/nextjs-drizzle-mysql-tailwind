import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import mysql from 'mysql2/promise';

import { clientConfig } from './db';

const connection = await mysql.createConnection({
    ...clientConfig,
    // ssl: env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : undefined,
});

const db = drizzle(connection, { mode: 'default' });

const migrateDB = async () => {
    try {
        console.log('Migration Started');
        await migrate(db, { migrationsFolder: 'drizzle' });
        console.log('Migration Completed');
    } catch (err) {
        console.log(err);
    } finally {
        console.log('Connection Closed');
        await connection.end();
    }
};

await migrateDB();
