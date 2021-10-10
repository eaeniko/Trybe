import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeart from '../images/blackHeartIcon.svg';
import whiteHeart from '../images/whiteHeartIcon.svg';
import './Cards.css';

const inProgressRecipesObeject = {
  cocktails: {
    id: [],
  },
  meals: {
    id: [],
  },
};

function localStorageChecker(setlocalStorageCocktails, setlocalStorageFavorite, id) {
  if (!localStorage.inProgressRecipes) {
    localStorage.inProgressRecipes = JSON.stringify(inProgressRecipesObeject);
  }
  if (!localStorage.favoriteRecipes) {
    localStorage.favoriteRecipes = JSON.stringify([]);
  }

  const inProgressRecipes = JSON.parse(localStorage.inProgressRecipes);
  const findFavoriteRecipe = JSON.parse(localStorage.favoriteRecipes)
    .find(({ id: idRecipe }) => Number(idRecipe) === Number(id));

  if (inProgressRecipes.cocktails[id]) {
    setlocalStorageCocktails(true);
  }
  if (findFavoriteRecipe) {
    setlocalStorageFavorite(blackHeart);
  }
}

function Drinks({ id }) {
  const history = useHistory();
  const [localStorageFavorite, setlocalStorageFavorite] = useState(whiteHeart);
  const [localStorageCocktails, setlocalStorageCocktails] = useState(false);
  const [visibleMessage, setVisibleMessage] = useState(false);
  const [foods, setFoods] = useState([]);
  const [drink, setDrink] = useState({});
  const {
    strDrinkThumb,
    strDrink,
    strInstructions,
    strAlcoholic,
    strCategory,
  } = drink;

  useEffect(() => {
    async function drinksRequest() {
      const foodsResponse = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const foodsData = await foodsResponse.json();
      const showCards = 6;
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();

      foodsData.meals.splice(showCards, foodsData.meals.length - showCards);

      setDrink(data.drinks[0]);
      setFoods(foodsData.meals);
    }

    localStorageChecker(setlocalStorageCocktails, setlocalStorageFavorite, id);
    drinksRequest();
  }, [id]);

  if (!drink || !foods[0]) return <h1>loading</h1>;

  let ingredientsArray = [];
  let measureArray = [];

  Object.keys(drink).forEach((key) => {
    if (key.includes('strIngredient') && drink[key]) {
      ingredientsArray = [...ingredientsArray, drink[key]];
    }
    if (key.includes('strMeasure') && drink[key]) {
      measureArray = [...measureArray, drink[key]];
    }
  });

  function renderIngredients(array) {
    return (
      array.map((ingredient, index) => (
        <li key={ ingredient } data-testid={ `${index}-ingredient-name-and-measure` }>
          { ingredient }
          {' '}
          { measureArray[index] }
        </li>
      ))
    );
  }

  function StartRecipeClick() {
    history.push(`/bebidas/${id}/in-progress`);
  }

  function shareClick() {
    const visibleTime = 1000;

    setVisibleMessage(false);

    navigator.clipboard.writeText(`http://localhost:3000${history.location.pathname}`);
    setTimeout(() => setVisibleMessage(true), visibleTime);
  }

  function favoriteDrink({ target }) {
    const src = target.src.replace('http://localhost:3000', '');
    const favoriteRecipes = JSON.parse(localStorage.favoriteRecipes);
    const validatorObejct = {
      '/static/media/whiteHeartIcon.ea3b6ba8.svg': () => {
        localStorage.favoriteRecipes = JSON.stringify([
          ...favoriteRecipes,
          {
            id,
            type: 'bebida',
            area: '',
            category: strCategory,
            alcoholicOrNot: strAlcoholic,
            name: strDrink,
            image: strDrinkThumb,
          },
        ]);
        setlocalStorageFavorite(blackHeart);
      },
      '/static/media/blackHeartIcon.b8913346.svg': () => {
        let newFavoriteRecipes = [];

        favoriteRecipes.forEach((recipe) => {
          if (id === recipe.id) return;
          newFavoriteRecipes = [...newFavoriteRecipes, recipe];
        });

        localStorage.favoriteRecipes = JSON.stringify([...newFavoriteRecipes]);

        setlocalStorageFavorite(whiteHeart);
      },
    };

    validatorObejct[src]();
  }

  return (
    <div>
      <img data-testid="recipe-photo" width="120px" src={ strDrinkThumb } alt="foto" />
      <h4 data-testid="recipe-title">{ strDrink }</h4>
      <p data-testid="recipe-category">{ strAlcoholic }</p>
      <p hidden={ visibleMessage }>Link copiado!</p>
      <input
        type="image"
        onClick={ shareClick }
        src={ shareIcon }
        alt="share"
        data-testid="share-btn"
      />
      <input
        type="image"
        style={ { margin: '4px' } }
        onClick={ favoriteDrink }
        src={ localStorageFavorite }
        alt="favorite"
        data-testid="favorite-btn"
      />
      <ul>
        { renderIngredients(ingredientsArray) }
      </ul>
      <p data-testid="instructions">{ strInstructions }</p>
      <section className="container">
        { foods.map((food, index) => (
          <div
            className="cards"
            key={ food.strMeal }
            data-testid={ `${index}-recomendation-card` }
          >
            <h1 data-testid={ `${index}-recomendation-title` }>{ food.strMeal }</h1>
          </div>
        )) }
      </section>
      <button
        onClick={ StartRecipeClick }
        className="recipe-start"
        type="button"
        data-testid="start-recipe-btn"
      >
        {
          localStorageCocktails
            ? 'Continuar Receita'
            : 'Iniciar Receita'
        }
      </button>
    </div>
  );
}

Drinks.propTypes = {
  id: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default Drinks;
