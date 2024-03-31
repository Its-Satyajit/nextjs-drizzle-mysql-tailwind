export default function FormErrorMessage({ message }: { message: string | undefined }) {
    return <p className={message && 'text-base text-red-800 bg-red-200 rounded text-center px-3 py-1.5'}>{message}</p>;
}
