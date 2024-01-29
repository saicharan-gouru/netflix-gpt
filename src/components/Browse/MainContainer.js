import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground";





const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if (!movies) return;
    const mainMovie = movies[0]



  return (
    <div>
        <div className="px-8 pt-80 py-10 md:pt-80 absolute text-white w-full aspect-video bg-gradient-to-r from-black">
            <h1 className="text-xl md:text-3xl font-bold">{mainMovie.title}</h1>
            <p className="hidden md:inline-block w-1/4 py-3">{mainMovie.overview}</p>
        </div>
        <VideoBackground mainMovie={mainMovie}/>
    </div>
  )
}

export default MainContainer