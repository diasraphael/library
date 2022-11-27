import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "../../../redux/hooks";
import { searchBook } from "../../../redux/slices/book-slice";

const Logo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goHome = () => {
    dispatch(searchBook(""));
    navigate("/");
  };
  return (
    <div className="cursor-pointer">
      <img
        src="/assets/logo.svg"
        width="189"
        height="47"
        alt="Open Library logo"
        onClick={() => goHome()}
      />
    </div>
  );
};

export default Logo;
