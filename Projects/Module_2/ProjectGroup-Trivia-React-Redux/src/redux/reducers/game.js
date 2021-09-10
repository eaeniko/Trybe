import { SET_TOKEN, SET_TIMER, RESET_TIMER, RESET_STATE_GAME } from '../actions';

const INITIAL_STATE = {
  token: {},
  stopWatch: {
    isTimer: false,
    resetTime: false,
  },
};

const game = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case SET_TOKEN:
    return {
      ...state,
      token: { ...payload },
    };
  case SET_TIMER:
    return {
      ...state,
      stopWatch: { ...state.stopWatch, isTimer: payload },
    };
  case RESET_TIMER:
    return {
      ...state,
      stopWatch: { ...state.stopWatch, resetTime: payload },
    };
  case RESET_STATE_GAME:
    return payload;
  default:
    return state;
  }
};

export default game;
