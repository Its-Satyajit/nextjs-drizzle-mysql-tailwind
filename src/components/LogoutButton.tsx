import { logout } from '@/actions/Authentication';
import React from 'react';

type LogoutButtonProps = {
    className?: string;
};

export default function LogoutButton({ className = '' }: LogoutButtonProps) {
    return (
        <form action={logout}>
            <button className={`${className}`}>Sign out</button>
        </form>
    );
}
