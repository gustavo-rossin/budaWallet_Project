import currenciesAPI from '../../services/currenciesAPI';

// Coloque aqui suas actions

export const VALID_EMAIL = 'VALID_EMAIL';
export const VALID_CURRENCY = 'VALID_CURRENCY';
export const CURRENCY_ERROR = 'CURRENCY_ERROR';
export const CURRENCY_SUCCESS = 'CURRENCY_SUCCESS';
export const ADDING_EXPENSES = 'ADDING_EXPENSES';

export function addEmail(payload) {
  return ({
    type: VALID_EMAIL,
    payload,
  });
}

export const getCurrencies = () => ({
  type: VALID_CURRENCY,
});

export const currenciesError = (error) => ({
  type: CURRENCY_ERROR,
  error,
});

export const currenciesSuccess = (payload) => ({
  type: CURRENCY_SUCCESS,
  payload,
});

export const addingExpenses = (payload) => ({
  type: ADDING_EXPENSES,
  payload,
});

export function fetchCurrenciesAPI() {
  return async (dispatch) => {
    dispatch(getCurrencies);
    try {
      const result = await currenciesAPI();
      console.log(result);
      dispatch(currenciesSuccess(Object.keys(result).filter((el) => el !== 'USDT')));
    } catch (error) {
      dispatch(currenciesError(error));
    }
  };
}

export function fetchExpensesAPI(gastos) {
  return async (dispatch) => {
    try {
      const result = await currenciesAPI();
      dispatch(addingExpenses({
        ...gastos,
        exchangeRates: result }));
    } catch (error) {
      throw new Error(error);
    }
  };
}
