import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./components/features/bookList/BookList";
import BookDetails from "./components/features/bookDetails/BookDetails";
import Banner from "./components/common/Banner";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App></App>}>
            <Route path="" element={<Banner></Banner>}></Route>
            <Route path="book" element={<BookList></BookList>}></Route>
            <Route
              path="book/:id"
              element={<BookDetails></BookDetails>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
