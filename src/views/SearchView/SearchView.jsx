import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchSearches } from "../../services/fetchApi";
// import cs from "./SearchView.module.css";
import Container from "../../components/Container/Container";
import Searchbar from "../../components/SearchBar/SearchBar";
import noImage from "../NotFoundView/noimage.png";

const SearchView = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    fetchSearches(query)
      .then((data) => setMovies(data))
      .catch((error) => toast.error("Ошибочка, извините пожалуйста"));
  }, [query]);

  const submit = (q) => {
    navigate({ ...location, search: `query=${q}` });
  };

  return (
    <Container>
      <Searchbar onSubmit={submit} />
      {movies &&
        movies.map(({ title, poster_path, id }) => (
          <li key={id}>
            <Link to={`${id}`}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : noImage
                }
                alt={title}
                width="350"
              />
              <p>{title}</p>
            </Link>
          </li>
        ))}
    </Container>
  );
};

export default SearchView;
