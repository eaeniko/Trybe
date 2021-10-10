// Tela de explorar ingredientes: requisitos 75 a 77;
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { setLoadFoodsIngredients } from '../Redux/actions';
import { foodRequest } from '../services/data';

function ExploreFoodsIngredients() {
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    async function componentDidMount() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
      const data = await response.json();
      const showCards = 12;
      data.meals.splice(showCards, Number.MAX_VALUE);
      setIngredients(data.meals);
    }
    componentDidMount();
  }, []);

  async function handleClick({ target }) {
    const { className } = target;

    const { meals } = await foodRequest(`filter.php?i=${className}`);
    dispatch(setLoadFoodsIngredients(meals));
    history.push('/comidas');
  }

  return (
    <div>
      <Header setTitle="Explorar Ingredientes" />
      { ingredients.map(({ strIngredient }, index) => (
        <div
          aria-hidden="true"
          className={ strIngredient }
          onClick={ handleClick }
          style={ { border: 'solid grey 0.5px' } }
          key={ strIngredient }
          data-testid={ `${index}-ingredient-card` }
        >
          <p
            className={ strIngredient }
            data-testid={ `${index}-card-name` }
          >
            { strIngredient }
          </p>
          <img
            className={ strIngredient }
            data-testid={ `${index}-card-img` }
            width="60px"
            src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
            alt={ strIngredient }
          />
        </div>
      )) }
      <Footer />
    </div>
  );
}

export default ExploreFoodsIngredients;
