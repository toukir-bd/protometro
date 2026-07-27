
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0B0B0B] px-6">
            <div className="max-w-xl text-center">
                <h1 className="text-8xl font-bold text-white">404</h1>
                <h2 className="mt-6 text-3xl font-semibold text-white">
                    Page Not Found
                </h2>
                <p className="mt-4 text-neutral-400">
                    The page you&#39;re looking for doesn&#39;t exist or has been moved.
                </p>
                <Link href="/" className="mt-10 inline-flex rounded-full border border-white px-8 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black">
                    Back to Home
                </Link>
            </div>
        </main>
    );
}