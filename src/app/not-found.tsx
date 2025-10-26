"use client";

import Link from "next/link";

export default function NotFoundPage() {
    return (
        <section className="h-[90vh] flex flex-col items-center justify-center text-center bg-gray-100 dark:bg-neutral-900 transition-colors duration-300">
        <div className="mb-10">
            <i className="fa-solid fa-book-open text-6xl text-blue-900 dark:text-yellow-400 animate-bounce"></i>
        </div>
        <h1 className="text-9xl font-extrabold text-blue-900 dark:text-yellow-400">404</h1>
        <h2 className="text-3xl font-semibold mt-4 text-gray-800 dark:text-yellow-300">
            Page Not Found
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-md">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
            href="/"
            className="mt-8 inline-block px-6 py-3 rounded-lg font-bold text-white bg-blue-900 hover:bg-blue-700 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500 transition"
        >
            Go Home
        </Link>

        </section>
    );
}
