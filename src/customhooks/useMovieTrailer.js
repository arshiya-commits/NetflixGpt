import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'



const useMovieTrailer=(id)=>{
    const dispatch=useDispatch()
    const getMovieVideos=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS)
        const json=await data.json()
        console.log(json);
        const trailer = json.results?.find((video) => video.type === "Trailer");

        
    console.log("trailer video",trailer)
    dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
      getMovieVideos();
    },[])
}
export default useMovieTrailer;