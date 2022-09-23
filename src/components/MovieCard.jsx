/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const API_IMG = 'https://image.tmdb.org/t/p/w185/';

function MovieCard({
  title, poster_path, vote_average,
}) {
  return (
    <>
      <h1>{title}</h1>
      <img src={API_IMG + poster_path} alt={title} />
      <p>
        Nota:
        {' '}
        {vote_average}
      </p>
      <button type="button"> Adicionar ao carrinho </button>
    </>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired,
};

export default MovieCard;
