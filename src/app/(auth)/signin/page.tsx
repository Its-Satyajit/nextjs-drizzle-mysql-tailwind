import SignInForm from '@/components/forms/SignInForm';

export default function Page() {
    return (
        <div className='mx-auto  max-w-lg h-lvh items-center flex'>
            <div className='grid border-indigo-950/10 border grid-flow-row shadow-xl w-full m-3 bg-white rounded-xl p-6 space-y-6 '>
                <SignInForm />
            </div>
        </div>
    );
}
