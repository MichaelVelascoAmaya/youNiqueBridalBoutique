import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuList from './MenuList';

describe('<MenuList />', () => {
  test('it should mount', () => {
    render(<MenuList />);
    
    const menuList = screen.getByTestId('MenuList');

    expect(menuList).toBeInTheDocument();
  });
});