import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// ✅ Test 1: Ensure App Renders Without Crashing
test("renders app without crashing", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});

// ✅ Test 2: Verify Home Page Loads Initially
test("renders Home page by default", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Welcome to MercuryDemo/i)).toBeInTheDocument();
});

// ✅ Test 3: Verify Login Page Loads on Navigation
test("navigates to Login page", () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Sign in to Your Account/i)).toBeInTheDocument();
});

// ✅ Test 4: Verify Signup Page Loads
test("navigates to Signup page", () => {
  render(
    <MemoryRouter initialEntries={["/signup"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Create Your Account/i)).toBeInTheDocument();
});

// ✅ Test 5: Verify Dashboard Requires Authentication
test("redirects to login if trying to access Dashboard without being logged in", () => {
  render(
    <MemoryRouter initialEntries={["/dashboard"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/Sign in to Your Account/i)).toBeInTheDocument();
});
