import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies);

  return (
    <div className="bg-black ">
      <div className="relative z-50 -my-52 ">
        <MovieList title="Newly Added" movies={movieList.nowPlayingMovies} />
        <MovieList title="Popular" movies={movieList.popularMovies} />
        <MovieList title="Top-rated" movies={movieList.topRatedMovies} />
        <MovieList title="Horror" movies={movieList.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
