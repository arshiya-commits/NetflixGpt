import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies)
  return (
    <div className='p-2 bg-black'>
                    <h1 className='text-white font-bold text-2xl pb-1
                    '>{title}</h1>

        <div className='flex overflow-x-auto hide-scrollbar'>
            
    <div className='flex'>
        { Array.isArray(movies) && movies.map(movie => <MovieCard key={movie.id} poster_path={movie.poster_path}/>)}

        </div>
    </div>
    </div>
  )
}

export default MovieList;