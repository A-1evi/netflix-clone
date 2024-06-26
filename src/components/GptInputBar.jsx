import React, { useEffect, useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import model from "../utils/gemini";
import { OPTION_API } from "../utils/constants";
import { addGptMoviesSearch } from "../utils/gptSlice";

const GptInputBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTmbdMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      OPTION_API
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const prompt =
      "Act as movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      "only give me name of 5 movies , comma seperated  like in example results given ahead. Example Results :[a,b,c,d,e]";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    if (!text) {
      //error handling
    }
    const movieList = text.split(",");
    console.log(movieList);

    const promiseArray = movieList.map((movie) => searchTmbdMovies(movie));

    // [promies , promise ,promise ,promise ,promise]
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMoviesSearch({
        movieNames: movieList,
        searchMovieResults: tmdbResults,
      })
    );
  };
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[50%] md:p-[20%] md:pb-0 flex justify-center md:mx-auto ">
      <form className="md:w-screen flex w-screen  " onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="p-6 m-6 w-[90%] text-md  md:text-2xl bg-black text-white"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        ></input>
        <button
          className="p-2 my-8 mr-5 md:my-8 md:mx-5 md:px-7 t md:text-2xl  bg-red-600 text-white md:rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptInputBar;
