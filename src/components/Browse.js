import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlaying from '../customhooks/useNowPlaying'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../customhooks/usePopularMovies'
import useUpComingMovies from '../customhooks/useUpcomingMovies'
import useTrendingMovies from '../customhooks/useTrendingMovies'

import { useSelector } from 'react-redux'
import GPTSearch from './GPTSearch'
const Browse = () => {
  //here we are fetching the data from the api and kepping this into the store using dispatch
  //instead of writing this much in this browse we are using the hook
  //const dispatch=useDispatch()
//   const getNowplaying= async()=>{
//        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
//        const json=await data.json()
//        console.log(json.results)
//        dispatch(addNowplaying(json.results));
//   }
//   useEffect(()=>{
//     getNowplaying()
//   },[]
// )
const showGptSearch=useSelector((store=>store.gpt.showGptSearch))
  useNowPlaying()
  usePopularMovies()
  useUpComingMovies()
  useTrendingMovies()
  return (
    <>
    <div><Header/>
    {showGptSearch? <GPTSearch/>:
    <>
     <MainContainer/>
     <SecondaryContainer/>
    </>}
   
  
    </div>
     {
      /*
      MainContainer
      --vidoebackground
      --video title
      SecondaryContainer
      -MovieList
      --card*n
      */
     }
    </>
  )
}

export default Browse;