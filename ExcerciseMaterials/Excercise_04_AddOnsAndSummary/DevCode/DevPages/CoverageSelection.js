import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CoverageSelection.css";

const CoverageSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedOptions, setSelectedOptions] = useState(
    location.state?.selectedOptions || {}
  );

  const options = [
    "Excess-free glass",
    "Roadside Rescue",
    "Hire vehicle or alternative transport after an incident",
    "Trailer"
  ];

  const handleChange = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="coverage-selection-container" data-testid="Coverage-container">
      <h2 data-testid="Coverage-heading">Add Optional Benefits</h2>
      <p data-testid="Coverage-description">
        Upgrade your cover with these optional extras. If you change your mind,
        you can add or remove them from your quote later.
      </p>

      <div className="benefits-box" data-testid="Coverage-benefitsBox">
        <table className="benefits-table" data-testid="Coverage-benefitsTable">
          <tbody>
            {options.map((option, index) => (
              <tr key={index} className="benefit-row" data-testid={`Coverage-benefitRow-${index}`}>
                <td className="benefit-text" data-testid={`Coverage-benefitText-${index}`}>{option}</td>
                <td className="benefit-checkbox-cell">
                  <input
                    type="checkbox"
                    className="benefit-checkbox"
                    checked={selectedOptions[option] || false}
                    onChange={() => handleChange(option)}
                    data-testid={`Coverage-checkbox-${index}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="navigation-buttons" data-testid="Coverage-navigation">
        <button
          className="nav-btn"
          onClick={() => navigate("/driver-information", { state: { selectedOptions } })}
          data-testid="Coverage-backButton"
        >
          Back
        </button>
        <button
          className="nav-btn"
          onClick={() => navigate("/quote-summary", { state: { selectedOptions } })}
          data-testid="Coverage-nextButton"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CoverageSelection;
