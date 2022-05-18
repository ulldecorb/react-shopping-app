import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './index';

describe('when component renders', () => {
  test('title is render', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const title = screen.getByText(/shop center/i);
    expect(title).toBeInTheDocument();
  });
});
