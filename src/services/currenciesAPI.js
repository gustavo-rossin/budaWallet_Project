const currenciesAPI = async () => {
  const api = 'https://economia.awesomeapi.com.br/json/all';
  const request = await fetch(api);
  const response = await request.json();
  return response;
};

export default currenciesAPI;
