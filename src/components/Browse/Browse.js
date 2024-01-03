import React from 'react'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import { useNowPlayingVideos, usePopularVideos, useTopRatedVideos } from '../../hooks'
import useUpcomingVideos from '../../hooks/useUpcomingVideos'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {

  useNowPlayingVideos();
  usePopularVideos();
  useTopRatedVideos();
  useUpcomingVideos();

  const showGptSearch = useSelector(store => store.gpt?.showGptSearch);

  return (
    <div>
      {
      showGptSearch ?
      <GptSearch/> :
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
      }
    </div>
  )
}

export default Browse