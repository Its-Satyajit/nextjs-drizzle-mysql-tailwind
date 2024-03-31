import { validateRequest } from '@/auth/validateRequest';
import LogoutButton from './LogoutButton';

export default async function Header() {
    const { user } = await validateRequest();

    return (
        <header className='bg-indigo-600   gap-4 items-center flex    text-indigo-50'>
            <div className='justify-between grow container mx-auto flex p-3 items-center'>
                Header
                <div className='flex justify-between gap-4 items-center'>
                    {user && (
                        <>
                            <div>Hi, {user.username}!</div> <LogoutButton />
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
