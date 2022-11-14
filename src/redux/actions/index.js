import currenciesAPI from '../../services/currenciesAPI';

// Coloque aqui suas actions

export const VALID_EMAIL = 'VALID_EMAIL';
export const VALID_CURRENCY = 'VALID_CURRENCY';
export const CURRENCY_ERROR = 'CURRENCY_ERROR';
export const CURRENCY_SUCCESS = 'CURRENCY_SUCCESS';

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

export function fetchCurrenciesAPI() {
  return async (dispatch) => {
    dispatch(getCurrencies);
    try {
      const response = await currenciesAPI();
      console.log(response);
      dispatch(currenciesSuccess(Object.keys(response).filter((el) => el !== 'USDT')));
    } catch (error) {
      dispatch(currenciesError(error));
    }
  };
}
