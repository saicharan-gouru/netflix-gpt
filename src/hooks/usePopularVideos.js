import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPopularVideos } from '../utils';
import { API_OPTIONS } from '../utils';

const usePopularVideos = () => {
    const dispatch = useDispatch();

    const popularVideos = useSelector(store => store.movies.popularVideos)

    const getPopularVideos = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTIONS)
            .then(response => response.json())
            .then(response => dispatch(addPopularVideos(response.results)))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        !popularVideos && getPopularVideos()
    })
}

export default usePopularVideos