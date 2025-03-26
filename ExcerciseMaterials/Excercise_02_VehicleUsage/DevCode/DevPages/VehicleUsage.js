import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VehicleUsage = () => {
  const navigate = useNavigate();

  const [usage, setUsage] = useState({
    annualMileage: "",
    primaryUse: "",
    parkingLocation: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUsage({ ...usage, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!usage.annualMileage || isNaN(usage.annualMileage)) newErrors.annualMileage = "Annual mileage is required";
    if (!usage.primaryUse) newErrors.primaryUse = "Primary use is required";
    if (!usage.parkingLocation) newErrors.parkingLocation = "Parking location is required";
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate("/driver-information", { state: { usage } });
    }
  };

  return (
    <div className="usage-container" data-testid="VehicleUsage-container">
      <h2 data-testid="VehicleUsage-heading">Enter Vehicle Usage Details</h2>
      <form data-testid="VehicleUsage-form">
        <label>Annual Mileage:</label>
        <input
          type="text"
          name="annualMileage"
          value={usage.annualMileage}
          onChange={handleChange}
          data-testid="VehicleUsage-mileageInput"
        />
        {errors.annualMileage && <span className="error" data-testid="VehicleUsage-mileageError">{errors.annualMileage}</span>}

        <label>Primary Use:</label>
        <select
          name="primaryUse"
          value={usage.primaryUse}
          onChange={handleChange}
          data-testid="VehicleUsage-primaryUseSelect"
        >
          <option value="">Select</option>
          <option value="Commuting">Commuting</option>
          <option value="Personal">Personal</option>
          <option value="Business">Business</option>
        </select>
        {errors.primaryUse && <span className="error" data-testid="VehicleUsage-primaryUseError">{errors.primaryUse}</span>}
        <br/>
        <label>Parking Location:</label>
        <select
          name="parkingLocation"
          value={usage.parkingLocation}
          onChange={handleChange}
          data-testid="VehicleUsage-parkingLocationSelect"
        >
          <option value="">Select</option>
          <option value="Garage">Garage</option>
          <option value="Driveway">Driveway</option>
          <option value="Street">Street</option>
        </select>
        {errors.parkingLocation && <span className="error" data-testid="VehicleUsage-parkingLocationError">{errors.parkingLocation}</span>}
        <br/>
        <button
          style={{ marginBottom: "10px" }}
          onClick={() => navigate("/get-quote", { state: { usage } })}
          data-testid="VehicleUsage-backButton"
        >
          Back
        </button>

        <button
          type="button"
          onClick={handleNext}
          data-testid="VehicleUsage-nextButton"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default VehicleUsage;
