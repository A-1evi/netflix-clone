import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptInputBar = () => {

  const langKey = useSelector(store => store.config.lang)

  return (
    <div className="p-[20%] flex justify-center mx-auto ">
      <form className="w-screen ">
        <input
          className="p-6 m-6 w-9/12 text-2xl bg-black text-white"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        ></input>
        <button className="py-5 px-12 m-2  text-2xl  bg-red-600 text-white rounded-lg">
        {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptInputBar;
