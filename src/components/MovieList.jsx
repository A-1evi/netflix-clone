/* eslint-disable react/prop-types */
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6 ">
      <h1 className="text-md md:text-3xl text-white py-4 ">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex ">
          {movies &&
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                movieId={movie.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
