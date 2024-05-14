import { useDispatch, useSelector } from "react-redux";
import { OPTION_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      OPTION_API
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies &&  getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
