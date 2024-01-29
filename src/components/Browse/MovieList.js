import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    if(!movies) return;
  return (
    <div className="px-5">
        <h1 className="py-4 text-lg md:text-2xl font-bold">{title}</h1>
        <div className="flex overflow-scroll scrollbar-hide overflow-y-hidden ">
        <div className="flex gap-6" >
        {
        
        movies.map(movie => <MovieCard imgURL={movie.poster_path} key={movie.id}/> )      
        }  
        </div> 
        </div>
    </div>
  )
}

export default MovieList