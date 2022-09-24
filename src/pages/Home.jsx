/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
import { React, useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import MovieCard from '../components/MovieCard';
import Skeletons from '../components/Skeletons';

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

function Home() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Container maxWidth="xl">
        <Grid mt={5} container spacing={3}>
          {movies.length === 0 ? (
            <Skeletons />
          ) : (
            movies.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={movie.id}>
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
