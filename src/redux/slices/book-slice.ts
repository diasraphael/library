import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BookState {
  searchTerm: string;
  hasErrors: boolean;
  booklist: [];
  book: any;
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
    searchBook(state, action: PayloadAction<string>) {
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
