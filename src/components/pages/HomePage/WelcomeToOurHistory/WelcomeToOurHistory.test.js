import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WelcomeToOurHistory from './WelcomeToOurHistory';

describe('<WelcomeToOurHistory />', () => {
  test('it should mount', () => {
    render(<WelcomeToOurHistory />);
    
    const welcomeToOurHistory = screen.getByTestId('WelcomeToOurHistory');

    expect(welcomeToOurHistory).toBeInTheDocument();
  });
});