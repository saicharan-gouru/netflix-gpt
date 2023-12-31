import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addTopRatedVideos } from '../utils';
import { API_OPTIONS } from '../utils';

const useTopRatedVideos = () => {
    const dispatch = useDispatch();

    const getTopRatedVideos = () => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
            .then(response => response.json())
            .then(response => dispatch(addTopRatedVideos(response.results)))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getTopRatedVideos()
    })
}

export default useTopRatedVideos