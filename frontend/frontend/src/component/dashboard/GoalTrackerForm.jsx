// src/components/dashboard/GoalTrackerForm.jsx
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

export default GoalTrackerForm;