import { logout } from '@/actions/Authentication';
import React from 'react';

type LogoutButtonProps = {
    className?: string;
};

export default function LogoutButton({ className = '' }: LogoutButtonProps) {
    return (
        <form action={logout}>
            <button
                className={`${className} text-center items-center px-2 rounded-xl py-1 bg-indigo-50 text-indigo-600`}
            >
                Sign out
            </button>
        </form>
    );
}
