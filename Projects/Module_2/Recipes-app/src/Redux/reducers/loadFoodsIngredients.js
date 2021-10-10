import { LOAD_FOODS_INGREDIENTS } from '../actions';

const INITIAL_STATE = [];

function loadFoodsIngredients(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_FOODS_INGREDIENTS:
    return action.payload;
  default:
    return state;
  }
}

export default loadFoodsIngredients;
