
// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const PolicyApplication = () => {
    const navigate = useNavigate();
  return (
    // <div className="policy-application-container">
    //   <h2>Policy Application Form</h2>
    //     <br/>
    //     <div className="button-group"></div>
    //     <button className="back-btn" onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
    //     </div>
    // </div>


    <div className="policy-application-container">
    <h2>Proceed to policy application</h2>
    <h3>Under construction</h3>
     <div className="policy-application-container">
       <h2>Policy Application Form</h2>
       <div className="button-group"></div>
       <button className="back-btn" onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
     </div>
    </div>

  );
};

export default  PolicyApplication ;