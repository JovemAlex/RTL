import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from '../pages';

const srcExpected = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

describe('Testando a About.js', () => {
  test('Testa se exite um Heading level 2, com o texto "About Pokédex" na rota "/about"',
    () => {
      render(<About />);

      const heading = screen.getByRole('heading', { level: 2, name: 'About Pokédex' });
      expect(heading).toBeInTheDocument();
    });

  test('Testa se a imagem tem o mesmo src do "srcExpected"',
    () => {
      render(<About />);

      const image = screen.getByRole('img');

      expect(image).toHaveAttribute('src', srcExpected);
      expect(image).toHaveAttribute('alt', 'Pokédex');
    });
});
