"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { addToCart, removeOneFromCart , removeFromCart } from "@/redux/cartSlice";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import Link from "next/link";

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const totalPrice = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
        setTotal(totalPrice);
    }, [cartItems]);

    const handleAdd = (book: any) => {
        dispatch(addToCart(book));
    };

    const handleRemoveOne = (book: any) => {
        if (book.quantity > 1) {
        dispatch(removeOneFromCart(book)); 
        } else {
        dispatch(removeFromCart(book.isbn13));
        }
    };

    const handleRemoveAll = (book: any) => {
        const isDark =
            typeof window !== "undefined" &&
            document.documentElement.classList.contains("dark");

        Swal.fire({
            title: "Remove item?",
            text: `Are you sure you want to remove "${book.title}" from the cart?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, remove it!",
            cancelButtonText: "Cancel",
            background: isDark ? "#171717" : "#fff",
            color: isDark ? "#fdc700" : "#111827",
            confirmButtonColor: isDark ? "#facc15" : "#2563eb",
            cancelButtonColor: isDark ? "#4b5563" : "#d1d5db",
            customClass: {
            popup: isDark ? "dark:bg-gray-800 dark:text-yellow-400" : "",
            confirmButton: isDark ? "dark:bg-yellow-400 dark:text-gray-900" : "",
            cancelButton: isDark ? "dark:bg-gray-700 dark:text-white" : "",
            },
        }).then((res) => {
            if (res.isConfirmed) {
                dispatch(removeFromCart(book.isbn13));
            }
        });
    };


    if (cartItems.length === 0) {
        return (
            <section className="min-h-screen py-10 bg-[#fdfbf7] dark:bg-neutral-900 transition-colors">
                <div className="flex flex-col w-4/5 md:w-3/5 mx-auto mt-30 items-center justify-center py-24 px-6 text-center rounded-2xl shadow-sm border border-gray-200 dark:border-neutral-700">
                    <div className="mb-4">
                        <i className="fas fa-book text-6xl text-gray-400 dark:text-gray-500"></i>
                    </div>
                    <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-md">
                        There are no items here.
                    </p>
                    <Link href="/book" className="mt-5 cursor-pointer">
                    <Button className="bg-blue-900 hover:bg-blue-950 dark:bg-yellow-500 dark:hover:bg-yellow-600">
                        Browse Books
                    </Button>
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen py-10 bg-[#fdfbf7] dark:bg-neutral-900 transition-colors">
            <div className="container mx-auto px-4">
                {/* Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-center border-collapse">
                    <thead>
                    <tr className="border-b border-gray-300 dark:border-neutral-700">
                        <th className="py-3 text-yellow-500">Item</th>
                        <th className="py-3 text-yellow-500">Price</th>
                        <th className="py-3 text-yellow-500">Quantity</th>
                        <th className="py-3 text-yellow-500">Total Price</th>
                        <th className="py-3 text-yellow-500">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((book:any) => (
                        <tr
                        key={book.isbn13}
                        className="cursor-pointer border-b border-gray-300 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800 transition"
                        >
                        <td className="flex items-center justify-center gap-4 py-4">
                            <img
                            src={book.image}
                            alt={book.title}
                            className="w-24 h-auto rounded shadow"
                            />
                            <span className="font-semibold w-96 text-gray-900 dark:text-yellow-400">
                            {book.title}
                            </span>
                        </td>

                        <td className="text-gray-700 dark:text-gray-300 font-semibold">
                            <i className="fa-solid fa-sack-dollar mr-1" /> {book.price}
                        </td>

                        <td>
                            <div className="flex items-center justify-center gap-2">
                            <Button
                                size="sm"
                                variant="secondary"
                                className="cursor-pointer"
                                onClick={() => handleRemoveOne(book)}
                            >
                                -
                            </Button>
                            <span className="text-gray-900 dark:text-gray-100 font-semibold">
                                {book.quantity}
                            </span>
                            <Button
                                size="sm"
                                variant="secondary"
                                className="cursor-pointer"
                                onClick={() => handleAdd(book)}
                            >
                                +
                            </Button>
                            </div>
                        </td>

                        <td className="text-gray-900 dark:text-yellow-400 font-semibold">
                            <i className="fa-solid fa-sack-dollar mr-1" /> ${book.totalPrice.toFixed(2)}
                        </td>

                        <td>
                            <Button
                            variant="destructive"
                            className="cursor-pointer"
                            onClick={() => handleRemoveAll(book)}
                            >
                            <i className="fa-solid fa-trash mr-2" /> Remove
                            </Button>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>

                {/* Mobile Cards */}
                <div className="block md:hidden space-y-4 mt-6">
                {cartItems.map((book:any) => (
                    <div
                    key={book.isbn13}
                    className="rounded-xl border border-gray-300 dark:border-neutral-700 p-3 bg-white dark:bg-neutral-800 shadow"
                    >
                    <div className="flex items-center justify-between">
                        <img
                        src={book.image}
                        alt={book.title}
                        className="w-20 h-auto rounded"
                        />
                        <span className="font-semibold text-gray-800 dark:text-yellow-400 text-sm">
                        {book.title}
                        </span>
                        <Button
                        size="sm"
                        variant="destructive"
                        className="cursor-pointer"
                        onClick={() => handleRemoveAll(book)}
                        >
                        <i className="fa-solid fa-trash" />
                        </Button>
                    </div>

                    <div className="flex justify-between mt-3 text-gray-700 dark:text-gray-300 text-sm">
                        <p>
                        Price: <i className="fa-solid fa-sack-dollar ml-1" /> {book.price}
                        </p>
                        <div className="flex items-center gap-2">
                        <Button size="sm" variant="secondary" className="cursor-pointer" onClick={() => handleRemoveOne(book)}>
                            -
                        </Button>
                        <span className="font-semibold">{book.quantity}</span>
                        <Button size="sm" variant="secondary" className="cursor-pointer" onClick={() => handleAdd(book)}>
                            +
                        </Button>
                        </div>
                    </div>

                    <p className="mt-2 font-semibold text-yellow-500">
                        Total: ${book.totalPrice.toFixed(2)}
                    </p>
                    </div>
                ))}
                </div>

                {/* Final Total */}
                <div className="mt-8 text-center">
                    <Link href={'/payment'}>
                        <div className="inline-block bg-[#123b69] hover:bg-[#194a83] dark:bg-yellow-600 dark:hover:bg-yellow-500 text-white px-6 py-3 rounded-xl font-bold text-lg cursor-pointer transform transition hover:scale-95">
                            <i className="fa-solid fa-sack-dollar mr-2" /> Buy: ${total.toFixed(2)}
                        </div>
                    </Link> 
                </div>
            </div>
        </section>
    );
}
