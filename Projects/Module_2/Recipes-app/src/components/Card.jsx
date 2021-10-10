import PropTypes from 'prop-types';
import React from 'react';

function Card({ id, image, name }) {
  return (
    <div data-testid={ `${id}-recipe-card` } className="card-container">
      <img
        src={ image }
        alt={ name }
        data-testid={ `${id}-card-img` }
      />
      <p data-testid={ `${id}-card-name` }>
        { name }
      </p>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default Card;
