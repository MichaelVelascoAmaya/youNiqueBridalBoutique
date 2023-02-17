import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactUsPage from './ContactUsPage';

describe('<ContactUsPage />', () => {
  test('it should mount', () => {
    render(<ContactUsPage />);
    
    const contactUsPage = screen.getByTestId('ContactUsPage');

    expect(contactUsPage).toBeInTheDocument();
  });
});