import {useState} from 'react';
import Movie from './Movie';

const MovieList = () => {
    const [movies,setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 23124
        },
        {
            name: 'Game of thrones',
            price: '$10',
            id: 43124
        },
        {
            name: 'Inception',
            price: '$10',
            id: 2324
        }
    ])

    return(
        movies.map(movie=>(
            <Movie data = {movie} key={movie.id}/>
        ))
    )
  
};

export default MovieList;
