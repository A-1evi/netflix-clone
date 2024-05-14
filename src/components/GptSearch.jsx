import React from "react";
import { LOGIN_BG } from "../utils/constants";
import GptInputBar from "./GptInputBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <>
      {" "}
      <div className="fixed -z-20">
          <img className="w-screen h-screen object-cover" src={LOGIN_BG} alt="logo"></img>
        </div>
      <div className="">
       
        <GptInputBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
