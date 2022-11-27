import React, { useState } from "react";
import Search from "./components/common/header/Search";
import { useDispatch, useSelector } from "./redux/hooks";
import { searchBook } from "./redux/slices/book-slice";
import "./App.css";
import Header from "./components/common/header/Header";
import Content from "./components/common/Content";


function App() {
  /*   const searchTerm = useSelector((state) => state.book.searchTerm);
  const [input, setInput] = useState(searchTerm || "");
  const dispatch = useDispatch();
  const { loading, books, hasErrors } = useSelector((state) => state.book);
  const handleClick = (event: any) => {
    event.preventDefault();
    dispatch(searchBook(input));
  }; */
  return (
    /*  <form>
      <input
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button onClick={handleClick} type="submit">
        Search
      </button>
    </form> */
    <div className="w-full">
      <Header></Header>
      <Content></Content>

     
    </div>
  );
}

export default App;
