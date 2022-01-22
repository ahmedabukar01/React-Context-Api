import {useState, useContext} from 'react';
import Movie from './Movie';
import {MovieContext} from './MoviesContex';

const MovieList = () => {
    const [movies,setMovies] = useContext(MovieContext);
    return(
        movies.map(movie=>(
            <Movie data = {movie} key={movie.id}/>
        ))

    )
  
};

export default MovieList;
