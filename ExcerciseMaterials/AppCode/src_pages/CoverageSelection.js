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
    <div className="coverage-selection-container" data-test-id="Coverage-container">
      <h2 data-test-id="Coverage-heading">Add Optional Benefits</h2>
      <p data-test-id="Coverage-description">
        Upgrade your cover with these optional extras. If you change your mind,
        you can add or remove them from your quote later.
      </p>

      <div className="benefits-box" data-test-id="Coverage-benefitsBox">
        <table className="benefits-table" data-test-id="Coverage-benefitsTable">
          <tbody>
            {options.map((option, index) => (
              <tr key={index} className="benefit-row" data-test-id={`Coverage-benefitRow-${index}`}>
                <td className="benefit-text" data-test-id={`Coverage-benefitText-${index}`}>{option}</td>
                <td className="benefit-checkbox-cell">
                  <input
                    type="checkbox"
                    className="benefit-checkbox"
                    checked={selectedOptions[option] || false}
                    onChange={() => handleChange(option)}
                    data-test-id={`Coverage-checkbox-${index}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="navigation-buttons" data-test-id="Coverage-navigation">
        <button
          className="nav-btn"
          onClick={() => navigate("/driver-information", { state: { selectedOptions } })}
          data-test-id="Coverage-backButton"
        >
          Back
        </button>
        <button
          className="nav-btn"
          onClick={() => navigate("/quote-summary", { state: { selectedOptions } })}
          data-test-id="Coverage-nextButton"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CoverageSelection;
