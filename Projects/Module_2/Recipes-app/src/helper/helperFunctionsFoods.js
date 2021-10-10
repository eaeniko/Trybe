import { foodRequest } from '../services/data';

async function handleSubmitFoods(searchInput, setLoadFoods, radioButton, history) {
  const { location: { pathname } } = history;
  const requestApi = {
    '/comidas': {
      ingredient: async (input) => {
        const { meals } = await foodRequest(`filter.php?i=${input}`);
        if (meals === null) {
          global
            .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        } else if (meals !== null && meals.length === 1) {
          const id = meals[0].idMeal;
          history.push(`/comidas/${id}`);
        } else {
          setLoadFoods(meals);
        }
      },
      name: async (input) => {
        const { meals } = await foodRequest(`search.php?s=${input}`);
        if (meals === null) {
          global
            .alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
        } else if (meals !== null && meals.length === 1) {
          const id = meals[0].idMeal;
          history.push(`/comidas/${id}`);
        } else {
          setLoadFoods(meals);
        }
      },
      'first-letter': async (input) => {
        if (input.length === 1) {
          const { meals } = await foodRequest(`search.php?f=${input}`);
          const id = meals[0].idMeal;
          if (meals.length === 1) {
            history.push(`/comidas/${id}`);
          }
          setLoadFoods(meals);
        } else {
          global.alert('Sua busca deve conter somente 1 (um) caracter');
        }
      },
    },
  };
  requestApi[pathname][radioButton](searchInput);
}

export default handleSubmitFoods;
