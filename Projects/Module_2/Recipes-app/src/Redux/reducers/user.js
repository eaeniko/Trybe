import { USER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function user(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default user;
