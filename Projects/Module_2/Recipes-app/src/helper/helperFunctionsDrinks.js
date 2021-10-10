import { drinkRequest } from '../services/data';

async function handleSubmitDrinks(searchInput, setLoadDrinks, radioButton, history) {
  const { location: { pathname } } = history;
  const requestApi = {
    '/bebidas': {
      ingredient: async (input) => {
        const { drinks } = await drinkRequest(`filter.php?i=${input}`);
        if (drinks === null) {
          global
            .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        } else if (drinks !== null && drinks.length === 1) {
          const id = drinks[0].idDrink;
          history.push(`/bebidas/${id}`);
        } else {
          setLoadDrinks(drinks);
        }
      },
      name: async (input) => {
        const { drinks } = await drinkRequest(`search.php?s=${input}`);
        if (drinks === null) {
          global
            .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        } else if (drinks !== null && drinks.length === 1) {
          const id = drinks[0].idDrink;
          history.push(`/bebidas/${id}`);
        } else {
          setLoadDrinks(drinks);
        }
      },
      'first-letter': async (input) => {
        if (input.length === 1) {
          const { drinks } = await drinkRequest(`search.php?f=${input}`);
          setLoadDrinks(drinks);
        } else {
          global.alert('Sua busca deve conter somente 1 (um) caracter');
        }
      },
    },
  };
  requestApi[pathname][radioButton](searchInput);
}

export default handleSubmitDrinks;
