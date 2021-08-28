import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, subtitle, storyline, rating } = movie;
    return (
      <div className="movie-card movie-card-body">
        <h4 className="movie-card-header page-title movie-card-title">{ title }</h4>
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieCard;
