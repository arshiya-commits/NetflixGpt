import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.getNowplaying)
    
  if (!movies || movies.length === 0) return ;
    const mainMovie=movies[0];
    console.log("the first movie is",mainMovie)
    const {original_title,overview,id}=mainMovie;
  return (
   <>
   <VideoTitle title={original_title} overview={overview} />
   <VideoBackground id={id}/>
   
   </>
  )
}

export default MainContainer;