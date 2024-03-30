import { validateRequest } from '@/auth/validateRequest';
import LogoutButton from '@/components/LogoutButton';
import { redirect } from 'next/navigation';

export default async function Home() {
    const { user } = await validateRequest();
    if (!user) {
        return redirect('/signin');
    }
    return (
        <main>
            <h1>Hi, {user.username}!</h1>
            <LogoutButton />
        </main>
    );
}
