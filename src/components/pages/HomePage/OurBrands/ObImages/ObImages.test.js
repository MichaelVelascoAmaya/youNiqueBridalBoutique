import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ObImages from './ObImages';

describe('<ObImages />', () => {
  test('it should mount', () => {
    render(<ObImages />);
    
    const obImages = screen.getByTestId('ObImages');

    expect(obImages).toBeInTheDocument();
  });
});