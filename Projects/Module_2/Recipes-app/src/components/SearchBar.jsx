import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setRadioButton as setRadioButtonAction,
  setSearchInput as setSearchInputAction,
} from '../Redux/actions';

function SearchBar({ setRadioButton, setSearchInput, handleSubmitButton }) {
  function handleChange({ target }) {
    const { value } = target;
    setSearchInput(value);
  }

  return (
    <div>
      <label htmlFor="search">
        <input
          type="text"
          name="search"
          id="search"
          data-testid="search-input"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="ingredient">
        <input
          type="radio"
          value="ingredient"
          name="search-radio"
          id="ingredient"
          data-testid="ingredient-search-radio"
          onClick={ () => setRadioButton('ingredient') }
        />
        Ingrediente
      </label>
      <label htmlFor="name">
        <input
          type="radio"
          value="name"
          name="search-radio"
          id="name"
          data-testid="name-search-radio"
          onClick={ () => setRadioButton('name') }
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          type="radio"
          value="first-letter"
          name="search-radio"
          id="first-letter"
          data-testid="first-letter-search-radio"
          onClick={ () => setRadioButton('first-letter') }
        />
        Primeira Letra
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleSubmitButton }
      >
        Buscar
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  setRadioButton: PropTypes.func.isRequired,
  setSearchInput: PropTypes.func.isRequired,
  handleSubmitButton: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setRadioButton: (payload) => dispatch(setRadioButtonAction(payload)),
  setSearchInput: (payload) => dispatch(setSearchInputAction(payload)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
