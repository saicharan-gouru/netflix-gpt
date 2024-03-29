import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingVideos } from '../utils';
import { API_OPTIONS } from '../utils';

const useUpcomingVideos = () => {
    const dispatch = useDispatch();

    const upcomingVideos = useSelector(store => store.movies.upcomingVideos)

    const getUpcomingVideos = () => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
            .then(response => response.json())
            .then(response => dispatch(addUpcomingVideos(response.results)))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        !upcomingVideos && getUpcomingVideos()
    })
}

export default useUpcomingVideos