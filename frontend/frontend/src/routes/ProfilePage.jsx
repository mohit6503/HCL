// src/routes/ProfilePage.jsx
import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";

function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "David",
    age: 28,
    allergies: "Peanuts",
    medications: "Vitamin D",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((p) => ({ ...p, [name]: value }));
  };

  const handleSave = () => {
    // TODO: call PUT /api/patient/profile
    alert("Profile saved (dummy).");
  };

  return (
    <div className="app-layout">
      <Sidebar role="patient" />
      <main className="main-content">
        <h1>My Profile</h1>
        <div className="card">
          <label>Name</label>
          <input name="name" value={profile.name} onChange={handleChange} />

          <label>Age</label>
          <input name="age" value={profile.age} onChange={handleChange} />

          <label>Allergies</label>
          <textarea
            name="allergies"
            value={profile.allergies}
            onChange={handleChange}
          />

          <label>Current Medications</label>
          <textarea
            name="medications"
            value={profile.medications}
            onChange={handleChange}
          />

          <button onClick={handleSave}>Save</button>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;