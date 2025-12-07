// src/components/dashboard/PatientList.jsx
function PatientList({ patients }) {
  return (
    <table className="patient-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Compliance</th>
          <th>Upcoming Check</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p) => (
          <tr key={p.patient._id ?? p.id}>
            <td>{p.patient?.name ?? p.name}</td>
            <td>{p.latestLog?.goalStatus ?? p.goalStatus ?? "—"}</td>
            <td>{p.upcomingCheck ?? "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PatientList;
