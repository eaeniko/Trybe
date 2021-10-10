import { COCKTAILS_TOKEN } from '../actions';

const INITIAL_STATE = 0;

function cocktailsToken(state = INITIAL_STATE, action) {
  switch (action.type) {
  case COCKTAILS_TOKEN:
    return action.cocktailsToken;
  default:
    return state;
  }
}

export default cocktailsToken;
