import { useState, useEffect, lazy, Suspense } from "react";
import {
  Link,
  NavLink,
  useParams,
  useLocation,
  Route,
  Routes,
} from "react-router-dom";
import { fetchMovie } from "../../services/fetchApi";
import { toast } from "react-toastify";
import noImage from "../NotFoundView/noimage.png";
import cs from "./MovieView.module.css";
import Container from "../../components/Container/Container.jsx";
import Cast from "../../components/Cast/Cast.jsx";
import Reviews from "../../components/Reviews/Reviews.jsx";

const MovieView = () => {
  const [movie, setMovie] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [loading, setLoading] = useState(false);
  const { movId } = useParams();
  const location = useLocation();
  // const history = useHistory();

  useEffect(() => {
    // if (!movId) return;
    fetchMovie(movId)
      .then((data) => setMovie(data))
      .catch((error) => toast.error("Ошибочка, извините пожалуйста"));
  }, [movId]);

  // console.log(movie);

  const { poster_path, title, genres, vote_average, overview } = movie;

  return (
    <Container>
      <Link to={location}>
        <button type="button" className={cs.goBackBtn}>
          Go back
        </button>
      </Link>

      {movie && (
        <div className={cs.filmContainer}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : noImage
            }
            alt={title}
            width="350px"
          />
          <div className={cs.filmDescription}>
            <h1 className={cs.filmTitle}>{title}</h1>
            <p className={cs.filmText}>User score: {vote_average}</p>
            <h2 className={cs.filmCaption}>Overview</h2>
            <p className={cs.filmText}>{overview}</p>
            {genres && (
              <>
                <h3 className={cs.filmCaption}>Genres</h3>
                <ul>
                  {genres.map(({ id, name }) => (
                    <li key={id}>
                      <p>{name}</p>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
      <hr />
      <p>Additional information</p>
      <ul>
        {" "}
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <hr />
      <Suspense fallback={<h1>Загружаем...</h1>}>
        <Routes>
          <Route path="cast" element={<Cast movId={movId} />} />
          <Route path="reviews" element={<Reviews movId={movId} />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default MovieView;
