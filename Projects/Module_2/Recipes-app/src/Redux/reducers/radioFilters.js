import { RADIO_BUTTON } from '../actions';

const INITIAL_STATE = '';

function radioButton(state = INITIAL_STATE, action) {
  switch (action.type) {
  case RADIO_BUTTON:
    return action.payload;
  default:
    return state;
  }
}

export default radioButton;
