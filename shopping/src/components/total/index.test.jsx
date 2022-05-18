import React from 'react';
import { render, screen } from '@testing-library/react';
import Total from './index';

describe('when component renders', () => {
  test('title is render', () => {
    render(<Total cart={[]} />);
    const title = screen.getByText(/total/i);
    expect(title).toBeInTheDocument();
  });
});
