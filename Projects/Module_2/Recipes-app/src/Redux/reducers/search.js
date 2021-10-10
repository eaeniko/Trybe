import { SET_SEARCHBAR } from '../actions';

const INITIAL_STATE = false;

function search(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SET_SEARCHBAR:
    return action.payload;
  default:
    return state;
  }
}

export default search;
