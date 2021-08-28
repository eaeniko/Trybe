import React from 'react';
import { screen } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';

test('FavoritePokemons.js tests - No favorite pokemons found', () => {
  renderWithRouter(<FavoritePokemons />);

  const noFavPokemon = screen.getByText(/No favorite pokemon found/i);
  expect(noFavPokemon).toBeInTheDocument();
});
