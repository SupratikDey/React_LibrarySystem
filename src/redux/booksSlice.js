import { createSlice } from "@reduxjs/toolkit";
import { Items } from "../utils/MockData";

const initialState = {
  Books: Items,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      // New book goes to the front so Browse Books shows it first
      state.Books.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
