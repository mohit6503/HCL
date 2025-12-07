// src/routes/PatientDashboard.jsx
import { useEffect, useState } from "react";
import api from "../api/api";
import { useAuth } from "../context/AuthContext.jsx";
import Sidebar from "../component/Layout/Sidebar.jsx";
import GoalTrackerForm from "../component/dashboard/GoalTrackerForm.jsx";
import HealthTipCard from "../component/dashboard/HealthTipCard.jsx";
import ReminderList from "../component/dashboard/ReminderList.jsx";

function PatientDashboard() {
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (!user) return;
    api.get(`/dashboard/patient/${user.userId}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [user, refreshKey]);

  const markGoal = async (status) => {
    try {
      await api.put("/patient/mark-goal", {
        logId: data.latestLog?._id,
        status,
      });
      setRefreshKey((k) => k + 1);
    } catch (err) {
      console.error(err);
      alert("Unable to update goal status");
    }
  };

  if (!user) return <div>Unauthorized</div>;
  if (!data) return <div>Loading...</div>;

  const latest = data.latestLog || {};

  return (
    <div className="app-layout">
      <Sidebar role="patient" />
      <main className="main-content">
        <h1>Welcome, {user.name}</h1>

        <section className="wellness-section">
          <h2>Wellness Goals</h2>
          <div className="goals-grid">
            <div className="goal-card">
              <h3>Steps</h3>
              <p>{latest.steps ?? 0} steps</p>
            </div>
            <div className="goal-card">
              <h3>Water</h3>
              <p>{latest.water ?? 0} glasses</p>
            </div>
            <div className="goal-card">
              <h3>Sleep</h3>
              <p>{latest.sleep ?? 0} hrs</p>
            </div>
          </div>
        </section>

        <section className="two-column">
          <div>
            <h2>Preventive Care Reminders</h2>
            <ReminderList reminders={data.reminders || []} />

            <h2>Health Tip of the Day</h2>
            <HealthTipCard tip={data.tip?.text || "Drink at least 8 glasses of water daily."} />

           <div style={{ marginTop: 16 }}>
              <h3>Doctor Notes</h3>

              {(!data.notes || data.notes.length === 0) ? (
                <p style={{ color: "#666", fontStyle: "italic" }}>
                  No message from doctor
                </p>
              ) : (
                data.notes.map((n) => (
                  <div key={n._id} className="card">
                    <p><strong>{n.doctorId?.name || "Doctor"}</strong></p>
                    <p>{n.note}</p>
                    <p style={{ fontSize: 12, color: "#666" }}>
                      {new Date(n.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))
              )}
            </div>

          </div>

          <div>
            <GoalTrackerForm onSaved={() => setRefreshKey((k) => k + 1)} />
            <div style={{ marginTop: 12 }}>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PatientDashboard;
