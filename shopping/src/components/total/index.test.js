import React from 'react';
import { render, screen } from '@testing-library/react';
import Total from './index';

describe('when component renders', () => {
  test('title is render', () => {
    render(<Total cart={[]} />);
    const title = screen.getByText(/total/i);
    expect(title).toBeInTheDocument();
  });
  test('price is render', () => {
    const component = render(<Total cart={[{
      ntf: '😺',
      id: '3',
      productName: 'cat',
      category: 'animal',
      stock: 7,
      price: 50,
      quanty: 1
    }]}
    />);
    const finalPrice = component.getByTestId('finalPrice');
    expect(finalPrice).toBeInTheDocument();
  });
});
