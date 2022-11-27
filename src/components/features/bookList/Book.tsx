import React from "react";
import { Link } from "react-router-dom";
import Field from "../../common/Field";

export interface BookProps {
  id: string;
  cover_id: string;
  title: string;
  time: string;
  author: string[];
  edition_count: number;
  first_publish_year: number;
}

const Book = (props: BookProps) => {
  const {
    id,
    cover_id,
    title,
    time,
    author,
    edition_count,
    first_publish_year,
  } = props;
  return (
    <div className="flex pb-6 mb-6 flex-col md:flex-row border-b-[1px] border-[#f0f0f0]">
      <div className="mr-4 w-[250px] h-[300px]">
        <img src={cover_id} alt="bookImage" className="w-full h-full"></img>
      </div>
      <div className="flex-1 mt-4 md:mt-0">
        <Link to={`/book/${id}`}>
          <h1 className="text-2xl font-medium pb-8 cursor-pointer hover:text-[#C7511F] transition-colors">
            {title}
          </h1>
        </Link>
        <Field label="Info" value={time}></Field>
        <Field label="Author" value={author.join(", ")}></Field>
        <Field label="Total Editions" value={edition_count}></Field>
        <Field label="Publish Year" value={first_publish_year}></Field>
      </div>
    </div>
  );
};

export default Book;
