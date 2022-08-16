import React from 'react';
import { render, screen } from '@testing-library/react';
import { FavoritePokemons } from '../pages';

describe('Testando a FavoritePokemons.js', () => {
  test('Testa se o texto "No favorite pokemon found" aparece', () => {
    render(<FavoritePokemons />);
    const text = screen.getByText('No favorite pokemon found');
    expect(text).toBeInTheDocument();
  });
});
