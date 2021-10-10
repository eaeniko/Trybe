// Tela de explorar bebidas ou comidas: Requisitos 70 a 74;
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorerFoods() {
  const [randomFood, setRandomFood] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function componentDidMount() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setRandomFood(data.meals[0].idMeal);
    }
    componentDidMount();
  }, []);

  function handleClick({ target }) {
    const { id } = target;
    const obejctValidator = {
      ingredient: () => history.push('/explorar/comidas/ingredientes'),
      area: () => history.push('/explorar/comidas/area'),
      surprise: () => history.push(`/comidas/${randomFood}`),
    };
    obejctValidator[id]();
  }

  return (
    <div>
      <Header setTitle="Explorar Comidas" />
      <button
        onClick={ handleClick }
        id="ingredient"
        data-testid="explore-by-ingredient"
        type="button"
      >
        Por Ingredientes
      </button>
      <button
        onClick={ handleClick }
        id="area"
        data-testid="explore-by-area"
        type="button"
      >
        Por Local de Origem
      </button>
      <button
        onClick={ handleClick }
        id="surprise"
        data-testid="explore-surprise"
        type="button"
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExplorerFoods;
