import { useEffect } from "react";
import { OPTION_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/moviesSlice";

const useMovieDetails = (movieId) => {
  const dispatch = useDispatch();
  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      OPTION_API
    );
    const json = await data.json();

    dispatch(addMovieDetails(json));
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
};

export default useMovieDetails;
