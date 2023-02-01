import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FloatingHeader from './FloatingHeader';

describe('<FloatingHeader />', () => {
  test('it should mount', () => {
    render(<FloatingHeader />);
    
    const floatingHeader = screen.getByTestId('FloatingHeader');

    expect(floatingHeader).toBeInTheDocument();
  });
});