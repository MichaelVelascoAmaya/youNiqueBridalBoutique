import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WtohText from './WtohText';

describe('<WtohText />', () => {
  test('it should mount', () => {
    render(<WtohText />);
    
    const wtohText = screen.getByTestId('WtohText');

    expect(wtohText).toBeInTheDocument();
  });
});