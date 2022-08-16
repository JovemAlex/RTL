import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './rwr/renderWithRouter';

describe('Pokedex.js tests', () => {
  test('Testa se os botões de filtragem tem o nome correto', () => {
    renderWithRouter(<App />);

    const electricButton = screen.getByRole('button', { name: 'Electric' });

    expect(electricButton).toBeInTheDocument();

    userEvent.click(electricButton);

    const pikachu = screen.getByText(/Pikachu/i);

    expect(pikachu).toBeInTheDocument();
  });

  test('Testa se os botões possuem o testid', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');
    const seven = 7;
    expect(buttons.length).toBe(seven);
  });

  test('Testa se é Possível clicar no Botão com nome "All"', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /all/i });

    userEvent.click(button);

    const pikachu = screen.getByText(/pikachu/i);
    expect(pikachu).toBeInTheDocument();
  });
});
