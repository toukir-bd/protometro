"use client";
import { useEffect } from "react";

type ErrorProps = {
    error: Error & { digest?: string };
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0B0B0B] px-6">
            <div className="max-w-xl text-center">
                <h1 className="text-7xl font-bold text-white">
                    Oops!
                </h1>
                <h2 className="mt-5 text-3xl font-semibold text-white">
                    Something went wrong.
                </h2>
                <p className="mt-4 text-neutral-400">
                    An unexpected error occurred while loading this page.
                </p>
                <button onClick={reset} className="mt-10 cursor-pointer rounded-full border border-white px-8 py-3 text-sm font-medium text-white 
                    transition hover:bg-white hover:text-black">
                    Try Again
                </button>
            </div>
        </main>
    );
}