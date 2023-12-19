import React from 'react'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useNowPlayingVideos } from '../../hooks'

const Browse = () => {

  useNowPlayingVideos();

  return (
    <div>
       <MainContainer/>
       <SecondaryContainer/>
    </div>
  )
}

export default Browse