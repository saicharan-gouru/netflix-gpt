import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: { showGptSearch: false, gptSearchMovieNames: null, gptSearchMovieDetails: null },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptSearchResult: (state, action) => {
            const { movieNames, movieDetails } = action.payload
            state.gptSearchMovieNames = movieNames
            state.gptSearchMovieDetails = movieDetails
        },
        clearGptSearchResult: (state) => {
            state.gptSearchMovieNames = null
            state.gptSearchMovieDetails = null
        }
    }
})


export default gptSlice.reducer;
export const { toggleGptSearchView, addGptSearchResult, clearGptSearchResult } = gptSlice.actions;