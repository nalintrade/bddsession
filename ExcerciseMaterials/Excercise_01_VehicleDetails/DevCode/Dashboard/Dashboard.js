import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../auth/auth.js";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="dashboard-container" data-testid="Dashboard-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav" data-testid="Dashboard-nav">
        <div className="logo" data-testid="Dashboard-logo">MercuryDemo</div>
        <ul className="nav-links" data-testid="Dashboard-navLinks">
          <li><Link to="/" data-testid="Dashboard-link-Home">Home</Link></li>
          <li><Link to="/bills" data-testid="Dashboard-link-Bills">Bills</Link></li>
          <li><Link to="/usage" data-testid="Dashboard-link-Usage">Usage</Link></li>
          <li><Link to="/pay-bill" data-testid="Dashboard-link-PayBill">Pay Bill</Link></li>
          <li><Link to="/change-plan" data-testid="Dashboard-link-ChangePlan">Change Plan</Link></li>
          <li><Link to="/move-house" data-testid="Dashboard-link-MoveHouse">Move House</Link></li>
          <li><Link to="/profile" data-testid="Dashboard-link-Profile">Profile</Link></li>
          <li><Link to="/get-quote" data-testid="Dashboard-link-GetQuote">Get a Quote</Link></li>
          <li><Link to="/support" data-testid="Dashboard-link-Support">Support</Link></li>
        </ul>
      </nav>

      {/* Banner Section */}
      <div className="banner" data-testid="Dashboard-banner">
        <div className="ballnermain" data-testid="Dashboard-bannerTitle"> <h1>MercuryDemo</h1> </div>
        <div className="banner-text" data-testid="Dashboard-bannerText">
          <h2>Powering Your Home with Renewable Energy</h2>
          <p>Discover sustainable solutions tailored for you.</p>
        </div>
      </div>

      {/* Page Content */}
      <div className="content" data-testid="Dashboard-content">
        <h2>Welcome to Your Dashboard</h2>
        <p>Select a section to manage your account.</p>
        <button onClick={handleLogout} data-testid="Dashboard-logoutButton">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
