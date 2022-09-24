/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { FaStar } from 'react-icons/fa';
import CartContext from '../context/cart/CartContext';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

function MovieCard({
  movie,
}) {
  const { addToCart } = useContext(CartContext);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={API_IMG + movie.poster_path}
        alt={movie.title}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="column">
          <Typography variant="h6" component="div">
            {movie.title}
          </Typography>
          <Typography mt={1} component="div">
            <FaStar />
            {'  '}
            {movie.vote_average}
          </Typography>
          <Typography mt={1} component="div">
            R$ 79.99
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => addToCart(movie)}
          variant="contained"
          size="small"
        >
          Adicionar ao carrinho

        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
