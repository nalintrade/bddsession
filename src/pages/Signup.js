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
    <div className="signup-container" data-test-id="Signup-container">
      <div className="signup-box" data-test-id="Signup-box">
        <h2 data-test-id="Signup-heading">Create Your Account</h2>
        <p data-test-id="Signup-description">Sign up to access your MercuryDemo account.</p>
        {error && <p className="error-message" data-test-id="Signup-errorMessage">{error}</p>}
        <form onSubmit={handleSignup} data-test-id="Signup-form">
          <label data-test-id="Signup-usernameLabel">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            data-test-id="Signup-usernameInput"
          />

          <label data-test-id="Signup-passwordLabel">Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            data-test-id="Signup-passwordInput"
          />

          <label data-test-id="Signup-confirmPasswordLabel">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            data-test-id="Signup-confirmPasswordInput"
          />

          <button type="submit" data-test-id="Signup-submitButton">Create Account</button>
        </form>
        <p className="signin-link" data-test-id="Signup-signinText">
          Already have an account? <a href="/login" data-test-id="Signup-loginLink">Sign in</a>
        </p>
        <p className="terms" data-test-id="Signup-termsText">
          By signing up, you agree to our
          <button
            className="link-button"
            onClick={() => alert("Terms & Conditions placeholder")}
            data-test-id="Signup-termsButton"
          >
            Terms & Conditions
          </button>
          and
          <button
            className="link-button"
            onClick={() => alert("Privacy Policy placeholder")}
            data-test-id="Signup-privacyButton"
          >
            Privacy Policy
          </button>.
        </p>
        <p className="home-link" data-test-id="Signup-homeText">
          <a href="/" className="back-home" data-test-id="Signup-homeLink">← Back to Home</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
