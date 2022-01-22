import {useState, useContext } from 'react';
import {MovieContex, MovieContext} from './MoviesContex';

const AddMovie = () => {
    const [movies,setMovies] = useContext(MovieContext);
    console.log(movies)
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');

    const updateName = (e) =>{
        setName(e.target.value);
    }

    const updatePrice = (e) =>{
        setPrice(e.target.value);
    }

    const submitMovie = (e)=>{
        e.preventDefault();
        setMovies(prevMovies=>[...prevMovies, {name,price}]);

    }
  return(
      <form onSubmit={submitMovie}>
          <input type='text' name="name" value={name} onChange={updateName}/>
          <input type='text' name="price" value={price} onChange={updatePrice} />
          <button>Add movie</button>
      </form>
  )
};

export default AddMovie;
