import { login } from '@/actions/Authentication';
import Link from 'next/link';

export default async function Page() {
    return (
        <div className='mx-auto  max-w-lg h-lvh items-center flex'>
            <div className='grid border-indigo-950/10 border grid-flow-row shadow-xl w-full m-3 bg-white rounded-xl p-6 space-y-6 '>
                <h1 className='text-3xl font-semibold'>Sign In</h1>
                <form className=' grid grid-flow-row space-y-5 text-xl' action={login}>
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
                            don&apos;t Have An Account?
                        </Link>
                    </div>
                    <button className='bg-indigo-600 text-indigo-50 font-semibold px-4 py-2 rounded-md hover:bg-indigo-500 transition-all'>
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
}
