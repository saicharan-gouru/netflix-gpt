import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlaying: null,
        mainMovieTrailer: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addMainMovieTrailer: (state, action) => {
            state.mainMovieTrailer = action.payload;
        }
    }
})


export default movieSlice.reducer;
export const { addNowPlaying, addMainMovieTrailer } = movieSlice.actions;