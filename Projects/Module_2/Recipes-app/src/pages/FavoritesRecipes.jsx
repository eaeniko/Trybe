// Tela de receitas favoritas: requisitos 60 a 66;
import React, { useState } from 'react';
import { connect } from 'react-redux';
import copy from 'clipboard-copy';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonFavorite from '../components/ButtonFavorite';
import shareIcon from '../images/shareIcon.svg';
import Header from '../components/Header';

const STATE_FAVORITE = {
  buttonFilter: null,
};

function buttonChangeFilter(setState) {
  return (
    <>
      <button
        data-testid="filter-by-food-btn"
        type="button"
        onClick={ () => (setState({ buttonFilter: 'comida' })) }
      >
        Food
      </button>
      <button
        data-testid="filter-by-drink-btn"
        type="button"
        onClick={ () => (setState({ buttonFilter: 'bebida' })) }
      >
        Drinks
      </button>
      <button
        data-testid="filter-by-all-btn"
        type="button"
        onClick={ () => (setState({ buttonFilter: null })) }
      >
        All
      </button>
    </>
  );
}

function FavoritesRecipes({ loadFoods }) {
  const history = useHistory();
  const [visibleMessage, setVisibleMessage] = useState(true);
  const [state, setState] = useState(STATE_FAVORITE);
  const { buttonFilter } = state;
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));

  function buttonCopy(event) {
    setVisibleMessage(false);
    const oneSecond = 1000;
    const { id } = event.target.parentNode;
    const validation = loadFoods.some((food) => (food.idMeal === id));
    if (!validation) {
      copy(`http://localhost:3000/comidas/${id}`);
    } else {
      copy(`http://localhost:3000/bebidas/${id}`);
    }
    setTimeout(() => setVisibleMessage(true), oneSecond);
  }

  function itemFavorite(item, index) {
    const { id, type, area, category, alcoholicOrNot, name, image } = item;
    if (type === 'comida') {
      return (
        <div id={ id }>
          <input
            type="image"
            width="70px"
            data-testid={ `${index}-horizontal-image` }
            src={ image }
            alt={ name }
            onClick={ () => (history.push(`/comidas/${id}`)) }
          />
          <br />
          <button
            type="button"
            onClick={ () => (history.push(`/comidas/${id}`)) }
            data-testid={ `${index}-horizontal-name` }
          >
            { name }
          </button>
          <p data-testid={ `${index}-horizontal-top-text` }>{`${area} - ${category}`}</p>
          <ButtonFavorite id={ id } index={ index } />
          <input
            data-testid={ `${index}-horizontal-share-btn` }
            type="image"
            onClick={ buttonCopy }
            src={ shareIcon }
            alt="shareIcon"
          />
        </div>
      );
    }
    return (
      <div id={ id }>
        <input
          type="image"
          width="70px"
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
          onClick={ () => (history.push(`/bebidas/${id}`)) }
        />
        <br />
        <button
          type="button"
          onClick={ () => (history.push(`/bebidas/${id}`)) }
          data-testid={ `${index}-horizontal-name` }
        >
          { name }
        </button>
        <p>{ category }</p>
        <p data-testid={ `${index}-horizontal-top-text` }>{ alcoholicOrNot }</p>
        <ButtonFavorite id={ id } index={ index } />
        <input
          data-testid={ `${index}-horizontal-share-btn` }
          type="image"
          onClick={ buttonCopy }
          src={ shareIcon }
          alt="shareIcon"
        />
      </div>
    );
  }

  if (!loadFoods) {
    return (
      <>
        <Header setTitle="Receitas Favoritas" />
        <h1> Carregando...</h1>
      </>
    );
  }

  if (!favoriteRecipes || favoriteRecipes.length === 0) {
    return (<Header setTitle="Receitas Favoritas" />);
  }

  if (buttonFilter === 'comida') {
    return (
      <>
        <Header setTitle="Receitas Favoritas" />
        <p>Loading</p>
        <p hidden={ visibleMessage }>Link copiado!</p>
        { buttonChangeFilter(setState) }
        {
          favoriteRecipes
            .filter((item) => (item.type === 'comida'))
            .map((item, index) => (
              <div key={ item.id }>
                { itemFavorite(item, index) }
              </div>
            ))
        }
      </>
    );
  }

  if (buttonFilter === 'bebida') {
    return (
      <>
        <Header setTitle="Receitas Favoritas" />
        <p hidden={ visibleMessage }>Link copiado!</p>
        { buttonChangeFilter(setState) }
        {
          favoriteRecipes
            .filter((item) => (item.type === 'bebida'))
            .map((item, index) => (
              <div key={ index }>
                { itemFavorite(item, index) }
              </div>
            ))
        }
      </>
    );
  }

  return (
    <>
      <Header setTitle="Receitas Favoritas" />
      <p hidden={ visibleMessage }>Link copiado!</p>
      { buttonChangeFilter(setState) }
      {
        favoriteRecipes.map((item, index) => (
          <div key={ item.id }>
            { itemFavorite(item, index) }
          </div>
        ))
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  loadFoods: state.loadFoods,
});

FavoritesRecipes.propTypes = {
  object: PropTypes.objectOf(PropTypes.object),
}.isRequired;

export default connect(mapStateToProps)(FavoritesRecipes);
