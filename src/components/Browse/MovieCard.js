import React from 'react'
import { IMG_BASE_URL } from '../../utils'

const MovieCard = ({imgURL}) => {
  if(!imgURL) return;
  return (
    <div className="w-44">
        <img src={IMG_BASE_URL+imgURL} alt="movie" />
    </div>
  )
}

export default MovieCard