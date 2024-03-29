import 'dotenv/config';

import { migrate } from 'drizzle-orm/mysql2/migrator';

import { closeDb, getDb } from './db';

async function migrateAndCloseConnection(): Promise<void> {
    let db;
    try {
        db = await getDb();
        if (db) {
            await migrate(db, { migrationsFolder: './drizzle' });
            console.log('Migration completed successfully.');
        }
    } catch (error) {
        console.error('Error during migration:', error);
    } finally {
        await closeDb();
    }
}

migrateAndCloseConnection();
