import React from 'react'; 
import { render, screen, fireEvent } from "@testing-library/react";
import Profile from "./Profile";
import { MemoryRouter } from "react-router-dom";
import { TextEncoder, TextDecoder } from "util";
import '@testing-library/jest-dom';
// Needed for Node.js test environment
global.TextEncoder = TextEncoder;
// @ts-expect-error
global.TextDecoder = TextDecoder;

test("renders the Profile form with all fields", () => {
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone:/i)).toBeInTheDocument();
  expect(screen.getByText(/Save Profile/i)).toBeInTheDocument();
  expect(screen.getByText(/Back to Dashboard/i)).toBeInTheDocument();
});

test("allows user to edit profile fields", () => {
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  const nameInput = screen.getByLabelText(/Name:/i);
  const emailInput = screen.getByLabelText(/Email:/i);
  const phoneInput = screen.getByLabelText(/Phone:/i);

  fireEvent.change(nameInput, { target: { value: "Jane Doe" } });
  fireEvent.change(emailInput, { target: { value: "jane@example.com" } });
  fireEvent.change(phoneInput, { target: { value: "987-654-3210" } });

  expect(nameInput.value).toBe("Jane Doe");
  expect(emailInput.value).toBe("jane@example.com");
  expect(phoneInput.value).toBe("987-654-3210");
});

test("shows success alert and navigates on save", () => {
  window.alert = jest.fn(); // mock alert

  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  const saveButton = screen.getByText(/Save Profile/i);
  fireEvent.click(saveButton);

  expect(window.alert).toHaveBeenCalledWith("Profile updated successfully!");
});
