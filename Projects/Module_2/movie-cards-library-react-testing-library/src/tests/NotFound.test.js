import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from '../renderWithRouter';

test('NotFound.js tests - If page exist with H2 and image', () => {
  const { history } = renderWithRouter(<NotFound />);
  history.push('/notfound');

  const notFoundText = screen.getByRole('heading',
    { level: 2, name: /Page requested not found/i });
  expect(notFoundText).toBeInTheDocument();

  const notFoundGif = screen.getByAltText(/Pikachu/);
  expect(notFoundGif).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
