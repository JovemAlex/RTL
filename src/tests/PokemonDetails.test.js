import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './rwr/renderWithRouter';
import App from '../App';
import pokemons from '../data';

const locationImg = 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png';
const locationImg2 = 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png';
const altExpected = 'Pikachu location';

describe('Testando a FavoritePokemons.js', () => {
  test('Testa se é exibido todos os headings level 2', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');

    const nameDetails = screen.getByRole('heading', {
      level: 2,
      name: /Pikachu Details/i,
    });
    expect(nameDetails).toBeInTheDocument();

    const summary = screen.getByRole('heading', {
      level: 2,
      name: /Summary/i,
    });
    expect(summary).toBeInTheDocument();

    const gameLocation = screen.getByRole('heading', {
      level: 2,
      name: /Game Locations of Pikachu/i,
    });
    expect(gameLocation).toBeInTheDocument();

    const label = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(label).toBeInTheDocument();

    const pikachu = pokemons[0];
    const summaryText = screen.getByText(pikachu.summary);
    expect(summaryText).toBeInTheDocument();

    const images = screen.getAllByRole('img');
    expect(images[1]).toHaveAttribute('src', locationImg);
    expect(images[1]).toHaveAttribute('alt', altExpected);
    expect(images[2]).toHaveAttribute('src', locationImg2);
    expect(images[2]).toHaveAttribute('alt', altExpected);
  });
});
