"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

export default function PaymentPage() {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const [total, setTotal] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // ensures client-only rendering
    }, []);

    useEffect(() => {
        const totalValue = cartItems.reduce(
        (acc, item) => acc + parseFloat(item.totalPrice.toString() || "0"),
        0
        );
        setTotal(parseFloat(totalValue.toFixed(2)));
    }, [cartItems]);

    if (!mounted) return null; // prevents SSR mismatch

    return (
        <section className="min-h-screen py-10 px-5 bg-[#fdfbf7] dark:bg-neutral-900 transition-colors">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Cart Summary */}
            <div className="rounded-2xl p-6 overflow-y-auto h-[70vh] bg-white dark:bg-neutral-900 border-2 border-blue-900 dark:border-yellow-500">
            <h2 className="text-2xl font-semibold mb-4 text-red-500">
                Total: ${total}
            </h2>

            {cartItems.length > 0 ? (
                cartItems.map((book: any) => (
                <div
                    className="flex items-center gap-3 pb-2 mb-3 border-b border-blue-900 dark:border-yellow-500"
                    key={book.isbn13}
                >
                    <img
                    src={book.image}
                    alt={book.title}
                    className="w-20 h-auto rounded-md"
                    />
                    <div className="flex flex-col flex-grow">
                    <p className="font-bold text-gray-800 dark:text-yellow-400">
                        {book.title}
                    </p>
                    <p className="text-gray-700 dark:text-yellow-400">
                        Quantity: {book.quantity}
                    </p>
                    <p className="px-2 py-1 rounded-md font-semibold w-fit bg-blue-100 text-blue-900 dark:bg-gray-700 dark:text-yellow-400">
                        ${book.totalPrice}
                    </p>
                    </div>
                </div>
                ))
            ) : (
                <p className="text-center mt-10 text-gray-700 dark:text-yellow-400">
                Your cart is empty.
                </p>
            )}
            </div>

            {/* Payment Form */}
            <div className="p-6 rounded-2xl shadow-lg bg-white dark:bg-neutral-950 transition-colors">
            <form className="space-y-5">
                <div>
                <label
                    htmlFor="email"
                    className="font-semibold flex items-center gap-2 text-blue-900 dark:text-yellow-400"
                >
                    <i className="fa-solid fa-envelope"></i> Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-neutral-900 dark:border-gray-700 dark:text-yellow-400"
                />
                </div>

                <div>
                <label
                    htmlFor="card-info"
                    className="font-semibold flex items-center gap-2 text-blue-900 dark:text-yellow-400"
                >
                    <i className="fa-solid fa-credit-card"></i> Card Information
                </label>
                <div className="flex flex-wrap gap-2 mt-1">
                    <input
                    type="text"
                    placeholder="MM / YY"
                    className="flex-1 min-w-[90px] p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-neutral-900 dark:border-gray-700 dark:text-yellow-400"
                    maxLength={5}
                    required
                    />
                    <input
                    type="number"
                    placeholder="CVC"
                    className="flex-1 min-w-[90px] p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-neutral-900 dark:border-gray-700 dark:text-yellow-400"
                    required
                    />
                    <input
                    type="number"
                    placeholder="1234 1234 1234 1234"
                    className="flex-1 min-w-[150px] p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-neutral-900 dark:border-gray-700 dark:text-yellow-400"
                    required
                    />
                </div>
                <div className="mt-3">
                    <img
                    src="/assets/images/payment.png"
                    alt="Payment methods"
                    className="w-40 mx-auto"
                    />
                </div>
                </div>

                <div>
                <label
                    htmlFor="name"
                    className="font-semibold flex items-center gap-2 text-blue-900 dark:text-yellow-400"
                >
                    <i className="fa-solid fa-user"></i> Name on Card
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Name on card"
                    className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-neutral-900 dark:border-gray-700 dark:text-yellow-400"
                />
                </div>

                <div>
                <label
                    htmlFor="country"
                    className="font-semibold text-blue-900 dark:text-yellow-400"
                >
                    Country or Region
                </label>
                <select
                    id="country"
                    className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-neutral-900 dark:border-gray-700 dark:text-yellow-400"
                >
                    <option>Egypt</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                </select>
                </div>

                <input
                type="number"
                placeholder="ZIP"
                className="w-full mt-2 p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none dark:bg-neutral-900 dark:border-gray-700 dark:text-yellow-400"
                required
                />

                <button
                type="submit"
                className="cursor-pointer w-full font-bold py-3 rounded-md transition bg-blue-900 text-white hover:bg-blue-700 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500"
                >
                Pay
                </button>
            </form>
            </div>
        </div>
    </section>
    );
}
