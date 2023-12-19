import { useSelector } from "react-redux"
import { useMainMovieTrailer } from "../../hooks";




const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlaying);
    const mainMovie = movies[0]
    useMainMovieTrailer(mainMovie)
    const trailer = useSelector(store => store.movies?.mainMovieTrailer)

  return (
    <div>
        <div className="px-8 pt-96 absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
            <h1 className="text-3xl font-bold">{mainMovie.title}</h1>
            <p className="w-1/4 py-3">{mainMovie.overview}</p>
        </div>
        <div className="w-screen">
        <iframe 
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1&loop=1" }
        frameborder="0"
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    </div>
  )
}

export default MainContainer