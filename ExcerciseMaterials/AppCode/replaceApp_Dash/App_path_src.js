import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import Dashboard from "./pages/Dashboard.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import GetQuote from "./pages/GetQuote.js";
import VehicleUsage from "./pages/VehicleUsage.js";
import CoverageSelection from "./pages/CoverageSelection.js";
import QuoteSummary from "./pages/QuoteSummary.js";
import PolicyApplication from "./pages/PolicyApplication.js";
import DriverInformation from "./pages/DriverInformation.js";



function App() {
  return (
    // <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bills" element={<div><h2>Bills Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
        <Route path="/usage" element={<div><h2>Usage Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
        <Route path="/pay-bill" element={<div><h2>Pay Bill Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
        <Route path="/change-plan" element={<div><h2>Change Plan Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
        <Route path="/move-house" element={<div><h2>Move House Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/vehicle-usage" element={<VehicleUsage />} />
        <Route path="/driver-information" element={<DriverInformation />} />
        <Route path="/coverage-selection" element={<CoverageSelection />} />
        <Route path="/quote-summary" element={<QuoteSummary />} />
        <Route path="/policy-application" element={<PolicyApplication />} />

        
        
        <Route path="/support" element={<div><h2>Support Page</h2><p className="home-link">
          <a href="/dashboard" className="back-home">← Back to Dashboard</a>
        </p></div>} />
      </Routes>
    // </Router>
  );
}

export default App;
