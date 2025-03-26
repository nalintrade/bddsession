import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../auth/auth.js";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const result = loginUser(username, password);
    if (result.success) {
      navigate("/dashboard");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="login-container" data-testid="Login-container">
      <div className="login-box" data-testid="Login-box">
        <h2 data-testid="Login-heading">Sign in to Mercury</h2>
        <p data-testid="Login-subheading">Access your account with ease.</p>
        {error && <p className="error-message" data-testid="Login-error">{error}</p>}
        <form onSubmit={handleLogin} data-testid="Login-form">
          <label data-testid="Login-usernameLabel">Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            data-testid="Login-usernameInput"
          />

          <label data-testid="Login-passwordLabel">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            data-testid="Login-passwordInput"
          />

          <button type="submit" data-testid="Login-submitButton">Sign In</button>
        </form>

        <p className="signup-link" data-testid="Login-signupLink">
          Don’t have an account? <a href="/signup">Create one</a>
        </p>

        <p className="home-link" data-testid="Login-homeLink">
          <a href="/" className="back-home">← Back to Home</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
