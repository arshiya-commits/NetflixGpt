// import React from 'react'

// const GptSearchBar = () => {
//   return (
//     <div>
//         <form className='p-6 m-6 bg-black '>
//             <input type='text' className='p-2 m-4 w-450 rounded '
//             placeholder='what would you like to watch today'/>
            
//             <button className='py-2 px-4 bg-red-500 text-white rounded-lg'>Search</button>

//         </form>
//     </div>
//   )
// }

// export default GptSearchBar
import React from 'react';
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux';
import { changeLanguage } from '../utils/configSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS, supported_language } from '../utils/constants';
import { useRef } from 'react';

import { getGeminiResponse } from '../utils/gemini';
import { addGptmovieResults } from '../utils/GptSlice';
const GptSearchBar = () => {
  // const langkey=useSelector((store)=>store.config.lang)
  const dispatch=useDispatch()
    const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const searchText=useRef(null)

    const fecthMovie=async(movie)=>{
      const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+
        movie+
        "&include_adult=false&language=en-US&page=1",API_OPTIONS)
       const json=await data.json()
        return json;
    }
const handlegptSearch = async () => {
    const prompt = `Act as a movie recommendation system for the query "${searchText.current.value}". Only give me 5 movies, comma separated. Example Result: Bahubali, Mirchi, Chennai Express, Kaleja, Race Gurram`;

    try {
      const result = await getGeminiResponse(prompt);

      const getMovies= result?.candidates?.[0]?.content?.parts?.[0]?.text.split(",");
       const promiseArray = getMovies.map(movie=>fecthMovie(movie))
      // Here, you can parse and display movie list however you want
      // for each movie i will searchtmdb api
      const tmdbResults=await Promise.all(promiseArray);
      console.log(tmdbResults)
      dispatch(addGptmovieResults({movieNames: getMovies,movieResults:tmdbResults}))
        
    } catch (error) {
      console.error("Gemini API error:", error);
    }
  };
  return (
 <div className="w-full h-screen bg-cover bg-center bg-black">
      {/* Overlay */}
     <div className="absolute inset-0  bg-opacity-60"></div>
      
      {/* Centered Content */}
      <div className=" relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          {/* <p className='text-white text-xl '>which language do u prefer</p>
          <div className="m-32 mr-40  w-50 max-w-2xl">
          <select
            className="w-full px-4 py-3 text-sm bg-white text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChangeLanguage}
          >
            {supported_language.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))} */}
          {/* </select>
        </div> */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-lg sm:text-xl mb-2">Starts at ₹149. Cancel at any time.</p>
         
        {/* Search Form */}
        <form className="flex flex-col sm:flex-row items-center w-full max-w-2xl gap-4 sm:gap-2" onSubmit={(e)=>e.preventDefault()}>
          <input
            type="text"
             ref={searchText}
            placeholder="what would you like to watch"
            className="flex-grow px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none"
          />
          <button 
             onClick={handlegptSearch}

            className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition duration-200"
          >
            Get Started →
          </button>
        </form>
      
        {/* Language Dropdown */}
        
      </div>
    </div>
  );
   
  
};

export default GptSearchBar;
