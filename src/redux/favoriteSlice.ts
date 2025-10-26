import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

interface Book {
  isbn13: string;
  title: string;
  image: string;
  price: string;
}

interface FavoriteState {
  items: Book[];
}

const initialState: FavoriteState = {
  items: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("favorites") || "[]") : [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Book>) => {
      const exists = state.items.some((b) => b.isbn13 === action.payload.isbn13);
      if (!exists) {
        state.items.push(action.payload);

        const isDark = typeof window !== "undefined" && document.documentElement.classList.contains("dark");

        Swal.fire({
          title: "Saved!",
          text: "Book added to favorites!",
          icon: "success",
          background: isDark ? "#171717" : "#fff", 
          color: isDark ? "#fdc700" : "#111827",  
          confirmButtonColor: isDark ? "#facc15" : "#2563eb",
          customClass: {
            popup: isDark ? "dark:bg-gray-800 dark:text-yellow-400" : "",
          },
        });
      }
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },

    removeFavorite: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((b) => b.isbn13 !== action.payload);

      const isDark = typeof window !== "undefined" && document.documentElement.classList.contains("dark");

      Swal.fire({
        title: "Removed!",
        text: "Book removed from favorites!",
        icon: "warning",
        background: isDark ? "#171717" : "#fff",
        color: isDark ? "#fdc700" : "#111827",
        confirmButtonColor: isDark ? "#facc15" : "#2563eb",
      });

      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
