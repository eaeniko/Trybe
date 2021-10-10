import { SEARCH_TEXT } from '../actions';

const INITIAL_STATE = '';

function searchInput(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SEARCH_TEXT:
    return action.payload;
  default:
    return state;
  }
}

export default searchInput;
