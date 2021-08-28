import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
// import data from '../data';

test('Pokedex.js tests - Check Pokedex Title', () => {
  renderWithRouter(<App />);

  const pokedex = screen.getByRole('heading',
    { level: 2, name: /Encountered pokémons/i });
  expect(pokedex).toBeInTheDocument();
});

test('Pokedex.js tests - Check Button ALL', () => {
  renderWithRouter(<App />);

  const pokedex = screen.getByRole('button', { name: 'All' });
  expect(pokedex).toBeInTheDocument();
});

test('Pokedex.js tests - Check Button Next Pokemon', () => {
  renderWithRouter(<App />);

  const nextPokemonBtn = screen.getByRole('button', { name: 'Próximo pokémon' });
  expect(nextPokemonBtn).toBeInTheDocument();
});

test('Pokedex.js tests - Check if theres all pokemon type buttons', () => {
  renderWithRouter(<App />);
  const pokemonTypeArrayLength = 7;
  const pokedex = screen.getAllByTestId('pokemon-type-button');
  expect(pokedex).toHaveLength(pokemonTypeArrayLength);
});

test('Pokedex.js tests - Check pokemon filter', () => {
  renderWithRouter(<App />);
  const fireButtonType = screen.getByRole('button', { name: 'Fire' });
  expect(fireButtonType).toBeInTheDocument();

  const fireType = screen.getByTestId('pokemon-name');
  userEvent.click(fireButtonType);
  expect(fireType.innerHTML).toBe('Charmander');

  const firstPokemonList = screen.getByTestId('pokemon-name');
  const buttonTypeAll = screen.getByRole('button', { name: 'All' });
  userEvent.click(buttonTypeAll);
  expect(firstPokemonList.innerHTML).toBe('Pikachu');
});
