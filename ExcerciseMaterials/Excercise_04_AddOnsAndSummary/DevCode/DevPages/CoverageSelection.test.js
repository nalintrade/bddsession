import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CoverageSelection from './CoverageSelection';
import { MemoryRouter, useLocation } from 'react-router-dom';
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill
global.TextEncoder = TextEncoder;
// @ts-expect-error
global.TextDecoder = TextDecoder;

// Mocks
const mockNavigate = jest.fn();
const mockUseLocation = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () => mockUseLocation(),
}));

describe('CoverageSelection Component', () => {
  const setup = (initialState = {}) => {
    mockUseLocation.mockReturnValue({
      state: {
        selectedOptions: initialState,
      },
    });

    render(
      <MemoryRouter>
        <CoverageSelection />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  const options = [
    "Excess-free glass",
    "Roadside Rescue",
    "Hire vehicle or alternative transport after an incident",
    "Trailer",
  ];

  test('renders heading, description, table, and navigation buttons', () => {
    setup();

    expect(screen.getByTestId('Coverage-heading')).toHaveTextContent('Add Optional Benefits');
    expect(screen.getByTestId('Coverage-description')).toBeInTheDocument();
    expect(screen.getByTestId('Coverage-benefitsBox')).toBeInTheDocument();
    expect(screen.getByTestId('Coverage-benefitsTable')).toBeInTheDocument();
    expect(screen.getByTestId('Coverage-backButton')).toBeInTheDocument();
    expect(screen.getByTestId('Coverage-nextButton')).toBeInTheDocument();
  });

  test('renders all optional benefit options with unchecked checkboxes by default', () => {
    setup();

    options.forEach((option, index) => {
      expect(screen.getByTestId(`Coverage-benefitText-${index}`)).toHaveTextContent(option);
      expect(screen.getByTestId(`Coverage-checkbox-${index}`)).not.toBeChecked();
    });
  });

  test('preserves selected options from location state', () => {
    setup({ "Excess-free glass": true, "Trailer": true });

    expect(screen.getByTestId('Coverage-checkbox-0')).toBeChecked(); // Excess-free glass
    expect(screen.getByTestId('Coverage-checkbox-3')).toBeChecked(); // Trailer
  });

  test('toggles option selection on checkbox click', () => {
    setup();

    const checkbox = screen.getByTestId('Coverage-checkbox-1'); // Roadside Rescue
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  test('navigates to /driver-information on Back button click with selected options', () => {
    setup();

    fireEvent.click(screen.getByTestId('Coverage-checkbox-2')); // select one
    fireEvent.click(screen.getByTestId('Coverage-backButton'));

    expect(mockNavigate).toHaveBeenCalledWith('/driver-information', {
      state: {
        selectedOptions: {
          "Hire vehicle or alternative transport after an incident": true,
        },
      },
    });
  });

  test('navigates to /quote-summary on Next button click with selected options', () => {
    setup();

    fireEvent.click(screen.getByTestId('Coverage-checkbox-0')); // select one
    fireEvent.click(screen.getByTestId('Coverage-nextButton'));

    expect(mockNavigate).toHaveBeenCalledWith('/quote-summary', {
      state: {
        selectedOptions: {
          "Excess-free glass": true,
        },
      },
    });
  });
});
