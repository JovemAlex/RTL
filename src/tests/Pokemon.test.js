import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './rwr/renderWithRouter';

const srcExpected = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
const altExpected = 'Pikachu sprite';

describe('Testando a App.js', () => {
  test(`-Testa se a imagem do pokemon tem o src e o alt corretos
    -Testa se ao definir um pokemons favorito aparece a estrela
    com o src e alt corretos
    -Testa se o tipo do pokemon é exibido na tela`, () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');

    const pokemonImage = screen.getAllByRole('img');
    expect(pokemonImage[0]).toHaveAttribute('src', srcExpected);
    expect(pokemonImage[0]).toHaveAttribute('alt', altExpected);

    const checkbox = screen.getByRole('checkbox', { name: /Pokémon favoritado?/i });
    userEvent.click(checkbox);

    const favImage = screen.getAllByRole('img');
    expect(favImage[1]).toHaveAttribute('src', '/star-icon.svg');
    expect(favImage[1]).toHaveAttribute('alt', 'Pikachu is marked as favorite');

    const pokemonType = screen.getByText('Electric');
    expect(pokemonType).toBeInTheDocument();
  });

  test('Testa se a tela possui um link', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/');

    const link = screen.getByRole('link', { name: /more details/i });
    expect(link).toBeInTheDocument();

    userEvent.click(link);

    expect(history.location.pathname).toBe('/pokemons/25');
  });
});
