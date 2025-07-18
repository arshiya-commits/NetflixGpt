
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addUpComing} from '../utils/movieSlice'
const useUpComingMovies=()=>{
    const dispatch=useDispatch()
     const getUpComing=async()=>{
      
            const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTIONS)
            const json=await data.json()
            console.log(json.results)
            dispatch(addUpComing(json.results))

    }
    useEffect(()=>{
      getUpComing()
    },[])
}


export default useUpComingMovies;