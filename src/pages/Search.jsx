import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import MovieCard from '../components/MovieCard';

const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query`;

function Search() {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">
        Resultados para:
      </Typography>
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
  );
}

export default Search;
