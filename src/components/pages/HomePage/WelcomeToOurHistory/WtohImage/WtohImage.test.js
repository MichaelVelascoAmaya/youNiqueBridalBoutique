import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WtohImage from './WtohImage';

describe('<WtohImage />', () => {
  test('it should mount', () => {
    render(<WtohImage />);
    
    const wtohImage = screen.getByTestId('WtohImage');

    expect(wtohImage).toBeInTheDocument();
  });
});