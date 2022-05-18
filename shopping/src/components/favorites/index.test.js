import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Favorites from './index';

test('when component is render with empty favorites products', () => {
  const mockFunction = jest.fn();
  render(
    <Router>
      <Favorites
        favorites={[]}
        handleToggleFavorites={mockFunction}
        checkFavorites={mockFunction}
      />
    </Router>
  );
  const linkElement = screen.getByText(/No Favorites Products yet/i);
  expect(linkElement).toBeInTheDocument();
});
test('when component is render with favorites products', () => {
  const mockFunction = jest.fn();
  render(
    <Router>
      <Favorites
        favorites={[{
          ntf: '⬜', id: '1', productName: 'circle', category: 'shape', stock: 8, price: 100
        }]}
        handleToggleFavorites={mockFunction}
        checkFavorites={mockFunction}
      />
    </Router>
  );
  const linkElement = screen.getByText(/circle/i);
  expect(linkElement).toBeInTheDocument();
});
