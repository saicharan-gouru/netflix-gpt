import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'



const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies);
  const popularVideos = useSelector(store => store.movies?.popularVideos);
  const topRatedVideos = useSelector(store => store.movies?.topRatedVideos);
  const upcomingVideos = useSelector(store => store.movies?.upcomingVideos)

  return (
    <div className="bg-black text-white">
      <div className="relative my-0 md:-my-52">
        <MovieList title="Now playing" movies={nowPlayingMovies}/>
        <MovieList title="Popular" movies={popularVideos}/>
        <MovieList title="Top Rated" movies={topRatedVideos}/>
        <MovieList title="Upcoming" movies={upcomingVideos}/>

      </div>
    </div>
  )
}

export default SecondaryContainer