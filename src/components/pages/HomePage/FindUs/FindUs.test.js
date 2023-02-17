import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FindUs from './FindUs';

describe('<FindUs />', () => {
  test('it should mount', () => {
    render(<FindUs />);
    
    const findUs = screen.getByTestId('FindUs');

    expect(findUs).toBeInTheDocument();
  });
});