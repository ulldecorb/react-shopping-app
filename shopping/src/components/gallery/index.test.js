import React from 'react';
import { render, screen } from '@testing-library/react';
import Gallery from './index';

test('when component renders', () => {
  const mockFunction = jest.fn();
  render(<Gallery
    products={[]}
    handleToggleFavorites={mockFunction}
    checkFavorites={mockFunction}
  />);
  const title = screen.getByTestId('galleryTitle');
  expect(title).toBeInTheDocument();
});
test('when component is render with one product', () => {
  const mockFunction = jest.fn();
  render(<Gallery
    products={[{
      ntf: '⬜', id: '1', productName: 'circle', category: 'shape', stock: 8, price: 100
    }]}
    handleToggleFavorites={mockFunction}
    checkFavorites={mockFunction}
  />);
  const galleryList = screen.getByTestId('galleryListBox');
  expect(galleryList.childNodes.length).toBe(0);
});
