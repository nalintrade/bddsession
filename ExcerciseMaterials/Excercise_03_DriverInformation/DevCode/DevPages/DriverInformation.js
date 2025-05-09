import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./DriverInformation.css";

const DriverInformation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [driverInfo, setDriverInfo] = useState({
    licenseYears: location.state?.driverInfo?.licenseYears || "",
    claimsInLastFiveYears: location.state?.driverInfo?.claimsInLastFiveYears || "",
  });

  const vehicleDetails = location.state?.vehicleDetails || {};
  const vehicleUsage = location.state?.vehicleUsage || {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    navigate("/coverage-selection", {
      state: {
        vehicleDetails,
        vehicleUsage,
        driverInfo,
      },
    });
  };

  const handleBack = () => {
    navigate("/vehicle-usage", {
      state: {
        vehicleDetails,
        vehicleUsage,
        driverInfo,
      },
    });
  };

  return (
    <div className="driver-info-container" data-testid="DriverInfo-container">
      <h2 data-testid="DriverInfo-heading">Driver Information</h2>
      <br/>

      <div className="form-group" data-testid="DriverInfo-licenseGroup">
        <label htmlFor="licenseYears">License Duration (years)</label>
        <input
          type="number"
          id="licenseYears"
          name="licenseYears"
          value={driverInfo.licenseYears}
          onChange={handleChange}
          data-testid="DriverInfo-licenseInput"
        />
      </div>

      <div className="form-group" data-testid="DriverInfo-claimsGroup">
        <label htmlFor="claimsInLastFiveYears">Claims in Last 5 Years</label>
        <input
          type="number"
          id="claimsInLastFiveYears"
          name="claimsInLastFiveYears"
          value={driverInfo.claimsInLastFiveYears}
          onChange={handleChange}
          data-testid="DriverInfo-claimsInput"
        />
      </div>

      <div className="navigation-buttons" data-testid="DriverInfo-navigation">
        <button className="nav-btn" onClick={handleBack} data-testid="DriverInfo-backButton">Back</button>
        <button className="nav-btn" onClick={handleNext} data-testid="DriverInfo-nextButton">Next</button>
      </div>
    </div>
  );
};

export default DriverInformation;
