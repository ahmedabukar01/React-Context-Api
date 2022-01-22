import {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props =>{
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
    return (
        <MovieContext.Provider value="hello">
            {props.children}
        </MovieContext.Provider>
    )
}