import React from 'react';
import { render } from '@testing-library/react';
import { Landing } from './index';

describe('when landing renders', () => {
  test('Landing component is render', () => {
    const landing = render(<Landing />);
    expect(landing.container).toHaveTextContent(/slider/i);
  });
});
