import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LanguagesOption from './LanguagesOption';

describe('<LanguagesOption />', () => {
  test('it should mount', () => {
    render(<LanguagesOption />);
    
    const languagesOption = screen.getByTestId('LanguagesOption');

    expect(languagesOption).toBeInTheDocument();
  });
});