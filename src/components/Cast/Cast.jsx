import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchCast } from "../../services/fetchApi";
// import PropTypes from 'prop-types';
import noImage from "../../views/NotFoundView/noimage.png";
import cs from "./Cast.module.css";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movId } = useParams();
  console.log(movId);

  useEffect(() => {
    if (!movId) {
      return;
    }
    fetchCast(movId)
      .then(setCast)
      .catch((error) => toast.error("Ошибочка, извините пожалуйста"));
  }, [movId]);

  return (
    <>
      {cast && (
        <ul className={cs.list}>
          {cast.map(({ id, name, profile_path, character }) => (
            <li key={id} className={cs.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : noImage
                }
                alt={name}
                width="200px"
              />
              <p className={cs.name}>{name}</p>
              <p className={cs.character}>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
