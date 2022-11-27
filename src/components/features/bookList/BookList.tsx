import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "../../../redux/hooks";
import {
  BookState,
  getBooks,
  setFailure,
} from "../../../redux/slices/book-slice";
import { BOOKS_URL, TIMELINE_DESCRIPTION } from "../../../constants/constant";
import Book, { BookProps } from "./Book";
import BookSkeleton from "../../skeletons/BookSkeleton";
import NoResults from "./NoResults";

const BookList = () => {
  const dispatch = useDispatch();
  const { searchTerm, booklist } = useSelector(
    (state: { book: BookState }) => state.book
  );
  const [loading, setLoading] = useState(false);
  const fetchBooks = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${BOOKS_URL}${searchTerm}`);
      if (data.docs) {
        const books = data.docs.slice(0, 20).map((book: any) => {
          const {
            key,
            author_name,
            cover_i,
            edition_count,
            first_publish_year,
            title,
            time,
          } = book;
          return {
            id: key.replace("/works/", ""),
            author: author_name,
            cover_id: cover_i
              ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
              : "./assets/404.jpg",
            edition_count: edition_count,
            first_publish_year: first_publish_year,
            title: title,
            time: time ? time : TIMELINE_DESCRIPTION,
          };
        });
        dispatch(getBooks(books));
        setLoading(false);
      } else {
        dispatch(getBooks([]));
        setLoading(false);
      }
    } catch (error) {
      dispatch(setFailure);
      setLoading(false);
    }
  }, [searchTerm, dispatch]);

  useEffect(() => {
    fetchBooks();
  }, [searchTerm, fetchBooks, dispatch]);
  return (
    <>
      {loading &&
        [1, 2, 3, 4, 5].map((n: number) => (
          <BookSkeleton key={n}></BookSkeleton>
        ))}
      {booklist.length > 0 ? (
        booklist.map((book: BookProps) => {
          return <Book key={book.id} {...book}></Book>;
        })
      ) : (
        <NoResults searchTerm={searchTerm}></NoResults>
      )}
    </>
  );
};

export default BookList;
