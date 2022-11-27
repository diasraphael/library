import React from "react";
import { Outlet } from "react-router-dom";

const Content = () => {
  return (
    <div className="bg-[#f3f2ef] p-8">
      <div className="lib-width shadow-lib p-6 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
