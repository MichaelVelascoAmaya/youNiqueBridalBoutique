import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Copyright from './Copyright';

describe('<Copyright />', () => {
  test('it should mount', () => {
    render(<Copyright />);
    
    const copyright = screen.getByTestId('Copyright');

    expect(copyright).toBeInTheDocument();
  });
});