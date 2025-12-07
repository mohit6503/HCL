// src/components/dashboard/GoalTrackerForm.jsx
import { useState } from "react";
import api from "../../api/api";
import { useAuth } from "../../context/AuthContext";

function GoalTrackerForm({ onSaved }) {
  const { user } = useAuth();
  const [steps, setSteps] = useState("");
  const [water, setWater] = useState("");
  const [sleep, setSleep] = useState("");

  const saveLog = async () => {
    try {
      await api.post("/patient/log", {
        patientId: user.userId,
        date: new Date().toISOString().split("T")[0],
        steps: Number(steps || 0),
        water: Number(water || 0),
        sleep: Number(sleep || 0),
        notes: "",
      });
      if (onSaved) onSaved();
      alert("Log saved");
      setSteps(""); setWater(""); setSleep("");
    } catch (err) {
      console.error(err);
      alert("Error saving log");
    }
  };

  return ( 
    <div className="card">
      <h2>Log Today's Goals</h2>
      <div className="goal-form">
        <label>Steps</label>
        <input value={steps} onChange={(e) => setSteps(e.target.value)} placeholder="e.g., 5000" />

        <label>Water Intake (glasses)</label>
        <input value={water} onChange={(e) => setWater(e.target.value)} placeholder="e.g., 8" />

        <label>Sleep (hours)</label>
        <input value={sleep} onChange={(e) => setSleep(e.target.value)} placeholder="e.g., 7.5" />

        <button type="button" onClick={saveLog}>Save</button>
      </div>
    </div>
  );
}

export default GoalTrackerForm;
