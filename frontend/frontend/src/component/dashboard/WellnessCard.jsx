// src/components/dashboard/WellnessCard.jsx
function WellnessCard({ title, value, percent }) {
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

export default WellnessCard;