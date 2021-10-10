import { LOAD_DRINKS } from '../actions';

const INITIAL_STATE = [];

function loadDrinks(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOAD_DRINKS:
    return action.payload;
  default:
    return state;
  }
}

export default loadDrinks;
