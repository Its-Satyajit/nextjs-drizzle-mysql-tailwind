'use server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { sql } from 'drizzle-orm';
import { generateId } from 'lucia';

import { lucia } from '@/auth/auth';
import { getDb } from '@/db/db';
import { users } from '@/db/schema/users';
import bcrypt from 'bcrypt';
import { validateRequest } from '@/auth/validateRequest';

type ActionResult = {
    error?: string;
};

const db = await getDb();
const saltRounds = 10;

export async function signup(formData: FormData): Promise<ActionResult> {
    const username = formData.get('username');
    console.log('🚀 ~ signup ~ username:', username);

    if (
        typeof username !== 'string' ||
        username.length < 4 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return {
            error: 'Invalid username',
        };
    }

    const password = formData.get('password');
    if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
        return {
            error: 'Invalid password',
        };
    }

    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const userId = generateId(15);

    const existingUser = await db
        ?.select()
        .from(users)
        .where(sql`lower(${users.username}) = lower(${username})`);

    if (existingUser && existingUser.length > 0) {
        return {
            error: 'Username is already taken.',
        };
    }

    await db?.insert(users).values({
        id: userId,
        username: username,
        hashed_password: hashedPassword,
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

    return redirect(`/`);
}

export async function login(formData: FormData): Promise<ActionResult> {
    ('use server');
    const username = formData.get('username');
    if (
        typeof username !== 'string' ||
        username.length < 3 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return {
            error: 'Invalid username',
        };
    }
    const password = formData.get('password');
    if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
        return {
            error: 'Invalid password',
        };
    }

    const existingUser = await db
        ?.select()
        .from(users)
        .where(sql`lower(${users.username}) = lower(${username})`);
    console.log('🚀 ~ login ~ existingUser:', existingUser);

    if (!existingUser) {
        // NOTE:
        // Returning immediately allows malicious actors to figure out valid usernames from response times,
        // allowing them to only focus on guessing passwords in brute-force attacks.
        // As a preventive measure, you may want to hash passwords even for invalid usernames.
        // However, valid usernames can be already be revealed with the signup page among other methods.
        // It will also be much more resource intensive.
        // Since protecting against this is non-trivial,
        // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
        // If usernames are public, you may outright tell the user that the username is invalid.
        return {
            error: 'Incorrect username or password',
        };
    }

    const validPassword = bcrypt.compareSync(password, existingUser[0].hashed_password);

    if (!validPassword) {
        return {
            error: 'Incorrect username or password',
        };
    }

    const session = await lucia.createSession(existingUser[0].id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect('/');
}

export async function logout(): Promise<ActionResult> {
    const { session } = await validateRequest();
    if (!session) {
        return {
            error: 'Unauthorized',
        };
    }

    await lucia.invalidateSession(session.id);

    const sessionCookie = lucia.createBlankSessionCookie();
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect('/');
}
