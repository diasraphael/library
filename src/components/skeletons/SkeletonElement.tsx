import React from "react";
import "./Skeleton.css";

interface SkeletonProps {
  type: string;
}

const SkeletonElement = (props: SkeletonProps) => {
  const { type } = props;
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};

export default SkeletonElement;
