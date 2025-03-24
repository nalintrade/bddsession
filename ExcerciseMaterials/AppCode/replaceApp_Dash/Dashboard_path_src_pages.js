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
    <div className="dashboard-container" data-test-id="Dashboard-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav" data-test-id="Dashboard-nav">
        <div className="logo" data-test-id="Dashboard-logo">MercuryDemo</div>
        <ul className="nav-links" data-test-id="Dashboard-navLinks">
          <li><Link to="/" data-test-id="Dashboard-link-Home">Home</Link></li>
          <li><Link to="/bills" data-test-id="Dashboard-link-Bills">Bills</Link></li>
          <li><Link to="/usage" data-test-id="Dashboard-link-Usage">Usage</Link></li>
          <li><Link to="/pay-bill" data-test-id="Dashboard-link-PayBill">Pay Bill</Link></li>
          <li><Link to="/change-plan" data-test-id="Dashboard-link-ChangePlan">Change Plan</Link></li>
          <li><Link to="/move-house" data-test-id="Dashboard-link-MoveHouse">Move House</Link></li>
          <li><Link to="/profile" data-test-id="Dashboard-link-Profile">Profile</Link></li>
          <li><Link to="/get-quote" data-test-id="Dashboard-link-GetQuote">Get a Quote</Link></li>
          <li><Link to="/support" data-test-id="Dashboard-link-Support">Support</Link></li>
        </ul>
      </nav>

      {/* Banner Section */}
      <div className="banner" data-test-id="Dashboard-banner">
        <div className="ballnermain" data-test-id="Dashboard-bannerTitle"> <h1>MercuryDemo</h1> </div>
        <div className="banner-text" data-test-id="Dashboard-bannerText">
          <h2>Powering Your Home with Renewable Energy</h2>
          <p>Discover sustainable solutions tailored for you.</p>
        </div>
      </div>

      {/* Page Content */}
      <div className="content" data-test-id="Dashboard-content">
        <h2>Welcome to Your Dashboard</h2>
        <p>Select a section to manage your account.</p>
        <button onClick={handleLogout} data-test-id="Dashboard-logoutButton">Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
