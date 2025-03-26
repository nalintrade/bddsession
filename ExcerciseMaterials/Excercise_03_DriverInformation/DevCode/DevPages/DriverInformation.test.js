import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DriverInformation from './DriverInformation';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfill for Node.js
global.TextEncoder = TextEncoder;
// @ts-expect-error
global.TextDecoder = TextDecoder;

// Mock react-router
const mockNavigate = jest.fn();
const mockUseLocation = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useLocation: () => mockUseLocation(),
}));

describe('DriverInformation Component', () => {
  const setup = (initialState = {}) => {
    mockUseLocation.mockReturnValue({
      state: {
        driverInfo: initialState.driverInfo || {},
        vehicleDetails: initialState.vehicleDetails || {},
        vehicleUsage: initialState.vehicleUsage || {},
      },
    });

    render(
      <MemoryRouter>
        <DriverInformation />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('renders container, heading, and input fields', () => {
    setup();

    expect(screen.getByTestId('DriverInfo-container')).toBeInTheDocument();
    expect(screen.getByTestId('DriverInfo-heading')).toHaveTextContent('Driver Information');
    expect(screen.getByTestId('DriverInfo-licenseInput')).toBeInTheDocument();
    expect(screen.getByTestId('DriverInfo-claimsInput')).toBeInTheDocument();
    expect(screen.getByTestId('DriverInfo-backButton')).toBeInTheDocument();
    expect(screen.getByTestId('DriverInfo-nextButton')).toBeInTheDocument();
  });

  test('initializes input fields with values from location.state', () => {
    setup({
      driverInfo: {
        licenseYears: '10',
        claimsInLastFiveYears: '2',
      },
    });

    expect(screen.getByTestId('DriverInfo-licenseInput')).toHaveValue(10);
    expect(screen.getByTestId('DriverInfo-claimsInput')).toHaveValue(2);
  });

  test('updates state when inputs change', () => {
    setup();

    const licenseInput = screen.getByTestId('DriverInfo-licenseInput');
    const claimsInput = screen.getByTestId('DriverInfo-claimsInput');

    fireEvent.change(licenseInput, { target: { value: '5' } });
    fireEvent.change(claimsInput, { target: { value: '1' } });

    expect(licenseInput).toHaveValue(5);
    expect(claimsInput).toHaveValue(1);
  });

  test('navigates to /coverage-selection with updated driverInfo on Next click', () => {
    setup({
      vehicleDetails: { make: 'Toyota' },
      vehicleUsage: { annualMileage: '15000' },
    });

    fireEvent.change(screen.getByTestId('DriverInfo-licenseInput'), {
      target: { value: '8' },
    });

    fireEvent.change(screen.getByTestId('DriverInfo-claimsInput'), {
      target: { value: '0' },
    });

    fireEvent.click(screen.getByTestId('DriverInfo-nextButton'));

    expect(mockNavigate).toHaveBeenCalledWith('/coverage-selection', {
      state: {
        vehicleDetails: { make: 'Toyota' },
        vehicleUsage: { annualMileage: '15000' },
        driverInfo: {
          licenseYears: '8',
          claimsInLastFiveYears: '0',
        },
      },
    });
  });

  test('navigates to /vehicle-usage with updated driverInfo on Back click', () => {
    setup({
      vehicleDetails: { make: 'Ford' },
      vehicleUsage: { annualMileage: '9000' },
    });

    fireEvent.change(screen.getByTestId('DriverInfo-licenseInput'), {
      target: { value: '2' },
    });

    fireEvent.change(screen.getByTestId('DriverInfo-claimsInput'), {
      target: { value: '1' },
    });

    fireEvent.click(screen.getByTestId('DriverInfo-backButton'));

    expect(mockNavigate).toHaveBeenCalledWith('/vehicle-usage', {
      state: {
        vehicleDetails: { make: 'Ford' },
        vehicleUsage: { annualMileage: '9000' },
        driverInfo: {
          licenseYears: '2',
          claimsInLastFiveYears: '1',
        },
      },
    });
  });
});
