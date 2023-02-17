import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollectionsPage from './CollectionsPage';

describe('<CollectionsPage />', () => {
  test('it should mount', () => {
    render(<CollectionsPage />);
    
    const collectionsPage = screen.getByTestId('CollectionsPage');

    expect(collectionsPage).toBeInTheDocument();
  });
});