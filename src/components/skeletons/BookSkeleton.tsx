import React from "react";
import SkeletonElement from "./SkeletonElement";
import "./Skeleton.css";

const BookSkeleton = () => {
  return (
    <div className="flex pb-6 mb-6 flex-col md:flex-row border-b-[1px] border-[#f0f0f0]">
      <SkeletonElement type="mr-4 w-[250px] h-[300px]"></SkeletonElement>
      <div className="flex-1 mt-4 md:mt-0">
        <SkeletonElement type="title"></SkeletonElement>
        <SkeletonElement type="text"></SkeletonElement>
        <SkeletonElement type="text"></SkeletonElement>
        <SkeletonElement type="text"></SkeletonElement>
      </div>
    </div>
  );
};

export default BookSkeleton;
