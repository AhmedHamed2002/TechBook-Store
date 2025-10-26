import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

interface CartItem {
  isbn13: string;
  title: string;
  price: string;
  image: string;
  quantity: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(
        (i) => i.isbn13 === action.payload.isbn13
      );
      const isDark =
        typeof window !== "undefined" &&
        document.documentElement.classList.contains("dark");

      if (existing) {
        existing.quantity += 1;
        const priceNumber = parseFloat(
          existing.price.replace(/[^0-9.]/g, "")
        );
        existing.totalPrice = priceNumber * existing.quantity;
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "info",
          title: "Book quantity increased!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: isDark ? "#171717" : "#fff",
          color: isDark ? "#fdc700" : "#111827",
          customClass: {
            popup: isDark
              ? "dark:bg-gray-800 dark:text-yellow-400"
              : "",
          },
        });
      } else {
        const priceNumber = parseFloat(
          action.payload.price.replace(/[^0-9.]/g, "")
        );
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: priceNumber,
        });

        Swal.fire({
          title: "Added!",
          text: "Book added to cart!",
          icon: "success",
          background: isDark ? "#171717" : "#fff",
          color: isDark ? "#fdc700" : "#111827",
          confirmButtonColor: isDark ? "#facc15" : "#2563eb",
          customClass: {
            popup: isDark
              ? "dark:bg-gray-800 dark:text-yellow-400"
              : "",
          },
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeOneFromCart: (state, action: PayloadAction<CartItem>) => {
      const existing = state.items.find(
        (i) => i.isbn13 === action.payload.isbn13
      );
      const isDark =
        typeof window !== "undefined" &&
        document.documentElement.classList.contains("dark");

      if (existing) {
        existing.quantity -= 1;
        const priceNumber = parseFloat(
          existing.price.replace(/[^0-9.]/g, "")
        );
        existing.totalPrice = priceNumber * existing.quantity;
        localStorage.setItem("cart", JSON.stringify(state.items));
         Swal.fire({
          toast: true,
          position: "top-end",
          icon: "info",
          title: "Book quantity decreased!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: isDark ? "#171717" : "#fff",
          color: isDark ? "#fdc700" : "#111827",
          customClass: {
            popup: isDark
              ? "dark:bg-gray-800 dark:text-yellow-400"
              : "",
          },
        });
      } 
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.isbn13 !== action.payload);

      const isDark =
        typeof window !== "undefined" &&
        document.documentElement.classList.contains("dark");

      Swal.fire({
        title: "Removed!",
        text: "Book removed from cart!",
        icon: "warning",
        background: isDark ? "#171717" : "#fff",
        color: isDark ? "#fdc700" : "#111827",
        confirmButtonColor: isDark ? "#facc15" : "#2563eb",
        customClass: {
          popup: isDark ? "dark:bg-gray-800 dark:text-yellow-400" : "",
        },
      });

      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeOneFromCart, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
