import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        mainMovieTrailer: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMainMovieTrailer: (state, action) => {
            state.mainMovieTrailer = action.payload;
        }
    }
})


export default movieSlice.reducer;
export const { addNowPlaying, addMainMovieTrailer } = movieSlice.actions;