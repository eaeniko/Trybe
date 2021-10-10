// Tela de explorar ingredientes: requisitos 75 a 77;
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { setLoadDrinksIngredients } from '../Redux/actions';
import { drinkRequest } from '../services/data';

function ExploreDrinksIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    async function componentDidMount() {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
      const data = await response.json();
      const showCards = 12;
      data.drinks.splice(showCards, Number.MAX_VALUE);
      setIngredients(data.drinks);
    }
    componentDidMount();
  }, []);

  async function handleClick({ target }) {
    const { className } = target;

    const { drinks } = await drinkRequest(`filter.php?i=${className}`);
    dispatch(setLoadDrinksIngredients(drinks));
    history.push('/bebidas');
  }

  return (
    <div>
      <Header setTitle="Explorar Ingredientes" />
      { ingredients.map(({ strIngredient1 }, index) => (
        <div
          className={ strIngredient1 }
          aria-hidden="true"
          onClick={ handleClick }
          style={ { border: 'solid grey 0.5px' } }
          key={ strIngredient1 }
          data-testid={ `${index}-ingredient-card` }
        >
          <p
            className={ strIngredient1 }
            data-testid={ `${index}-card-name` }
          >
            { strIngredient1 }
          </p>
          <img
            className={ strIngredient1 }
            data-testid={ `${index}-card-img` }
            width="60px"
            src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
            alt={ strIngredient1 }
          />
        </div>
      )) }
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredients;
