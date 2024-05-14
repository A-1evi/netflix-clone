import { useDispatch, useSelector } from "react-redux";
import { OPTION_API } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      OPTION_API
    );
    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRated();
  }, []);
};

export default useTopRated;
