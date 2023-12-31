import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularVideos: null,
        topRatedVideos: null,
        upcomingVideos: null,
        mainMovieTrailer: null
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addMainMovieTrailer: (state, action) => {
            state.mainMovieTrailer = action.payload;
        },
        addPopularVideos: (state, action) => {
            state.popularVideos = action.payload;
        },
        addTopRatedVideos: (state, action) => {
            state.topRatedVideos = action.payload;
        },
        addUpcomingVideos: (state, action) => {
            state.upcomingVideos = action.payload;
        }
    }
})


export default movieSlice.reducer;
export const { addNowPlaying, addMainMovieTrailer, addPopularVideos, addTopRatedVideos, addUpcomingVideos } = movieSlice.actions;