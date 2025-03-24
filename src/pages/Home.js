import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (

    <div className="home-container">
      <div><br/></div>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to MercuryDemo</h1>
          <p className="tagline">Powering your home with renewable energy solutions.</p>
          <div className="button-group">
            <button className="primary-button" onClick={() => navigate("/signup")}>
              Create an Account
            </button>
            <button className="secondary-button" onClick={() => navigate("/login")}>
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="features">
        <h2>Why Choose MercuryDemo?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="https://www.MercuryDemo.co.nz/-/media/MercuryDemo/images/homepage/homepage-solar-icon.svg" alt="Solar Power" />
            <h3>Solar Solutions</h3>
            <p>Maximize your energy savings with our solar solutions.</p>
          </div>
          <div className="feature-card">
            <img src="https://www.MercuryDemo.co.nz/-/media/MercuryDemo/images/homepage/homepage-ev-icon.svg" alt="EV Charging" />
            <h3>EV Charging</h3>
            <p>Charge your electric vehicle with MercuryDemo EV plans.</p>
          </div>
          <div className="feature-card">
            <img src="https://www.MercuryDemo.co.nz/-/media/MercuryDemo/images/homepage/homepage-wind-icon.svg" alt="Renewable Energy" />
            <h3>100% Renewable</h3>
            <p>We power homes with clean, sustainable energy sources.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} MercuryDemo Energy. All rights reserved.</p>
      </footer>
    </div>

  );
};

export default Home;
