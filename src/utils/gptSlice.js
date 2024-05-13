import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState:{
        showGpt : false,
        movieNames: null,
        searchMovieResults:null

    },
    reducers:{
        toggleGptSearchView:(state,action) =>{
            state.showGpt = !state.showGpt;
        },
        addGptMoviesSearch:(state,action) => {
            const {movieNames , searchMovieResults} = action.payload;
            state.movieNames = movieNames;
            state.searchMovieResults = searchMovieResults;
        }
    }
})


export const {toggleGptSearchView, addGptMoviesSearch} = gptSlice.actions;

export default gptSlice.reducer;