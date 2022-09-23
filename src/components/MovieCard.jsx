/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const API_IMG = 'https://image.tmdb.org/t/p/w185/';

function MovieCard({
  title, image,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={API_IMG + image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Adicionar ao carrinho</Button>
      </CardActions>
    </Card>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  // vote_average: PropTypes.string.isRequired,
};

export default MovieCard;

// <img src={API_IMG + poster_path} alt={title} />
