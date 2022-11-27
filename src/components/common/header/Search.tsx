import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  inputValue: string;
  handleClick: (event: any, userInput: string) => void;
}

const Search = (props: SearchProps) => {
  const { inputValue, handleClick } = props;
  const [input, setInput] = useState(inputValue || "");
  useEffect(() => {
    setInput(inputValue);
  }, [inputValue]);

  return (
    <form>
      <div className="flex items-center h-12 bg-[#eef3f8] rounded-md">
        <span className="pl-3 text-[gray]">
          <button
            type="submit"
            onClick={(event: any) => {
              handleClick(event, input);
            }}
          >
            <SearchIcon></SearchIcon>
          </button>
        </span>
        <input
          className="flex-1 border-none focus:outline-0 p-1 mr-2 bg-[#eef3f8]"
          value={input}
          placeholder="Search a book"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default Search;
