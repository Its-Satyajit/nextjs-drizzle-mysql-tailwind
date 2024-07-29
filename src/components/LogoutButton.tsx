'use client';
import { server_logOut } from '@/actions/Authentication';

type LogoutButtonProps = {
    className?: string;
};

export default function LogoutButton({ className = '' }: LogoutButtonProps) {
    return (
        <button
            className={`${className} text-center items-center px-2 rounded-xl py-1 bg-indigo-50 text-indigo-600`}
            onClick={() => server_logOut()}
        >
            Sign out
        </button>
    );
}
