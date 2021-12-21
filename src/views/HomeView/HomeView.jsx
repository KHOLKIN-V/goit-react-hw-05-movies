import { useEffect, useState } from "react";
import { fetchTrend } from "../../services/fetchApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import cs from "./HomeView.module.css";

const HomeView = () => {
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetchTrend()
      .then((data) => setMovies(data))
      .catch((err) => toast.error("Ошибочка, извините пожалуйста"));
  }, []);

  return (
    <>
      {load && <h2>Загружаю, подождите, умоляю...</h2>}
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li className={cs.Item} key={movie.id}>
              <Link className={cs.Link} to={`movies/${movie.id}`}>
                {movie.name ? movie.name : movie.title}
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
