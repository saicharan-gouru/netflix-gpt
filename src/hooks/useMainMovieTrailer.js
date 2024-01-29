import { useEffect } from 'react'
import { API_OPTIONS, addMainMovieTrailer } from '../utils'
import { useDispatch, useSelector } from 'react-redux'

const useMainMovieTrailer = (mainMovie) => {
    const dispatch = useDispatch();

    const mainMovieTrailer = useSelector(store => store.movies.mainMovieTrailer)

    const getMainMovieTrailer = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${mainMovie.id}/videos?language=en-US`, API_OPTIONS)
        const data = await response.json()
        const filteredData = data.results.filter(movie => movie.type === "Trailer")
        const trailer = filteredData.length ? filteredData[0] : data[0]
        dispatch(addMainMovieTrailer(trailer))
    }

    useEffect(() => {
        !mainMovieTrailer && getMainMovieTrailer()
    })
}

export default useMainMovieTrailer