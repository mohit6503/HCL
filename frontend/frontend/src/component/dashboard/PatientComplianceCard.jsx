// src/components/dashboard/PatientComplianceCard.jsx
function PatientComplianceCard({ name, status, upcoming }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Compliance: {status}</p>
      <p>Next check: {upcoming}</p>
    </div>
  );
}

export default PatientComplianceCard;
