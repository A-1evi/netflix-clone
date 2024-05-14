/* eslint-disable react/prop-types */
import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;

  return (
    <div className="w-screen aspect-video md:pt-[20%] pt-[30%] md:px-24 md:px-10 px-5  absolute bg-gradient-to-r from-black text-white z-20">
      <h1 className="text-lg md:text-5xl md:w-1/4 w-1/2    font-bold">{title}</h1>
      <p className="hidden md:inline-block  py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 my-7 md:p-3 md:px-10 md:text-lg font-semibold rounded-sm hover:bg-opacity-80">
          <i className=" fa-solid fa-play "></i> Play
        </button>
        <button className="bg-gray-500 text-white hidden md:inline-block py-3 px-6 text-lg mx-2 rounded-sm bg-opacity-80">
          <i className="fa-solid fa-circle-info"></i> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
