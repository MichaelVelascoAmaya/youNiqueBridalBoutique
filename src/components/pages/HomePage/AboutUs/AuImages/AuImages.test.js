import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuImages from './AuImages';

describe('<AuImages />', () => {
  test('it should mount', () => {
    render(<AuImages />);
    
    const auImages = screen.getByTestId('AuImages');

    expect(auImages).toBeInTheDocument();
  });
});