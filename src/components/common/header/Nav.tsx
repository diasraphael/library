import React from "react";
import Search from "./Search";
import Logo from "./Logo";
import { useDispatch, useSelector } from "../../../redux/hooks";
import { BookState, searchBook } from "../../../redux/slices/book-slice";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const searchTerm = useSelector(
    (state: { book: BookState }) => state.book.searchTerm
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (event: any, userInput: string) => {
    event.preventDefault();
    dispatch(searchBook(userInput));
    navigate("/book");
  };
  return (
    <div className="bg-white left-0 top-0 p-3 border-b-[lightgray] border-b-[1px]">
      <div className="lib-width flex items-center justify-between">
        <Logo></Logo>
        <Search inputValue={searchTerm} handleClick={handleClick}></Search>
      </div>
    </div>
  );
};

export default Nav;
