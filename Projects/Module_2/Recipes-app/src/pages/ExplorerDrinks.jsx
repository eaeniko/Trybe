// Tela de explorar bebidas ou comidas: Requisitos 70 a 74;
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExplorerDrinks() {
  const [randomDrink, setRandomDrink] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function componentDidMount() {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setRandomDrink(data.drinks[0].idDrink);
    }
    componentDidMount();
  }, []);

  function handleClick({ target }) {
    const { id } = target;
    const obejctValidator = {
      ingredient: () => history.push('/explorar/bebidas/ingredientes'),
      surprise: () => history.push(`/bebidas/${randomDrink}`),
    };
    obejctValidator[id]();
  }

  return (
    <div>
      <Header setTitle="Explorar Bebidas" />
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

export default ExplorerDrinks;
