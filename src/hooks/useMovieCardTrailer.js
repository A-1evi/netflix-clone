import { useDispatch } from "react-redux";
import { OPTION_API } from "../utils/constants";
import { addMovieCardTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieCardTrailer = (movieId) => {
  const dispatch = useDispatch();

  if (!movieId) return null;

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      OPTION_API
    );
    const json = await data.json();

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];

    dispatch(addMovieCardTrailer(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieCardTrailer;
