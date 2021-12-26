import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchReviews } from "../../services/fetchApi";
// import PropTypes from 'prop-types';
import cs from "./Reviews.module.css";

const Reviews = () => {
  const [review, setReview] = useState("");
  const { movId } = useParams();
  console.log(movId);

  useEffect(() => {
    if (!movId) {
      return;
    }
    fetchReviews(movId)
      .then(setReview)
      .catch((error) => toast.error("Ошибочка, извините пожалуйста"));
  }, [movId]);

  return (
    <>
      {review && (
        <ul className={cs.list}>
          {review.map(({ id, author, content }) => (
            <li key={id} className={cs.item}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
