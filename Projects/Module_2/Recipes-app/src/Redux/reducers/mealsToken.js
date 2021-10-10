import { MEALS_TOKEN } from '../actions';

const INITIAL_STATE = 0;

function mealsToken(state = INITIAL_STATE, action) {
  switch (action.type) {
  case MEALS_TOKEN:
    return action.mealsToken;
  default:
    return state;
  }
}

export default mealsToken;
