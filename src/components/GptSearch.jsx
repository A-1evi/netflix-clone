import React from "react";
import { LOGIN_BG } from "../utils/constants";
import GptInputBar from "./GptInputBar";

const GptSearch = () => {
  return (
    <div>
    <img className="absolute -z-20 w-screen" src={LOGIN_BG} alt="logo"></img>
   <GptInputBar/>
   </div> 
  );
};

export default GptSearch;
