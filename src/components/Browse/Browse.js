import React from 'react'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useNowPlayingVideos, usePopularVideos, useTopRatedVideos } from '../../hooks'
import useUpcomingVideos from '../../hooks/useUpcomingVideos'

const Browse = () => {

  useNowPlayingVideos();
  usePopularVideos();
  useTopRatedVideos();
  useUpcomingVideos();

  return (
    <div  >
       <MainContainer/>
       <SecondaryContainer/>
    </div>
  )
}

export default Browse