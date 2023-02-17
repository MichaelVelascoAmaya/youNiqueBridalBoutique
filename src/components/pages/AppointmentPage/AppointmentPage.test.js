import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppointmentPage from './AppointmentPage';

describe('<AppointmentPage />', () => {
  test('it should mount', () => {
    render(<AppointmentPage />);
    
    const appointmentPage = screen.getByTestId('AppointmentPage');

    expect(appointmentPage).toBeInTheDocument();
  });
});