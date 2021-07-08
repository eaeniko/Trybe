// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const jokeContainer = document.getElementById('jokeContainer');
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data =>  jokeContainer.innerHTML = `<p>${data.joke} </p>`);
};



window.onload = () => fetchJoke();