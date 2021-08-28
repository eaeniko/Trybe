import React, { Component } from 'react';
import PropTypes from 'prop-types';

// REQUISITO 2 FEITO POR TODOS VIA PAIR PROGRAMING;

export default class SearchBar extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { onInputChange } = this.props;
    const { value } = target;
    onInputChange(value);
  }

  render() {
    return (
      <label htmlFor="searchBar" data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
        <input
          data-testid="query-input"
          type="text"
          name="searchBar"
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

SearchBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};
