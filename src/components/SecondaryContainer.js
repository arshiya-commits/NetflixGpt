import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import usePopularMovies from '../customhooks/usePopularMovies';
import useNowPlaying from '../customhooks/useNowPlaying';

const SecondaryContainer = () => {
  

  const movies=useSelector(store=>store.movies)
  return (
 <div className=''>
    <div><MovieList title={"Now playing"} movies={movies.getNowplaying}/></div>
    <div><MovieList title={"Trending"} movies={movies.getTrending}/></div>
    <div><MovieList title={"Popular"} movies={movies.getPopular}/></div>
    <div><MovieList title={"Upcoming Movies"} movies={movies.getUpComing}/></div>
    <div><MovieList title={"Horror"} movies={movies.getNowplaying}/></div>
 

</div>
  )
}

export default SecondaryContainer;