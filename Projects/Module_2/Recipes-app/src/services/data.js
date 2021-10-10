export async function foodRequest(endpoint) {
  const url = `https://www.themealdb.com/api/json/v1/1/${endpoint}`;
  const object = await fetch(url).then((res) => res.json());

  return object;
}

export async function drinkRequest(endpoint) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/${endpoint}`;
  const object = await fetch(url).then((res) => res.json());

  return object;
}
