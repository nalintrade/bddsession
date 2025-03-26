import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuoteSummary from './QuoteSummary';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfills
global.TextEncoder = TextEncoder;
// @ts-expect-error
global.TextDecoder = TextDecoder;

// Mock useNavigate
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('QuoteSummary Component', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  const setup = () => {
    render(
      <MemoryRouter>
        <QuoteSummary />
      </MemoryRouter>
    );
  };

  test('renders quote summary container and heading', () => {
    setup();
    expect(screen.getByTestId('QuoteSummary-container')).toBeInTheDocument();
    expect(screen.getByTestId('QuoteSummary-heading')).toHaveTextContent('Your Quote');
  });

  test('displays quote number, price, and frequency', () => {
    setup();
    expect(screen.getByTestId('QuoteSummary-quoteNumber')).toHaveTextContent('QTE58001299849');
    expect(screen.getByTestId('QuoteSummary-price')).toHaveTextContent('$31.66');
    expect(screen.getByTestId('QuoteSummary-frequencySelect')).toHaveDisplayValue('Per fortnight');
  });

  test('renders all quote benefits with tick marks', () => {
    setup();
    const expectedCount = 14; // Total number of benefits
    for (let i = 0; i < expectedCount; i++) {
      expect(screen.getByTestId(`QuoteSummary-benefit-${i}`)).toBeInTheDocument();
      expect(screen.getByTestId(`QuoteSummary-benefit-${i}`)).toHaveTextContent('✔');
    }
  });

  test('renders navigation buttons', () => {
    setup();
    expect(screen.getByTestId('QuoteSummary-backButton')).toBeInTheDocument();
    expect(screen.getByTestId('QuoteSummary-proceedButton')).toBeInTheDocument();
    expect(screen.getByTestId('QuoteSummary-emailButton')).toBeInTheDocument();
  });

  test('navigates to /coverage-selection on Back button click', () => {
    setup();
    fireEvent.click(screen.getByTestId('QuoteSummary-backButton'));
    expect(mockNavigate).toHaveBeenCalledWith('/coverage-selection');
  });

  test('navigates to /policy-application on Proceed button click', () => {
    setup();
    fireEvent.click(screen.getByTestId('QuoteSummary-proceedButton'));
    expect(mockNavigate).toHaveBeenCalledWith('/policy-application');
  });
});
