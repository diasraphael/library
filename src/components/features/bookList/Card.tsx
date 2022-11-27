import React from "react";

interface CardProps {
  imagePath: string;
}

const Card = (props: CardProps) => {
  const { imagePath } = props;
  return (
    <div className="mr-4 w-[250px] h-[300px]">
      <img src={imagePath} alt="bookImage" className="w-full h-full"></img>
    </div>
  );
};

export default Card;
