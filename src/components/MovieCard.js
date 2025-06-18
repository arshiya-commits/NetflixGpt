import React from 'react'
import { IMG_CDN } from '../utils/constants'
const MovieCard = ({poster_path
}) => {
  if(!poster_path){
    return 
  }
  return (
    <div className='w-48 pr-4'>
        
        <img
        src={IMG_CDN+poster_path} alt="img_url">

        </img>
   
    </div>
  )
}

export default MovieCard