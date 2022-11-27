import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/book-slice";

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
