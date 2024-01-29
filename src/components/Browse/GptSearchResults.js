import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSearchResults = () => {

    const gpt = useSelector(store => store.gpt)
    const {gptSearchMovieNames, gptSearchMovieDetails} = gpt;

    if(!gptSearchMovieNames) return;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
        <div>
            {
                gptSearchMovieNames.map((movieName,i)=><MovieList key={i} title={movieName} movies={gptSearchMovieDetails[i]} /> )
            }
        </div>
    </div>
  )
}

export default GptSearchResults