import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const results = useSelector((store) => store.gpt);
  const { movieNames, searchMovieResults } = results;
  if (!movieNames) return null;
  if (!searchMovieResults) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      {movieNames.map((movie, index) => (
        <MovieList
          key={movie}
          title={movie}
          movies={searchMovieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
