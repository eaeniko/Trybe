import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from '../renderWithRouter';

test('About.js tests - Check Pokedex Title', () => {
  renderWithRouter(<About />);

  const aboutText = screen.getByRole('heading', { level: 2, name: /about pokédex/i });
  expect(aboutText).toBeInTheDocument();
});

test('About.js tests - Check Pokedex p', () => {
  renderWithRouter(<About />);

  const pokedexParagraph1 = screen.getByText(/This application simulates a Pokédex/i);
  const pokedexParagraph2 = screen.getByText(/One can filter Pokémons by type/i);
  expect(pokedexParagraph1).toBeInTheDocument();
  expect(pokedexParagraph2).toBeInTheDocument();
});

test('About.js tests - Check Pokedex image in about', () => {
  renderWithRouter(<About />);

  const pokedexImage = screen.getByRole('img');
  expect(pokedexImage).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  expect(pokedexImage).toHaveAttribute('alt', 'Pokédex');
});
