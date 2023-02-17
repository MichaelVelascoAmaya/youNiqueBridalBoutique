import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuOurValues from './AuOurValues';

describe('<AuOurValues />', () => {
  test('it should mount', () => {
    render(<AuOurValues />);
    
    const auOurValues = screen.getByTestId('AuOurValues');

    expect(auOurValues).toBeInTheDocument();
  });
});