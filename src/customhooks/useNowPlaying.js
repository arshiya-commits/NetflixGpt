import { useDispatch, useSelector } from 'react-redux'
import { addNowplaying } from '../utils/movieSlice'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
const useNowPlaying=()=>{
    const dispatch=useDispatch()
    const now_playing=useSelector((store)=>store.movies.getNowplaying)
  const getNowplaying= async()=>{
       const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
       const json=await data.json()
       console.log(json.results)
       dispatch(addNowplaying(json.results));
  }
  useEffect(()=>{
    if(!now_playing) 
    getNowplaying()
  },[]
)
}
export default useNowPlaying;