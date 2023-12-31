import React from 'react'
import { useSelector } from 'react-redux'
import {useMainMovieTrailer} from "../../hooks"

const VideoBackground = ({mainMovie}) => {
    useMainMovieTrailer(mainMovie)
    const trailer = useSelector(store => store.movies?.mainMovieTrailer)
  return (
    <div>
    <iframe 
    className="w-full aspect-video"
    src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1&loop=1" }
    frameBorder="0"
    title="YouTube video player"  
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  )
}

export default VideoBackground