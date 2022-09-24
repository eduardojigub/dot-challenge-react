import { React, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Skeletons from '../components/Skeletons';
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
      <Typography borderRadius="10px" backgroundColor="#021E39" color="#f7d354" variant="h4" mt={5} align="center" margin="75px">
        Resultados da sua busca para:
        {' '}
        {query}
      </Typography>
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
  );
}

export default Search;
