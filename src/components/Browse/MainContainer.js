import { useSelector } from "react-redux"
import { useMainMovieTrailer } from "../../hooks";




const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlaying);
    const mainMovie = movies[0]
    useMainMovieTrailer(mainMovie)

  return (
    <div>
        <div className="px-8 pt-56 absolute">
            <h1 className="text-3xl font-bold">{mainMovie.title}</h1>
            <p className="w-2/4 py-3">{mainMovie.overview}</p>
        </div>
    </div>
  )
}

export default MainContainer