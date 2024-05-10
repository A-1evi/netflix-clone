/* eslint-disable react/prop-types */
import React from "react";
import { POSTER_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div>
      <div className="w-48 pr-4">
        <img src={POSTER_CDN_URL + posterPath} alt="nowPlayin movie"></img>
      </div>
    </div>
  );
};

export default MovieCard;
