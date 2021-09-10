// Coloque aqui suas actions
import currencyAPI from '../services/currencyAPI';

export const SET_EMAIL = 'SET_EMAIL';
export const SET_WALLET = 'SET_WALLET';
export const LOADING = 'LOADING';
export const GET_CURRENCY_API_SUCCESS = 'GET_CURRENCY_API_SUCCESS';
export const GET_CURRENCY_API_ERROR = 'GET_CURRENCY_API_ERROR';
export const ADD_EXPENSE_SUCCESS = 'ADD_EXPENSE_SUCCESS';
export const ADD_EXPENSE_ERROR = 'ADD_EXPENSE_ERROR';

export const setEmail = (payload) => (
  {
    type: SET_EMAIL,
    payload,
  });

export const setWallet = (payload) => (
  {
    type: SET_WALLET,
    payload,
  });

export const getCurrencyAPISuccess = (payload) => ({
  type: GET_CURRENCY_API_SUCCESS,
  payload,
});

export const getCurrencyAPIError = (payload) => ({
  type: GET_CURRENCY_API_ERROR,
  payload,
});

export const addExpenseSuccess = (payload) => ({
  type: ADD_EXPENSE_SUCCESS,
  payload,
});

export const addExpenseError = (payload) => ({
  type: ADD_EXPENSE_ERROR,
  payload,
});
export const loading = () => ({
  type: LOADING,
});

export const getCurrencyAPI = () => async (dispatch) => {
  // action loading
  dispatch(loading());
  try {
    const response = await currencyAPI();
    delete response.USDT;
    dispatch(getCurrencyAPISuccess(response));
  } catch (error) {
    dispatch(getCurrencyAPIError(error));
  }
};

export const addExpenseThunk = (payload) => async (dispatch) => {
  // action loading
  dispatch(loading());
  try {
    const response = await currencyAPI();
    delete response.USDT;
    dispatch(addExpenseSuccess({ ...payload, exchangeRates: response }));
  } catch (error) {
    dispatch(addExpenseError(error));
  }
};

// export const setPassword = () => (
//   {
//     type: SET_PASSWORD,
//   });
