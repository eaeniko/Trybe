import { combineReducers } from 'redux';
import search from './search';
import user from './user';
import mealsToken from './mealsToken';
import cocktailsToken from './cocktailsToken';
import radioButton from './radioFilters';
import searchInput from './serchText';
import loadFoods from './loadFoods';
import loadDrinks from './loadDrinks';
import loadDrinksIngredients from './loadDrinksIngredients';
import loadFoodsIngredients from './loadFoodsIngredients';

const rootReducer = combineReducers({
  search,
  user,
  mealsToken,
  cocktailsToken,
  radioButton,
  searchInput,
  loadDrinks,
  loadFoods,
  loadFoodsIngredients,
  loadDrinksIngredients,
});

export default rootReducer;
