/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { POSTER_CDN_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const MovieCard = ({ movieId, posterPath }) => {
  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <div
        className="w-48 pr-4"
        onMouseOver={() => setHidden(false)}
        onMouseLeave={() => setHidden(true)}
      >
        {hidden ? null : <VideoCard movieId={movieId} />}
        <img src={POSTER_CDN_URL + posterPath} alt="nowPlayin movie"></img>
      </div>
    </div>
  );
};

export default MovieCard;
