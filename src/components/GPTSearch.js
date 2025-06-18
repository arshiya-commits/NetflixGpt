import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG } from '../utils/constants';
const GPTSearch = () => {
  return (
    <div >
         {/* <div className='absolute '>
            <img src={BG_IMG} alt="bg"></img>
         </div> */}
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch;