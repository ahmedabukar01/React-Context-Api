import {useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MoviesContex';

const MovieList = () => {
    const value = useContext(MovieContext);
    return(
        // movies.map(movie=>(
        //     <Movie data = {movie} key={movie.id}/>
        // ))

        <h1>{value}</h1>
    )
  
};

export default MovieList;
