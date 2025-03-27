import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetQuote = () => {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState({ make: "", model: "", year: "", registration: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setVehicle({ ...vehicle, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    const year = parseInt(vehicle.year, 10);
    const currentYear = new Date().getFullYear();
  
    if (!vehicle.make) newErrors.make = "Make is required";
    if (!vehicle.model) newErrors.model = "Model is required";
  
    if (!vehicle.year || isNaN(year)) {
      newErrors.year = "Year must be a valid number";
    } else if (year < 1900) {
      newErrors.year = "Vehicle year must be 1900 or later";
    } else if (year > currentYear) {
      newErrors.year = "Vehicle year cannot be in the future";
    }
  
    if (!vehicle.registration) newErrors.registration = "Registration number is required";
    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      navigate("/vehicle-usage", { state: { vehicle } });
    }
  };

  return (
    <div className="quote-container" data-testid="GetQuote-container">
      <h2 data-testid="GetQuote-heading">Enter Vehicle Details</h2>
      <form data-testid="GetQuote-form">
        <label htmlFor="make">Make:</label>
        <input
          id="make"
          type="text"
          name="make"
          value={vehicle.make}
          onChange={handleChange}
          data-testid="GetQuote-makeInput"
        />
        {errors.make && <span className="error" data-testid="GetQuote-makeError">{errors.make}</span>}

        <label htmlFor="model">Model:</label>
        <input
          id="model"
          type="text"
          name="model"
          value={vehicle.model}
          onChange={handleChange}
          data-testid="GetQuote-modelInput"
        />
        {errors.model && <span className="error" data-testid="GetQuote-modelError">{errors.model}</span>}

        <label htmlFor="year">Year:</label>
        <input
          id="year"
          type="text"
          name="year"
          value={vehicle.year}
          onChange={handleChange}
          data-testid="GetQuote-yearInput"
        />
        {errors.year && <span className="error" data-testid="GetQuote-yearError">{errors.year}</span>}

        <label htmlFor="registration">Registration:</label>
        <input
          id="registration"
          type="text"
          name="registration"
          value={vehicle.registration}
          onChange={handleChange}
          data-testid="GetQuote-registrationInput"
        />
        {errors.registration && <span className="error" data-testid="GetQuote-registrationError">{errors.registration}</span>}

        <button type="button" onClick={handleNext} data-testid="GetQuote-nextButton">Next</button>
      </form>
    </div>
  );
};

export default GetQuote;
