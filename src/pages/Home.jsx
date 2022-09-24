/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
import { React, useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import MovieCard from '../components/MovieCard';

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

function Home() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid item xs={3} key={movie.id}>
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
