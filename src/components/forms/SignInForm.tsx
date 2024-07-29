'use client';
import Link from 'next/link';

import { server_sigIn } from '@/actions/Authentication';
import { useMutation } from '@tanstack/react-query';

export default function SignInForm() {
    const { mutate, data, isPending } = useMutation({
        mutationFn: server_sigIn,
    });

    return (
        <form className=' grid grid-flow-row space-y-5 text-xl' action={async (formData) => await mutate(formData)}>
            <h1 className='text-3xl font-semibold'>Sign In</h1>
            <label htmlFor='username'>
                Username:
                <input
                    className='border-indigo-400 ring-2 ring-indigo-700/border-indigo-400 w-full rounded-md text-2xl px-3 py-1.5 '
                    name='username'
                    id='username'
                />
            </label>

            <label htmlFor='password'>
                Password:
                <input
                    className='border-indigo-400 ring-2 ring-indigo-700/border-indigo-400 w-full rounded-md text-2xl px-3 py-1.5 '
                    type='password'
                    name='password'
                    id='password'
                />
            </label>
            <div className='flex justify-end'>
                <Link className=' text-base  hover:text-indigo-700' href={'/signup'}>
                    Don&apos;t have an account?
                </Link>
            </div>
            <button
                disabled={isPending}
                className='bg-indigo-600 text-indigo-50 font-semibold px-4 py-2 rounded-md hover:bg-indigo-500 transition-all'
            >
                {isPending ? 'Loading...' : 'Continue'}
            </button>

            {data?.message && (
                <p className='text-base text-red-800 bg-red-200 rounded text-center px-3 py-1.5'>{data?.message}</p>
            )}
        </form>
    );
}
