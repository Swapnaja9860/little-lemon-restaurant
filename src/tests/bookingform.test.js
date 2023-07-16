import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders form inputs correctly', () => {
    render(<BookingForm />);
  
    // Check if the form inputs are rendered correctly
    expect(screen.getByLabelText('Available Date:')).toBeInTheDocument();
    expect(screen.getByLabelText('Available Time:')).toBeInTheDocument();
    expect(screen.getByLabelText('Guest Count:')).toBeInTheDocument();
    expect(screen.getByLabelText('Preferences:')).toBeInTheDocument();
  });

  test('updates state on form input change', () => {
    render(<BookingForm />);
  
    // Simulate form input changes
    fireEvent.change(screen.getByLabelText('Available Date:'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByLabelText('Available Time:'), { target: { value: '7.00' } });
    fireEvent.change(screen.getByLabelText('Guest Count:'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Preferences:'), { target: { value: 'Rotating Table' } });
  
    // Check if the form inputs update the component state correctly
    expect(screen.getByLabelText('Available Date:').value).toBe('2022-01-01');
    expect(screen.getByLabelText('Available Time:').value).toBe('7.00');
    expect(screen.getByLabelText('Guest Count:').value).toBe('4');
    expect(screen.getByLabelText('Preferences:').value).toBe('Rotating Table');
  });

  test('submits form with valid data', () => {
    render(<BookingForm />);
  
    // Simulate form input changes
    fireEvent.change(screen.getByLabelText('Available Date:'), { target: { value: '2022-01-01' } });
    fireEvent.change(screen.getByLabelText('Available Time:'), { target: { value: '7.00' } });
    fireEvent.change(screen.getByLabelText('Guest Count:'), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText('Preferences:'), { target: { value: 'Rotating Table' } });
  
    // Submit the form
    fireEvent.submit(screen.getByTestId('booking-form'));
  
  });
});
