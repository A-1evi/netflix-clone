/* eslint-disable react/prop-types */
import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="w-screen aspect-video pt-[20%] px-24  absolute bg-gradient-to-r from-black text-white z-20">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-10 text-lg font-semibold rounded-sm hover:bg-opacity-80">
          <i className=" fa-solid fa-play "></i> Play
        </button>
        <button className="bg-gray-500 text-white py-3 px-6 text-lg mx-2 rounded-sm bg-opacity-80">
          <i className="fa-solid fa-circle-info"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
