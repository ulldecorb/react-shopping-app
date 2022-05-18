import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductCard from './index';

describe('when component renders', () => {
  test('component is render', () => {
    const mockFunc = jest.fn();
    render(
      <Router>
        <ProductCard
          product={{
            ntf: '🐶',
            id: '4',
            productName: 'dog',
            category: 'animal',
            stock: 4,
            price: 75,
            quanty: 3
          }}
          handleToggleFavorites={mockFunc}
          checkFavorites={mockFunc}
        />
      </Router>
    );
    const element = screen.getByText(/category/i);
    expect(element).toBeInTheDocument();
  });
  test('click handler is invoked', () => {
    const mockHandler = jest.fn();
    render(
      <Router>
        <ProductCard
          product={{
            ntf: '🐶',
            id: '4',
            productName: 'dog',
            category: 'animal',
            stock: 4,
            price: 75,
            quanty: 3
          }}
          handleToggleFavorites={mockHandler}
          checkFavorites={mockHandler}
        />
      </Router>
    );
    const clickHandlerElement = screen.getByTestId('handleFavorite');
    fireEvent.click(clickHandlerElement);
    expect(mockHandler).toHaveBeenCalledTimes(2);
  });
});
