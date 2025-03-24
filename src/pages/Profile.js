import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();

  // User profile state
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });

  // Handle input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Save profile (In real apps, save to a backend)
  const handleSave = () => {
    alert("Profile updated successfully!");
    navigate("/dashboard"); // Navigate back after saving
  };

  return (
    <div className="profile-container">
    <h2>Manage Your Profile</h2>
    
    <div className="profile-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={profile.name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={profile.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input type="text" id="phone" name="phone" value={profile.phone} onChange={handleChange} />
      </div>

      <div className="button-group">
        <button onClick={handleSave}>Save Profile</button>
      </div>
      <br />
      <div className="button-group"></div>
        <button className="back-btn" onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
      </div>
    </div>
  
  );
};

export default Profile;
