import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'



const SecondaryContainer = () => {

  const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies)
  return (
    <div className="bg-black text-white">
      <div  className="relative z-40 -my-36">
        <MovieList title="Now playing" movies={nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer