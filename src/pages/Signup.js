import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../auth/auth.js";
import "./Signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    const result = registerUser(username, password);
    if (result.success) {
      navigate("/login");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="signup-container" data-testid="Signup-container">
      <div className="signup-box" data-testid="Signup-box">
        <h2 data-testid="Signup-heading">Create Your Account</h2>
        <p data-testid="Signup-description">Sign up to access your MercuryDemo account.</p>
        {error && <p className="error-message" data-testid="Signup-errorMessage">{error}</p>}
        <form onSubmit={handleSignup} data-testid="Signup-form">
          <label data-testid="Signup-usernameLabel">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            data-testid="Signup-usernameInput"
          />

          <label data-testid="Signup-passwordLabel">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            data-testid="Signup-passwordInput"
          />

          <label data-testid="Signup-confirmPasswordLabel">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            data-testid="Signup-confirmPasswordInput"
          />

          <button type="submit" data-testid="Signup-submitButton">Create Account</button>
        </form>
        <p className="signin-link" data-testid="Signup-signinText">
          Already have an account? <a href="/login" data-testid="Signup-loginLink">Sign in</a>
        </p>
        <p className="terms" data-testid="Signup-termsText">
          By signing up, you agree to our
          <button
            className="link-button"
            onClick={() => alert("Terms & Conditions placeholder")}
            data-testid="Signup-termsButton"
          >
            Terms & Conditions
          </button>
          and
          <button
            className="link-button"
            onClick={() => alert("Privacy Policy placeholder")}
            data-testid="Signup-privacyButton"
          >
            Privacy Policy
          </button>.
        </p>
        <p className="home-link" data-testid="Signup-homeText">
          <a href="/" className="back-home" data-testid="Signup-homeLink">← Back to Home</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
