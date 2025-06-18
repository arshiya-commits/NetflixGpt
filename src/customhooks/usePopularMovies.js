import { useDispatch } from 'react-redux'
import {  addPopular } from '../utils/movieSlice'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
const usePopularMovies=()=>{
    const dispatch=useDispatch()
  const getPopular= async()=>{
       const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS)
       const json=await data.json()
       console.log(json.results)
       dispatch(addPopular(json.results));
  }
  useEffect(()=>{
    getPopular()
  },[]
)
}
export default usePopularMovies;