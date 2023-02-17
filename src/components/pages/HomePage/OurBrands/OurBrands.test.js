import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OurBrands from './OurBrands';

describe('<OurBrands />', () => {
  test('it should mount', () => {
    render(<OurBrands />);
    
    const ourBrands = screen.getByTestId('OurBrands');

    expect(ourBrands).toBeInTheDocument();
  });
});