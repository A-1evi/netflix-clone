import React from "react";
import { LOGIN_BG } from "../utils/constants";
import GptInputBar from "./GptInputBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20">
        <img className="w-screen" src={LOGIN_BG} alt="logo"></img>
      </div>
      <GptInputBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
