import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SocialNetworksMenu from './SocialNetworksMenu';

describe('<SocialNetworksMenu />', () => {
  test('it should mount', () => {
    render(<SocialNetworksMenu />);
    
    const socialNetworksMenu = screen.getByTestId('SocialNetworksMenu');

    expect(socialNetworksMenu).toBeInTheDocument();
  });
});