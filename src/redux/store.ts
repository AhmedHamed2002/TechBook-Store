import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import favoriteReducer from "./favoriteSlice";
import bookReducer from "./bookSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
    books: bookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
