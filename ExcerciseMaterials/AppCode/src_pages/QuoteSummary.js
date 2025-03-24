import { useNavigate } from "react-router-dom";

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
    <div className="quote-summary-container" data-test-id="QuoteSummary-container">
      <h2 data-test-id="QuoteSummary-heading">Your Quote</h2>
      <p data-test-id="QuoteSummary-quoteNumber">Quote number: {dummyQuote.quoteNumber}</p>

      <div className="quote-box" data-test-id="QuoteSummary-quoteBox">
        <span className="price" data-test-id="QuoteSummary-price">{dummyQuote.price}</span>
        <span style={{ margin: "0 15px" }}></span>
        <select data-test-id="QuoteSummary-frequencySelect">
          <option>{dummyQuote.frequency}</option>
        </select>
        <br /><br />
        <button data-test-id="QuoteSummary-emailButton">Email Quote</button>
      </div>

      <h3 data-test-id="QuoteSummary-coverageHeading">See what’s covered</h3>

      <div className="benefits-box" style={{ textAlign: "left", padding: "15px", border: "1px solid #ccc" }} data-test-id="QuoteSummary-benefitsBox">
        {dummyQuote.benefits.map((benefit, index) => (
          <div
            key={index}
            className="benefit-item"
            style={{ display: "flex", justifyContent: "space-between" }}
            data-test-id={`QuoteSummary-benefit-${index}`}
          >
            <span>{benefit}</span>
            <span className="tick-mark">✔</span>
          </div>
        ))}
      </div>

      <div className="navigation-buttons" style={{ marginTop: "20px" }} data-test-id="QuoteSummary-navigation">
        <button
          style={{ marginBottom: "10px" }}
          onClick={() => navigate("/coverage-selection")}
          data-test-id="QuoteSummary-backButton"
        >
          Back
        </button>
        <button
          onClick={() => navigate("/policy-application")}
          data-test-id="QuoteSummary-proceedButton"
        >
          Proceed to Application
        </button>
      </div>
    </div>
  );
};

export default QuoteSummary;
