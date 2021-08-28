import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Pokemon.js tests - Check Pokemon details infos', () => {
  const { history } = renderWithRouter(<App />);
  const ElectricButtonType = screen.getByRole('button', { name: 'Electric' });
  const ElectricType = screen.getByTestId('pokemon-name');
  const detailsLink = screen.getByText(/More details/i);

  userEvent.click(ElectricButtonType);
  expect(ElectricType.innerHTML).toBe('Pikachu');

  userEvent.click(detailsLink);
  const { pathname } = history.location;
  expect(pathname).toBe('/pokemons/25');

  const checkFavoritePokemon = screen.getByRole('checkbox');
  userEvent.click(checkFavoritePokemon);

  const favPokemon = screen.getByAltText('Pikachu is marked as favorite');
  expect(favPokemon).toHaveAttribute('src', '/star-icon.svg');
  expect(favPokemon).toHaveAttribute('alt', 'Pikachu is marked as favorite');

  const pokemonName = screen.getByText(/Pikachu details/i);
  expect(pokemonName).toBeInTheDocument();

  const pokemonType = screen.getByTestId('pokemon-type');
  expect(pokemonType.innerHTML).toBe('Electric');

  const pokemonWeight = screen.getByTestId('pokemon-weight');
  expect(pokemonWeight.innerHTML).toMatch(/Average weight: 6.0 kg/);

  const pokemonImage = screen.getAllByRole('img');
  expect(pokemonImage[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  expect(pokemonImage[0]).toHaveAttribute('alt', 'Pikachu sprite');
});
