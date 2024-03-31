'use client';
import { useFormState } from 'react-dom';
import Link from 'next/link';

import { signin } from '@/actions/Authentication';
import FormErrorMessage from './FormErrorMessage';

export default function SigninForm() {
    const initialState = {
        message: '',
    };
    const [fromState, fromAction] = useFormState(signin, initialState);
    return (
        <form className=' grid grid-flow-row space-y-5 text-xl' action={fromAction}>
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
            <button className='bg-indigo-600 text-indigo-50 font-semibold px-4 py-2 rounded-md hover:bg-indigo-500 transition-all'>
                Continue
            </button>
            <FormErrorMessage message={fromState?.message || ''} />
        </form>
    );
}
