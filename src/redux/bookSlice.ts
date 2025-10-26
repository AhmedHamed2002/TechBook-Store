import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getNewBooks, searchBooks } from "@/lib/api";

export const fetchNewBooks = createAsyncThunk("books/fetchNew", async () => {
  return await getNewBooks();
});

export const searchBooksThunk = createAsyncThunk("books/search", async (query: string) => {
  return await searchBooks(query);
});

interface BookState {
  books: any[];
  searched: any[];
  loading: boolean;
}

const initialState: BookState = { books: [], searched: [], loading: false };

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNewBooks.fulfilled, (state, action) => {
        state.books = action.payload.books;
        state.loading = false;
      })
      .addCase(searchBooksThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchBooksThunk.fulfilled, (state, action) => {
        state.searched = action.payload.books;
        state.loading = false;
      });
  },
});

export default bookSlice.reducer;
