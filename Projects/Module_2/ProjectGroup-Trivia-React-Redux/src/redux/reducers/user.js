import {
  SET_DATA_USER, SET_SCORE, SET_CORRECT_ANSWER, RESET_STATE_USER,
} from '../actions';

const ESTADO_INICIAL = {
  user: '',
  email: '',
  score: 0,
  assertions: 0,
};

function userReducer(state = ESTADO_INICIAL, action) {
  const { payload, type } = action;
  switch (type) {
  case SET_DATA_USER:
    return {
      ...state,
      ...payload,
    };
  case SET_SCORE:
    return {
      ...state,
      score: payload,
    };
  case SET_CORRECT_ANSWER:
    return {
      ...state,
      assertions: payload,
    };
  case RESET_STATE_USER:
    return payload;
  default:
    return state;
  }
}

export default userReducer;
