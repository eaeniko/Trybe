import { LOAD_FOODS } from '../actions';

const INITIAL_STATE = [];

function loadFoods(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_FOODS:
    return action.payload;
  default:
    return state;
  }
}

export default loadFoods;
