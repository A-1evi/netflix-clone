/* eslint-disable react/prop-types */
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const { title, movies } = props;

  return (
    <div className="p-6 ">
      <h1 className="text-3xl text-white py-4 ">{title}</h1>
      <div className="flex overflow-x-scroll over ">
        <div className="flex   ">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
