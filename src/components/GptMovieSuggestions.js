import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestions = () => {
  const{movieResults,movieNames} =useSelector((store)=>store.gpt);
 if(!movieResults) return null;

  return (
    <div className='mb-30 px-4 sm:px-6 py-4 bg-gradient-to-b from-black via-gray-900 to-black text-white'>
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center text-red-500">Recommended Movies</h2>
    <div className="space-y-8">
      {movieNames.map((movieName,index) => (
      <MovieList key={movieName}
      title={movieName}
       movies={movieResults[index]?.results}/>
))}
    </div>
     </div>
  )
}

export default GptMovieSuggestions