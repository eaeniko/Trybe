// import { useContext } from 'react';
// const URL = 'https://swapi.dev/api/planets'; https://swapi-trybe.herokuapp.com/api/planets/
async function fetchPlanetsApi() {
  const URL = 'https://swapi.dev/api/planets';
  const { results } = await fetch(URL)
    .then((response) => response.json());
  return results;
}

export default fetchPlanetsApi;
