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

export const getCurrencies = (payload) => ({
  type: VALID_CURRENCY,
  payload,
});

export const currenciesError = (error) => ({
  type: CURRENCY_ERROR,
  error,
});

export const currenciesSuccess = (success) => ({
  type: CURRENCY_SUCCESS,
  successCurrency: Object.keys(success).filter((el) => el !== 'USDT'),
});

export function fetchCurrenciesAPI() {
  return async (dispatch) => {
    dispatch(getCurrencies());
    try {
      const url = 'https://economia.awesomeapi.com.br/json/all';
      const request = await fetch(url);
      const response = await request.json();
      dispatch(currenciesSuccess(response));
    } catch (error) {
      dispatch(currenciesError(error));
    }
  };
}
