import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
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

function localStorageChecker(setlocalStorageMeals, setlocalStorageFavorite, id) {
  if (!localStorage.inProgressRecipes) {
    localStorage.inProgressRecipes = JSON.stringify(inProgressRecipesObeject);
  }
  if (!localStorage.favoriteRecipes) {
    localStorage.favoriteRecipes = JSON.stringify([]);
  }

  const inProgressRecipes = JSON.parse(localStorage.inProgressRecipes);
  const findFavoriteRecipe = JSON.parse(localStorage.favoriteRecipes)
    .find(({ id: idRecipe }) => Number(idRecipe) === Number(id));

  if (inProgressRecipes.meals[id]) {
    setlocalStorageMeals(true);
  }
  if (findFavoriteRecipe) {
    setlocalStorageFavorite(blackHeart);
  }
}

function Foods({ id }) {
  const history = useHistory();
  const [localStorageFavorite, setlocalStorageFavorite] = useState(whiteHeart);
  const [localStorageMeals, setlocalStorageMeals] = useState(false);
  const [visibleMessage, setVisibleMessage] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [food, setFood] = useState({});
  const {
    strMealThumb,
    strMeal,
    strCategory,
    strInstructions,
    strYoutube,
    strArea,
  } = food;

  useEffect(() => {
    async function foodsRequest() {
      const drinksResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const drinksData = await drinksResponse.json();
      const showCards = 6;
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();

      data.meals[0].strYoutube = data.meals[0].strYoutube.replace('watch?v=', 'embed/');
      drinksData.drinks.splice(showCards, drinksData.drinks.length - showCards);

      setFood(data.meals[0]);
      setDrinks(drinksData.drinks);
    }

    localStorageChecker(setlocalStorageMeals, setlocalStorageFavorite, id);
    foodsRequest();
  }, [id]);

  if (!food.strYoutube || !drinks[0]) return <h1>loading</h1>;

  let ingredientsArray = [];
  let measureArray = [];

  Object.keys(food).forEach((key) => {
    if (key.includes('strIngredient') && food[key]) {
      ingredientsArray = [...ingredientsArray, food[key]];
    }
    if (key.includes('strMeasure') && food[key]) {
      measureArray = [...measureArray, food[key]];
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
    history.push(`/comidas/${id}/in-progress`);
  }

  function shareClick() {
    const visibleTime = 1000;

    setVisibleMessage(false);

    navigator.clipboard.writeText(`http://localhost:3000${history.location.pathname}`);
    setTimeout(() => setVisibleMessage(true), visibleTime);
  }

  function favoriteFood({ target }) {
    const src = target.src.replace('http://localhost:3000', '');
    const favoriteRecipes = JSON.parse(localStorage.favoriteRecipes);
    const validatorObejct = {
      '/static/media/whiteHeartIcon.ea3b6ba8.svg': () => {
        localStorage.favoriteRecipes = JSON.stringify([
          ...favoriteRecipes,
          {
            id,
            type: 'comida',
            area: strArea,
            category: strCategory,
            alcoholicOrNot: '',
            name: strMeal,
            image: strMealThumb,
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
      <img data-testid="recipe-photo" width="120px" src={ strMealThumb } alt="foto" />
      <h4 data-testid="recipe-title">{ strMeal }</h4>
      <p data-testid="recipe-category">{ strCategory }</p>
      <p hidden={ visibleMessage }>Link copiado!</p>
      <input
        type="image"
        style={ { margin: '4px' } }
        onClick={ shareClick }
        src={ shareIcon }
        alt="share"
        data-testid="share-btn"
      />
      <input
        type="image"
        style={ { margin: '4px' } }
        onClick={ favoriteFood }
        src={ localStorageFavorite }
        alt="favorite"
        data-testid="favorite-btn"
      />
      <ul>
        { renderIngredients(ingredientsArray) }
      </ul>
      <p data-testid="instructions">{ strInstructions }</p>
      <iframe
        data-testid="video"
        src={ strYoutube }
        frameBorder="0"
        title="video"
      />
      <section className="container">
        { drinks.map((drink, index) => (
          <div
            className="cards"
            key={ drink.strDrink }
            data-testid={ `${index}-recomendation-card` }
          >
            <h1 data-testid={ `${index}-recomendation-title` }>{ drink.strDrink }</h1>
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
          localStorageMeals
            ? 'Continuar Receita'
            : 'Iniciar Receita'
        }
      </button>
    </div>
  );
}

Foods.propTypes = {
  id: PropTypes.objectOf(PropTypes.string),
}.isRequired;

export default Foods;
