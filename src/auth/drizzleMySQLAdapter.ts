import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import { clientConfig } from '@/db/db';
import { sessions } from '@/db/schema/sessions';
import { users } from '@/db/schema/users';
import { DrizzleMySQLAdapter } from '@lucia-auth/adapter-drizzle';

const pool = mysql.createPool(clientConfig);
const luciaDb = drizzle(pool);

export const drizzleMySQLAdapter = new DrizzleMySQLAdapter(luciaDb, sessions, users);

export default drizzleMySQLAdapter;
