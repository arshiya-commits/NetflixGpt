import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addTrending } from "../utils/movieSlice"
const useTrendingMovies=()=>{
    const dispatch=useDispatch()
   const getTrending=async()=>{
       const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',API_OPTIONS)
       const json=await data.json()
       console.log(json.results);
      dispatch(addTrending(json.results));
   }
   useEffect(()=>{
getTrending()
   },[])
}
export default useTrendingMovies;