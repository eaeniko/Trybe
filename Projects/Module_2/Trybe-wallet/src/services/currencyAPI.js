const UrlEndPoint = 'https://economia.awesomeapi.com.br/json/all';

export default async function requestCurrencyApi() {
  const response = await fetch(UrlEndPoint);
  const currencies = await response.json();
  return currencies;
}
