import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VehicleUsage from './VehicleUsage';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('VehicleUsage Component', () => {
  const setup = () => {
    render(
      <MemoryRouter>
        <VehicleUsage />
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('renders all input fields and buttons', () => {
    setup();

    expect(screen.getByTestId('VehicleUsage-mileageInput')).toBeInTheDocument();
    expect(screen.getByTestId('VehicleUsage-primaryUseSelect')).toBeInTheDocument();
    expect(screen.getByTestId('VehicleUsage-parkingLocationSelect')).toBeInTheDocument();
    expect(screen.getByTestId('VehicleUsage-nextButton')).toBeInTheDocument();
    expect(screen.getByTestId('VehicleUsage-backButton')).toBeInTheDocument();
  });

  test('initial field values are empty', () => {
    setup();

    expect(screen.getByTestId('VehicleUsage-mileageInput')).toHaveValue('');
    expect(screen.getByTestId('VehicleUsage-primaryUseSelect')).toHaveValue('');
    expect(screen.getByTestId('VehicleUsage-parkingLocationSelect')).toHaveValue('');
  });

  test('shows errors for all empty fields on Next click', () => {
    setup();

    fireEvent.click(screen.getByTestId('VehicleUsage-nextButton'));

    expect(screen.getByTestId('VehicleUsage-mileageError')).toHaveTextContent('Annual mileage is required');
    expect(screen.getByTestId('VehicleUsage-primaryUseError')).toHaveTextContent('Primary use is required');
    expect(screen.getByTestId('VehicleUsage-parkingLocationError')).toHaveTextContent('Parking location is required');
  });

  test('shows error for invalid mileage input', () => {
    setup();

    fireEvent.change(screen.getByTestId('VehicleUsage-mileageInput'), {
      target: { value: 'abc' },
    });

    fireEvent.click(screen.getByTestId('VehicleUsage-nextButton'));

    expect(screen.getByTestId('VehicleUsage-mileageError')).toHaveTextContent('Annual mileage is required');
  });

  test('navigates to /driver-information with valid inputs', () => {
    setup();

    fireEvent.change(screen.getByTestId('VehicleUsage-mileageInput'), {
      target: { value: '12000' },
    });

    fireEvent.change(screen.getByTestId('VehicleUsage-primaryUseSelect'), {
      target: { value: 'Personal' },
    });

    fireEvent.change(screen.getByTestId('VehicleUsage-parkingLocationSelect'), {
      target: { value: 'Garage' },
    });

    fireEvent.click(screen.getByTestId('VehicleUsage-nextButton'));

    expect(mockNavigate).toHaveBeenCalledWith('/driver-information', expect.objectContaining({
      state: {
        usage: {
          annualMileage: '12000',
          primaryUse: 'Personal',
          parkingLocation: 'Garage',
        },
      },
    }));
  });

  test('Back button navigates to /get-quote', () => {
    setup();

    fireEvent.click(screen.getByTestId('VehicleUsage-backButton'));

    expect(mockNavigate).toHaveBeenCalledWith('/get-quote', expect.anything());
  });
});
