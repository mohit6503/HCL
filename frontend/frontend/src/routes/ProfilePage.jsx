// src/routes/ProfilePage.jsx
import { useState, useEffect } from "react";
import api from "../api/api.js";
import { useAuth } from "../context/AuthContext.jsx";
import Sidebar from "../component/Layout/Sidebar.jsx";

function ProfilePage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!user) return;
    api.get(`/patient/profile/${user.userId}`)
      .then((res) => setProfile(res.data))
      .catch(() => {
        setProfile({ name: user.name, age: "", allergies: "", medications: "" });
      });
  }, [user]);

  const handleSave = async () => {
    try {
      await api.put("/patient/profile", { ...profile, patientId: user.userId });
      alert("Profile saved");
    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  if (!user) return <div>Unauthorized</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <div className="app-layout">
      <Sidebar role="patient" />
      <main className="main-content">
        <h1>My Profile</h1>
        <div className="card">
          <label>Name</label>
          <input name="name" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} />

          <label>Age</label>
          <input name="age" value={profile.age} onChange={(e) => setProfile({...profile, age: e.target.value})} />

          <label>Allergies</label>
          <textarea name="allergies" value={profile.allergies} onChange={(e) => setProfile({...profile, allergies: e.target.value})} />

          <label>Current Medications</label>
          <textarea name="medications" value={profile.medications} onChange={(e) => setProfile({...profile, medications: e.target.value})} />

          <button onClick={handleSave}>Save</button>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
