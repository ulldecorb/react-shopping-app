import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './index';

test('when component is render', () => {
  render(<NotFound />);
  const linkElement = screen.getByText(/not/i);
  expect(linkElement).toBeInTheDocument();
});
