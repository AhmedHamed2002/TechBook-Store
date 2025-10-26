"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFavorite } from "@/redux/favoriteSlice";
import { addToCart } from "@/redux/cartSlice";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FavoritePage() {
    const dispatch = useAppDispatch();
    const { items: favorites } = useAppSelector((s) => s.favorite);

    return (
        <section className="min-h-screen py-10 transition-colors dark:bg-neutral-900 bg-[#fdfbf7]">
        <div className="container mx-auto px-4">
            {favorites.length > 0 && 
                <p className="text-center text-4xl font-[Edu_AU_VIC_WA_NT_Guides] mb-14 mt-10 dark:text-yellow-400 text-[#123b69]">
                    My Favorite Books
                </p>
            }   

            {favorites.length === 0 ? (
            <div className="flex flex-col w-3/5 mx-auto mt-28 items-center justify-center py-24 px-6 text-center bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-200 dark:border-neutral-700">
                <div className="mb-4">
                    <i className="fas fa-book text-6xl text-gray-400 dark:text-gray-500"></i>
                </div>
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                    No Favorites Yet
                </h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-md">
                    You haven’t added any books to your favorites yet.
                </p>
                <Link href="/book" className="mt-5 cursor-pointer">
                <Button className="bg-blue-900 hover:bg-blue-950 dark:bg-yellow-500 dark:hover:bg-yellow-600">
                    Browse Books
                </Button>
                </Link>
            </div>
            ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {favorites.map((book) => (
                <div
                    key={book.isbn13}
                    className="relative dark:bg-neutral-900 bg-white shadow-md shadow-neutral-400 dark:shadow-neutral-700 rounded-2xl group transition hover:scale-105 overflow-hidden"
                >
                    <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-96 object-contain"
                    />

                    <Button
                        className="absolute top-1 right-2 z-40 group-hover:bg-white/30 dark:group-hover:bg-white/10 cursor-pointer text-xl"
                        variant="ghost"
                        onClick={() => dispatch(removeFavorite(book.isbn13))}
                    >
                        <i className="fa-solid fa-heart-crack text-gray-600"></i>
                    </Button>

                    {book.price == "$0.00" && (
                    <span className="absolute top-3 left-4 cursor-pointer bg-red-600 text-white px-2 rounded-sm">
                        Free
                    </span>
                    )}

                    {/* Hover actions */}
                    <div className="cursor-pointer z-30 absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                    <h3 className="font-bold mt-3 text-center text-white/80">
                        {book.title}
                    </h3>
                    <p className="text-center text-sm text-green-600">
                        {book.price}
                    </p>

                    <div className="flex flex-col justify-center w-8/12 items-center mt-3 gap-2">
                        <Button
                        variant="default"
                        className="cursor-pointer w-full bg-blue-900 hover:bg-blue-950 dark:bg-yellow-500 dark:hover:bg-yellow-600"
                        onClick={() =>
                            dispatch(
                                addToCart({
                                ...book,
                                quantity: 1,
                                totalPrice: parseFloat(book.price.replace("$", "")) || 0,
                                })
                            )
                        }
                        >
                        Add to cart
                        </Button>
                        <Link href={`/book/${book.isbn13}`} className="w-full">
                        <Button
                            variant="default"
                            className="cursor-pointer w-full bg-neutral-800 hover:bg-neutral-700 text-white"
                        >
                            Details
                        </Button>
                        </Link>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            )}
        </div>
        </section>
    );
}
