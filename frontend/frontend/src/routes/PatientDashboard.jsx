// src/routes/PatientDashboard.jsx
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/layout/Sidebar";

const dummyGoals = {
  steps: { current: 3620, target: 8000 },
  activeMinutes: { current: 56, target: 60 },
  sleep: { current: 6.5, target: 8 },
};

const dummyReminders = [
  {
    id: 1,
    text: "Upcoming: Annual blood test on 23rd June 2025",
  },
];

const healthTip =
  "Stay hydrated! Aim to drink at least 8 glasses of water per day.";

function PatientDashboard() {
  const { user } = useAuth();

  return (
    <div className="app-layout">
      <Sidebar role="patient" />

      <main className="main-content">
        <h1>Welcome, {user?.name || "Patient"}</h1>

        <section className="wellness-section">
          <h2>Wellness Goals</h2>
          <div className="goals-grid">
            <GoalCard
              title="Steps"
              value={`${dummyGoals.steps.current} / ${dummyGoals.steps.target} steps`}
              percent={(dummyGoals.steps.current / dummyGoals.steps.target) * 100}
            />
            <GoalCard
              title="Active Time"
              value={`${dummyGoals.activeMinutes.current} / ${dummyGoals.activeMinutes.target} mins`}
              percent={
                (dummyGoals.activeMinutes.current /
                  dummyGoals.activeMinutes.target) *
                100
              }
            />
            <GoalCard
              title="Sleep"
              value={`${dummyGoals.sleep.current} / ${dummyGoals.sleep.target} hrs`}
              percent={(dummyGoals.sleep.current / dummyGoals.sleep.target) * 100}
            />
          </div>
        </section>

        <section className="two-column">
          <div>
            <h2>Preventive Care Reminders</h2>
            <ul className="reminder-list">
              {dummyReminders.map((r) => (
                <li key={r.id}>{r.text}</li>
              ))}
            </ul>

            <h2>Health Tip of the Day</h2>
            <p className="health-tip">{healthTip}</p>
          </div>

          <div>
            <GoalTrackerForm />
          </div>
        </section>
      </main>
    </div>
  );
}

function GoalCard({ title, value, percent }) {
  return (
    <div className="goal-card">
      <h3>{title}</h3>
      <p>{value}</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${Math.min(percent, 100)}%` }}
        />
      </div>
    </div>
  );
}

// simple form to let patient log daily metrics
function GoalTrackerForm() {
  return (
    <div className="card">
      <h2>Log Today's Goals</h2>
      <form className="goal-form">
        <label>Steps</label>
        <input placeholder="e.g., 5000" />

        <label>Water Intake (glasses)</label>
        <input placeholder="e.g., 8" />

        <label>Sleep (hours)</label>
        <input placeholder="e.g., 7.5" />

        <button type="button">Save (dummy)</button>
      </form>
    </div>
  );
}

export default PatientDashboard;