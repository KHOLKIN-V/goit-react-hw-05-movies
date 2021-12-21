import { useState, useEffect } from "react";
// import { fetchTrend } from "../../services/fetchApi";
// import { NavLink } from "react-router-dom";
// import cs from "./MovieView.module.css";
import Searchbar from "../../components/SearchBar/SearchBar";

const MovieView = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  // const location = useLocation();
  // const history = useHistory();

  // const handleSubmit = (e) => {
  //   setMovies([]);
  //   setSearchQuery(e);
  //   history.push({ ...location, search: `by=${e}` });
  //   return;
  // };

  return (
    <>
      {/* <Searchbar onSubmit={handleSubmit} /> */}
      <div>Тут фильмы</div>
    </>
  );
};

export default MovieView;
