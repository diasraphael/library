import axios from "axios";
import React, { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BOOK_DETAIL_URL } from "../../../constants/constant";
import { useDispatch } from "../../../redux/hooks";
import {
  BookState,
  getBookDetails,
  setFailure,
} from "../../../redux/slices/book-slice";
import Field from "../../common/Field";
import DetailsSkeleton from "../../skeletons/DetailsSkeleton";

const BookDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { book } = useSelector((state: { book: BookState }) => state.book);
  const fetchBookDetails = useCallback(async () => {
    setLoading(true);
    dispatch(getBookDetails(null));
    try {
      const { data } = await axios.get(`${BOOK_DETAIL_URL}${id}.json`);
      if (data) {
        const {
          description,
          title,
          covers,
          subject_places,
          subject_times,
          subjects,
        } = data;
        const bookDetail = {
          description: description
            ? description.value
            : "No description available",
          title: title,
          image: covers
            ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
            : "./assets/404.jpg",
          subject_places: subject_places
            ? subject_places.join(",")
            : "No subjects available",
          subject_times: subject_times
            ? subject_times.join(",")
            : "No Subject times available",
          subjects: subjects ? subjects.join(", ") : "No subjects available",
        };
        dispatch(getBookDetails(bookDetail));
        setLoading(false);
      } else {
        dispatch(getBookDetails(null));
        setLoading(false);
      }
    } catch (error) {
      dispatch(setFailure);
      setLoading(false);
    }
  }, [id, dispatch]);
  useEffect(() => {
    fetchBookDetails();
  }, [id, fetchBookDetails]);
  return (
    <>
      <Link to={`/book`}>
        <h1 className="text-2xl font-medium pb-8 cursor-pointer hover:text-[#C7511F] transition-colors hover:underline hover:underline-offset-8">
          Back
        </h1>
      </Link>
      {loading && <DetailsSkeleton></DetailsSkeleton>}
      {book && (
        <div>
          <div className="max-h-[600px] overflow-hidden">
            <img src={book.image} alt="cover" className="w-full h-full"></img>
          </div>
          <div className="text-2xl font-medium py-8">{book.title}</div>
          <div className="text-xl font-medium pb-2">{book.description}</div>
          <Field label="Subject places" value={book.subject_places}></Field>
          <Field label="Subject times" value={book.subject_times}></Field>
          <Field label="Subject" value={book.subjects}></Field>
        </div>
      )}
    </>
  );
};

export default BookDetails;
