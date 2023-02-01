import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopHeader from './TopHeader';

describe('<TopHeader />', () => {
  test('it should mount', () => {
    render(<TopHeader />);
    
    const topHeader = screen.getByTestId('TopHeader');

    expect(topHeader).toBeInTheDocument();
  });
});