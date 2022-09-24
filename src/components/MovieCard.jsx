/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

function MovieCard({
  movie,
}) {
  return (
    <Card sx={{ maxWidth: 180 }}>
      <CardMedia
        component="img"
        image={API_IMG + movie.poster_path}
        alt={movie.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {movie.rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Adicionar ao carrinho</Button>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
