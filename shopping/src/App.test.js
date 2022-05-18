import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/shop center/i);
  expect(linkElement).toBeInTheDocument();
});

/* ERROR COLLECTION
Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>.
xxxx
xxxx
*/
