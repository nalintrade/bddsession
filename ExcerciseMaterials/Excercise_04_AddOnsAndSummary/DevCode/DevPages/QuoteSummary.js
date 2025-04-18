import { useNavigate } from "react-router-dom";
import React from 'react';

const QuoteSummary = () => {
  const navigate = useNavigate();

  const dummyQuote = {
    quoteNumber: "QTE58001299849",
    price: "$31.66",
    frequency: "Per fortnight",
    benefits: [
      "Theft of your car",
      "Accidental damage to windscreens and windows",
      "Fire damage to your car",
      "Accidental damage caused by flood or storm",
      "Vandalism of your car",
      "Guarantee on repairs by our preferred repairers for covered claims",
      "Damage caused by uninsured drivers of another vehicle",
      "Damaging someone else's car or property (up to $20 million)",
      "Injuries you cause when using your car (up to $5 million)",
      "New car replacement if your car is written off",
      "Transport home if your car is stolen or damaged",
      "Replacement keys and locks",
      "Children’s car seats",
      "Towing"
    ]
  };

  return (
    <div className="quote-summary-container" data-testid="QuoteSummary-container">
      <h2 data-testid="QuoteSummary-heading">Your Quote</h2>
      <p data-testid="QuoteSummary-quoteNumber">Quote number: {dummyQuote.quoteNumber}</p>

      <div className="quote-box" data-testid="QuoteSummary-quoteBox">
        <span className="price" data-testid="QuoteSummary-price">{dummyQuote.price}</span>
        <span style={{ margin: "0 15px" }}></span>
        <select data-testid="QuoteSummary-frequencySelect">
          <option>{dummyQuote.frequency}</option>
        </select>
        <br /><br />
        <button data-testid="QuoteSummary-emailButton">Email Quote</button>
      </div>

      <h3 data-testid="QuoteSummary-coverageHeading">See what’s covered</h3>

      <div className="benefits-box" style={{ textAlign: "left", padding: "15px", border: "1px solid #ccc" }} data-testid="QuoteSummary-benefitsBox">
        {dummyQuote.benefits.map((benefit, index) => (
          <div
            key={index}
            className="benefit-item"
            style={{ display: "flex", justifyContent: "space-between" }}
            data-testid={`QuoteSummary-benefit-${index}`}
          >
            <span>{benefit}</span>
            <span className="tick-mark">✔</span>
          </div>
        ))}
      </div>

      <div className="navigation-buttons" style={{ marginTop: "20px" }} data-testid="QuoteSummary-navigation">
        <button
          style={{ marginBottom: "10px" }}
          onClick={() => navigate("/coverage-selection")}
          data-testid="QuoteSummary-backButton"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/policy-application")}
          data-testid="QuoteSummary-proceedButton"
        >
          Proceed to Application
        </button>
      </div>
    </div>
  );
};

export default QuoteSummary;
