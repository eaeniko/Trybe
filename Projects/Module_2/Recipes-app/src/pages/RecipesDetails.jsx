// Tela de detalhes de uma receita: requisitos 33 a 46;
import React from 'react';
import PropTypes from 'prop-types';
import Foods from '../components/Foods';
import Drinks from '../components/Drinks';

function RecipesDetails({ match: { path, params: { id } } }) {
  return (
    <div>
      { path.includes('/comidas') ? <Foods id={ id } /> : <Drinks id={ id } /> }
    </div>
  );
}

RecipesDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default RecipesDetails;
