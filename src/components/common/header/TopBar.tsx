import React from "react";

const TopBar = () => {
  return (
    <div className="bg-[#333] p-3">
      <div className="lib-width cursor-pointer">
        <img
          alt="Internet Archive logo"
          src="/assets/initial-logo.svg"
          width="160"
        ></img>
      </div>
    </div>
  );
};

export default TopBar;
