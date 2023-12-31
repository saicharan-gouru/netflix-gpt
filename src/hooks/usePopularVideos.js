import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addPopularVideos } from '../utils';
import { API_OPTIONS } from '../utils';

const usePopularVideos = () => {
    const dispatch = useDispatch();

    const getPopularVideos = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', API_OPTIONS)
            .then(response => response.json())
            .then(response => dispatch(addPopularVideos(response.results)))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getPopularVideos()
    })
}

export default usePopularVideos