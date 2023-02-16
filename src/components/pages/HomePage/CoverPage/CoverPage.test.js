import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CoverPage from './CoverPage';

describe('<CoverPage />', () => {
  test('it should mount', () => {
    render(<CoverPage />);
    
    const coverPage = screen.getByTestId('CoverPage');

    expect(coverPage).toBeInTheDocument();
  });
});