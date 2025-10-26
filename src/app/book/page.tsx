"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { fetchNewBooks, searchBooksThunk } from "@/redux/bookSlice";
import { addToCart } from "@/redux/cartSlice";
import { addFavorite, removeFavorite } from "@/redux/favoriteSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";

export default function BooksPage() {
    const dispatch = useAppDispatch();
    const { books, searched, loading } = useAppSelector((s) => s.books);
    const { items: favorites } = useAppSelector((s) => s.favorite);
    const [query, setQuery] = useState("");

    const categories: { name: string; sName: string }[] = [
        { name: "Web Development", sName: "Web,Development" },
        { name: "Artificial Intelligence", sName: "Artificial,Intelligence" },
        { name: "Data Science", sName: "Data,Science" },
        { name: "Software Engineering", sName: "Software,Engineering" },
        { name: "Cybersecurity", sName: "Cybersecurity" },
        { name: "Robotics", sName: "Robotics" },
        { name: "Software Testing", sName: "Software,testing" },
        { name: "Machine Learning", sName: "Machine,learning" },
        { name: "Flutter", sName: "Flutter" },
    ];


    useEffect(() => {
        dispatch(fetchNewBooks());
    }, [dispatch]);

    const handleSearch = (val: string) => {
        setQuery(val);
        if (val.length >= 2) dispatch(searchBooksThunk(val));
    };

    const handleCategorySelect = (category: string) => {
        setQuery(category);
        dispatch(searchBooksThunk(category));
    };

    const isFavorite = (isbn13: string) => favorites.some((b) => b.isbn13 === isbn13);

    const dataToShow = query.length >= 2 ? searched : books;

    return (
        <section className="min-h-screen py-10 transition-colors dark:bg-neutral-900 bg-[#fdfbf7]">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-center">
            <div className="flex w-full md:w-1/2 items-center gap-2">
                <Input
                placeholder="Search by book, author or product..."
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                className="rounded-xl w-full px-5 py-2 dark:text-yellow-400 text-[#1238b6]"
                />

                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="whitespace-nowrap cursor-pointer text-[#2945a2] dark:text-white">
                        Categories
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-h-60 overflow-y-auto">
                    {categories.map((cat) => (
                    <DropdownMenuItem
                        key={cat.name}
                        onClick={() => handleCategorySelect(cat.sName)}
                        className="cursor-pointer"
                    >
                        {cat.name}
                    </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
                </DropdownMenu>
            </div>
            </div>

            {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-[400px] w-full rounded-xl" />
                ))}
            </div>
            ) : (
            <div>
                {dataToShow.length ? (
                query.length >= 2 ? (
                    <h2 className="text-center text-4xl font-[Edu_AU_VIC_WA_NT_Guides] mb-14 mt-24 dark:text-yellow-400 text-[#123b69]">
                    For You
                    </h2>
                ) : (
                    <h2 className="text-center text-4xl font-[Edu_AU_VIC_WA_NT_Guides] mb-14 mt-24 dark:text-yellow-400 text-[#123b69]">
                    New Collection
                    </h2>
                )
                ) : (
                <div className="flex flex-col items-center justify-center py-24 px-6 text-center bg-white dark:bg-neutral-800 rounded-2xl shadow-sm border border-gray-200 dark:border-neutral-700">
                    <div className="mb-4">
                    <i className="fas fa-book text-6xl text-gray-400 dark:text-gray-500"></i>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                        No Books Found
                    </h2>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-md">
                    You don’t have any Books added yet.
                    </p>
                </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {dataToShow.map((book) => (
                    <div
                    key={book.isbn13}
                    className="relative dark:bg-[#121315]  bg-white shadow-md shadow-neutral-400 dark:shadow-neutral-700 rounded-2xl group transition hover:scale-105 overflow-hidden"
                    >
                    <img src={book.image} alt={book.title} className="w-full h-96 object-contain" />
                    {isFavorite(book.isbn13) ? (
                        <Button
                        className="absolute top-1 right-2 z-40 group-hover:bg-white/30 dark:group-hover:bg-white/10 cursor-pointer text-xl"
                        variant="ghost"
                        onClick={() => dispatch(removeFavorite(book.isbn13))}
                        >
                        <i className="save fs-4 text-red-600 fa-solid fa-heart"></i>
                        </Button>
                    ) : (
                        <Button
                        className="absolute top-1 right-2 z-40 group-hover:bg-white/30 dark:group-hover:bg-white/10 cursor-pointer text-xl"
                        variant="ghost"
                        onClick={() => dispatch(addFavorite(book))}
                        >
                        <i className="save fs-4 fa-regular fa-heart"></i>
                        </Button>
                    )}
                    {book.price == "$0.00" && (
                        <div className="absolute top-0 left-6 cursor-pointer">
                            <Image width={40} height={40} src="/assets/images/free.png" alt="free image" className="filter dark:invert" />
                        </div>
                    )}

                    <div className="cursor-pointer z-30 absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                        <h3 className="font-bold mt-3 text-center text-white/80">{book.title}</h3>
                        <p className="text-center text-sm text-green-600">{book.price}</p>

                        <div className="flex flex-col justify-center w-8/12 items-center mt-3 gap-2">
                        <Button
                            variant="default"
                            className="cursor-pointer w-full bg-blue-900 hover:bg-blue-950 dark:bg-yellow-500 dark:hover:bg-yellow-600"
                            onClick={() => dispatch(addToCart(book))}
                        >
                            Add to cart
                        </Button>
                        <Link href={`book/${book.isbn13}`} className="w-full">
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
            </div>
            )}
        </div>
        </section>
    );
}
