import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlaying } from '../utils';
import { API_OPTIONS } from '../utils';

const useNowPlayingVideos = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

    const getNowPlayingVideos = () => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
            .then(response => response.json())
            .then(response => dispatch(addNowPlaying(response.results)))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        !nowPlayingMovies && getNowPlayingVideos()
    })
}

export default useNowPlayingVideos