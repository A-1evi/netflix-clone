/* eslint-disable react/prop-types */
import React from "react";

import { useSelector } from "react-redux";
import useMovieCardTrailer from "../hooks/useMovieCardTrailer";
import useMovieDetails from "../hooks/useMovieDetails";

const VideoCard = ({ movieId }) => {
  const trailerCardVideo = useSelector(
    (store) => store.movies?.movieCardTrailer
  );

  const movieDetails = useSelector((store) => store.movies?.movieDetails);
  console.log(movieDetails);

  useMovieCardTrailer(movieId);

  useMovieDetails(movieId);
  return (
    <div className="w-[380px] h-[380px] bg-black absolute z-50 overflow-hidden rounded-md">
      <div className=" relative  -mt-20  ">
        <iframe
          className="w-[400px] h-[300px] "
          src={
            "https://www.youtube.com/embed/" +
            trailerCardVideo?.key +
            "?&autoplay=1&mute=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
      <div className="relative -mt-12 bg-gradient-to-b from-black">
        <h1 className="text-white text-2xl font-bold my-2">
          {movieDetails?.original_title}
        </h1>
        <h2 className="text-white  text-xl flex justify-between">
          <span className="font-bold text-xl">
            {movieDetails?.release_date?.slice(0, 4)}
          </span>
          <span className="mr-5 text-lg font-bold">
            {movieDetails?.runtime} minutes
          </span>
        </h2>
        <p className="text-white  ">
          {movieDetails?.overview?.substr(0, 100) + "..."}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
