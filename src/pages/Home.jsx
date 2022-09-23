import { React, useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

function Home() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios.get(API_URL)
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
      <Navbar />
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          {movies.map((movie) => (
            <Grid item xs={3}>
              <MovieCard
                key={movie.id}
                title={movie.title}
                image={movie.poster_path}
                rating={movie.vote_average}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
