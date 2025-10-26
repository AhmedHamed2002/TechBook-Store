"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addFavorite, removeFavorite } from "@/redux/favoriteSlice";
import { addToCart } from "@/redux/cartSlice";
import { getBookDetails } from "@/lib/api";

export default function BookDetailsPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorite.items);
    const [details, setDetails] = useState<any>(null);

    useEffect(() => {
        if (id) {
            getBookDetails(id as string).then((data) => setDetails(data));
        }
    }, [id]);

    const isFavorite = (book: any) => favorites.some((f) => f.isbn13 === book.isbn13);

    const handleFavorite = (book: any) => {
        if (isFavorite(book)) {
            dispatch(removeFavorite(book.isbn13));
        } else {
            dispatch(addFavorite(book));
        }
    };

    const handleAddToCart = (book: any) => {
        dispatch(addToCart(book));
    };

    if (!details) return <p className="text-center py-10 text-gray-500">Loading...</p>;

    return (
        <section className="min-h-screen py-10 px-5 transition-colors duration-500 dark:bg-neutral-900 dark:text-white bg-[#fdfbf7] text-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            {/* Book Image */}
            <div className="text-center">
                <img src={details.image} alt={details.title} className="max-h-[400px] object-contain rounded-lg mx-auto shadow-md"/>
            </div>

            {/* Book Info */}
            <div className="space-y-8">
            <h1 className="text-2xl text-center md:text-4xl font-bold dark:text-yellow-600 text-[#1e3787] font-Playfair">
                {details.title}
            </h1>
            <h3 className="text-2xl font-medium font-[Edu_AU_VIC_WA_NT_Guides] text-center dark:text-yellow-200 text-[#3e5ab7]">
                {details.authors}
            </h3>
            <p className="dark:text-neutral-400 text-gray-800 font-Playfair">
                {details.desc}
            </p>

            {/* Buttons */}
            <div className="flex gap-3 flex-col sm:flex-row">
                {details.price == "$0.00"? 
                    ( <span className="text-center pt-2 text-yellow-500 text-2xl font-Playfair font-semibold me-4">free</span>):
                    ( <span className="text-center text-yellow-500 text-2xl font-serif font-semibold me-4">{details.price}</span>)
                }
                <button onClick={() => handleFavorite(details)} className="cursor-pointer px-4 py-2 rounded-md border transition-all flex items-center gap-2 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-black border-gray-500 text-gray-700 hover:bg-gray-200">
                <i className={`fa ${isFavorite(details) ? "fa-heart text-red-600" : "fa-heart-o"}`}></i>
                    {isFavorite(details) ? "Remove Favorite" : "Add Favorite"}
                </button>

                <button onClick={() => handleAddToCart(details)} className="px-4 py-2 rounded-md flex items-center gap-2  dark:hover:bg-yellow-500 dark:text-white bg-[#2945a2] hover:bg-blue-800 dark:bg-yellow-600 cursor-pointer text-white">
                    <i className="fa fa-shopping-cart"></i>
                    Add to Cart
                </button>
            </div>

            {/* Book Details */}
            <div className="p-5 rounded-lg mt-5  bg-blue-200 dark:bg-yellow-50 space-y-3 text-black">
                <h4 className="text-xl font-semibold mb-3 font-[Edu_AU_VIC_WA_NT_Guides] dark:text-yellow-400 text-[#1f388a]">
                    Book Details
                </h4>
                <p className="font-Leckerli">
                    <strong>Publisher:</strong> {details.publisher}
                </p>
                <p>
                    <strong>Publication Year:</strong> {details.year}
                </p>
                <p>
                    <strong>Pages:</strong> {details.pages}
                </p>
                <p className="flex items-center">
                    <strong className="mr-2">Rating:</strong>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <i
                        key={star}
                        className={`fa fa-star ${
                            star <= details.rating
                            ? "text-yellow-400"
                            : "text-gray-400"
                        } mr-1`}
                        ></i>
                    ))}
                </p>
                <p>
                    <strong>Subtitle:</strong> {details.subtitle}
                </p>
            </div>

            {/* PDF Samples */}
            {details.pdf && (
                <div className="mt-6">
                <h4 className="text-lg text-center font-semibold mb-7 font-[Edu_AU_VIC_WA_NT_Guides] dark:text-yellow-400 text-[#1f388a]">
                    Sample Chapters
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                    {Object.entries(details.pdf).map(([key, value]) => (
                    <a
                        key={key}
                        href={value as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded-md border text-sm font-medium dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-400 dark:hover:text-black border-[#1f388a] text-[#1f388a] hover:bg-[#1f388a] hover:text-white">
                        {key}
                    </a>
                    ))}
                </div>
                </div>
            )}
            </div>
        </div>
        </section>
    );
}
