import { createSlice } from "@reduxjs/toolkit";
import { BookProps } from "../../components/features/bookList/Book";
import { BookDetail } from "../../constants/types";

export interface BookState {
  searchTerm: string;
  hasErrors: boolean;
  booklist: BookProps[];
  book: BookDetail | null;
}

export const initialState: BookState = {
  searchTerm: "",
  hasErrors: false,
  booklist: [],
  book: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    searchBook(state, action) {
      state.searchTerm = action.payload;
      state.booklist = [];
    },
    getBooks: (state, action) => {
      state.booklist = action.payload;
      state.hasErrors = false;
    },
    getBookDetails: (state, action) => {
      state.book = action.payload;
      state.hasErrors = false;
    },
    setFailure: (state) => {
      state.hasErrors = true;
    },
  },
});

export const { searchBook, getBooks, setFailure, getBookDetails } =
  bookSlice.actions;
export default bookSlice.reducer;
