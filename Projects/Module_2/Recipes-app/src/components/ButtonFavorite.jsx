import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { foodRequest, drinkRequest } from '../services/data';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function ButtonFavorite(props) {
  const history = useHistory();

  async function addFavorite(event) {
    const { id } = event.target.parentNode;
    const itemFood = await foodRequest(`lookup.php?i=${id}`);
    if (!itemFood.meals) {
      const itemDrink = await drinkRequest(`lookup.php?i=${id}`);
      const { strCategory, strAlcoholic, strDrink, strDrinkThumb } = itemDrink.drinks[0];
      // fonte: https://pt.stackoverflow.com/questions/329223/armazenar-um-array-de-objetos-em-um-local-storage-com-js
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
      favoriteRecipes.push({
        id,
        type: 'bebida',
        area: '',
        category: strCategory,
        alcoholicOrNot: strAlcoholic,
        name: strDrink,
        image: strDrinkThumb,
      });
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      history.go(0);
    } else {
      const { strCategory, strArea, strMeal, strMealThumb } = itemFood.meals[0];
      const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
      favoriteRecipes.push({
        id,
        type: 'comida',
        area: strArea,
        category: strCategory,
        alcoholicOrNot: '',
        name: strMeal,
        image: strMealThumb,
      });
      localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
      history.go(0);
    }
  }

  function rmFavorite(event) {
    const { id } = event.target.parentNode;
    console.log(id);
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes') || '[]');
    const recipeRemoved = favoriteRecipes.filter((item) => (item.id !== id));
    localStorage.setItem('favoriteRecipes',
      JSON.stringify(recipeRemoved));
    history.go(0);
  }

  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  const { id, index } = props;

  const validation = favoriteRecipes.some((item) => (item.id === id));
  if (validation) {
    return (
      <input
        data-testid={ `${index}-horizontal-favorite-btn` }
        type="image"
        onClick={ rmFavorite }
        src={ blackHeartIcon }
        alt="favorite"
      />
    );
  }

  return (
    <input
      data-testid={ `${index}-horizontal-favorite-btn` }
      type="image"
      onClick={ addFavorite }
      src={ whiteHeartIcon }
      alt="not favorite"
    />
  );
}

ButtonFavorite.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default ButtonFavorite;
