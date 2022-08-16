import React from 'react';
import { render, screen } from '@testing-library/react';
import { NotFound } from '../pages';

const srcExpected = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
const altExpected = 'Pikachu crying because the page requested was not found';

describe('Testando a NotFound.js', () => {
  test('É exibido na tela um heading level 2 com o texto Page requested not found',
    () => {
      render(<NotFound />);
      const heading = screen.getByRole('heading', {
        level: 2,
        name: /Page requested not found/i,
      });
      expect(heading).toBeInTheDocument();
    });

  test('Testa contém uma imagem com src igual à srcExpected', () => {
    render(<NotFound />);

    const image = screen.getAllByRole('img');

    expect(image[1]).toHaveAttribute('src', srcExpected);
    expect(image[1]).toHaveAttribute('alt', altExpected);
  });
});
