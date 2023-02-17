import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuText from './AuText';

describe('<AuText />', () => {
  test('it should mount', () => {
    render(<AuText />);
    
    const auText = screen.getByTestId('AuText');

    expect(auText).toBeInTheDocument();
  });
});