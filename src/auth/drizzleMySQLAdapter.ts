import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import { dbConfig } from '@/db/db';

import { DrizzleMySQLAdapter } from '@lucia-auth/adapter-drizzle';
import { sessions } from '@/db/schema/sessions';
import { users } from '@/db/schema/users';

const connection = await mysql.createConnection(dbConfig);
const db = drizzle(connection);

export const drizzleMySQLAdapter = new DrizzleMySQLAdapter(db, sessions, users);

export default drizzleMySQLAdapter;
