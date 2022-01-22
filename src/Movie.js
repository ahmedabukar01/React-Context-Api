
const Movie = ({data}) => {
  return (
      <div>
          <h2>{data.name}</h2>
          <p>{data.price}</p>
      </div>
  )
};

export default Movie;
