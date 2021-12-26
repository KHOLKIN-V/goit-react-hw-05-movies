import { useEffect, useState } from "react";
import { fetchTrend } from "../../services/fetchApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import cs from "./HomeView.module.css";

const HomeView = () => {
  const [movies, setMovies] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(!load);
    fetchTrend()
      .then((data) => setMovies(data))
      .catch((error) => toast.error("Ошибочка, извините пожалуйста"));
  }, []);

  return (
    <>
      {load && <h2>Загружаю, подождите, умоляю...</h2>}
      {movies && (
        <ul>
          {movies.map(({ id, title, poster_path }) => (
            <li className={cs.Item} key={id}>
              <Link className={cs.Link} to={`movies/${id}`}>
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                      : `noImage`
                  }
                  alt={title}
                />
                <p className={cs.title}>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      ;
    </>
  );
};

export default HomeView;
