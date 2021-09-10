// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCY_API_ERROR,
  GET_CURRENCY_API_SUCCESS,
  SET_WALLET, LOADING, ADD_EXPENSE_SUCCESS } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isLoading: false,
  errorAPI: {},
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOADING:
    return { ...state, isLoading: true };
  case SET_WALLET:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case ADD_EXPENSE_SUCCESS:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case GET_CURRENCY_API_SUCCESS:
    return { ...state, isLoading: false, currencies: action.payload };
  case GET_CURRENCY_API_ERROR:
    return { ...state, isLoading: false, errorAPI: action.payload };
  default:
    return state;
  }
};

export default wallet;
