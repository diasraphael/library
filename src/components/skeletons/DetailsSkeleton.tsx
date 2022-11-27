import React from "react";
import SkeletonElement from "./SkeletonElement";

const DetailsSkeleton = () => {
  return (
    <div className="h-[600px] overflow-hidden">
      <SkeletonElement type="w-full h-full"></SkeletonElement>
      <SkeletonElement type="title"></SkeletonElement>
      <SkeletonElement type="text"></SkeletonElement>
      <SkeletonElement type="text"></SkeletonElement>
      <SkeletonElement type="text"></SkeletonElement>
      <SkeletonElement type="text"></SkeletonElement>
      <SkeletonElement type="text"></SkeletonElement>
      <SkeletonElement type="text"></SkeletonElement>
    </div>
  );
};

export default DetailsSkeleton;
