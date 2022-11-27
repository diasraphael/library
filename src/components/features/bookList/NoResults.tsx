import React from "react";
interface NoResultsProps {
  searchTerm: string;
}

const NoResults = (props: NoResultsProps) => {
  const { searchTerm } = props;
  return (
    <div>
      <div className="text-2xl font-medium text-[#C7511F] mb-4">
        No search results for the text "{searchTerm}. Kindly try with different
        search text"
      </div>
      <div className="max-h-[600px] overflow-hidden pb-4">
        <img
          className="w-full h-full"
          src="./assets/notfound.png"
          alt="not found"
        ></img>
      </div>
    </div>
  );
};

export default NoResults;
