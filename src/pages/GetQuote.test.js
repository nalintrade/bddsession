import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GetQuote from './GetQuote';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfills for TextEncoder/TextDecoder
global.TextEncoder = TextEncoder;
// @ts-expect-error
global.TextDecoder = TextDecoder;

describe('GetQuote Component', () => {
  const setup = () => {
    render(
      <MemoryRouter>
        <GetQuote />
      </MemoryRouter>
    );
  };

  test('renders all input fields and the Next button', () => {
    setup();

    expect(screen.getByTestId('GetQuote-makeInput')).toBeInTheDocument();
    expect(screen.getByTestId('GetQuote-modelInput')).toBeInTheDocument();
    expect(screen.getByTestId('GetQuote-yearInput')).toBeInTheDocument();
    expect(screen.getByTestId('GetQuote-registrationInput')).toBeInTheDocument();
    expect(screen.getByTestId('GetQuote-nextButton')).toBeInTheDocument();
  });

  test('shows error messages when submitting empty form', () => {
    setup();

    const nextButton = screen.getByTestId('GetQuote-nextButton');
    fireEvent.click(nextButton);

    expect(screen.getByTestId('GetQuote-makeError')).toHaveTextContent('Make is required');
    expect(screen.getByTestId('GetQuote-modelError')).toHaveTextContent('Model is required');
    expect(screen.getByTestId('GetQuote-yearError')).toHaveTextContent('Year must be a valid number');
    expect(screen.getByTestId('GetQuote-registrationError')).toHaveTextContent('Registration number is required');
  });

  test('shows validation error for year out of range', () => {
    setup();

    fireEvent.change(screen.getByTestId('GetQuote-yearInput'), {
      target: { value: '1800' }
    });

    const nextButton = screen.getByTestId('GetQuote-nextButton');
    fireEvent.click(nextButton);

    expect(screen.getByTestId('GetQuote-yearError')).toHaveTextContent('Vehicle year must be 1900 or later');
  });

  test('submits form successfully with valid inputs', () => {
    setup();

    fireEvent.change(screen.getByTestId('GetQuote-makeInput'), { target: { value: 'Toyota' } });
    fireEvent.change(screen.getByTestId('GetQuote-modelInput'), { target: { value: 'Corolla' } });
    fireEvent.change(screen.getByTestId('GetQuote-yearInput'), { target: { value: '2020' } });
    fireEvent.change(screen.getByTestId('GetQuote-registrationInput'), { target: { value: 'ABC123' } });

    const nextButton = screen.getByTestId('GetQuote-nextButton');
    fireEvent.click(nextButton);

    // If needed, you could spy on navigate or use a mock router for asserting navigation
    // But here we just assert no validation error appears
    expect(screen.queryByTestId('GetQuote-makeError')).not.toBeInTheDocument();
    expect(screen.queryByTestId('GetQuote-modelError')).not.toBeInTheDocument();
    expect(screen.queryByTestId('GetQuote-yearError')).not.toBeInTheDocument();
    expect(screen.queryByTestId('GetQuote-registrationError')).not.toBeInTheDocument();
  });
});
