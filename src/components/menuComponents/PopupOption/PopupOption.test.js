import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PopupOption from './PopupOption';

describe('<PopupOption />', () => {
  test('it should mount', () => {
    render(<PopupOption />);
    
    const popupOption = screen.getByTestId('PopupOption');

    expect(popupOption).toBeInTheDocument();
  });
});