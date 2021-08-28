import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('App.js tests - Expect Home, About, NotFound and Favorites Pokemons links', () => {
  renderWithRouter(<App />);
  const homeLink = screen.getByText(/home/i);
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByText(/about/i);
  expect(aboutLink).toBeInTheDocument();

  const favPokemonsLink = screen.getByText(/favorite/i);
  expect(favPokemonsLink).toBeInTheDocument();
});
