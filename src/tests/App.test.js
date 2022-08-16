import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './rwr/renderWithRouter';

describe('Testando a App.js', () => {
  test('Testa se no topo da aplicação tem um link com nome "HOME"', () => {
    const { history } = renderWithRouter(<App />);

    const HOME_LINK = screen.getByRole('link', { name: 'Home' });
    userEvent.click(HOME_LINK);
    expect(history.location.pathname).toBe('/');
  });

  test('Testa se no topo da aplicação tem um link com nome "ABOUT"', () => {
    const { history } = renderWithRouter(<App />);

    const ABOUT_LINK = screen.getByRole('link', { name: 'About' });
    userEvent.click(ABOUT_LINK);
    expect(history.location.pathname).toBe('/about');
  });

  test('Testa se no topo da aplicação tem um link com nome "FAVORITES POKEMONS"', () => {
    const { history } = renderWithRouter(<App />);

    const FAV_LINK = screen.getByRole('link', { name: 'Favorite Pokémons' });
    userEvent.click(FAV_LINK);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('Testa se ao passar uma URL desconhecida, redireciona para NOT FOUND',
    () => {
      const { history } = renderWithRouter(<App />);

      history.push('/*');

      const notFound = screen.getByRole('heading', {
        level: 2,
        name: /Page requested not found/i,
      });
      expect(notFound).toBeInTheDocument();
    });
});
