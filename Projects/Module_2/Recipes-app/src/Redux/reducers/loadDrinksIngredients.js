import { LOAD_DRINKS_INGREDIENTS } from '../actions';

const INITIAL_STATE = [];

function loadDrinksIngredients(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_DRINKS_INGREDIENTS:
    return action.payload;
  default:
    return state;
  }
}

export default loadDrinksIngredients;
