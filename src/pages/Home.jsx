import { React, useState, useEffect } from 'react';
import Movie from '../components/MovieCard';

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=64f5ed0cccfd7041864d0b04ce4869c2';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
        />
      ))}
    </div>
  );
}

export default Home;
