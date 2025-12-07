// src/routes/ProviderDashboard.jsx
import Sidebar from "../components/layout/Sidebar";

const dummyPatients = [
  { id: 1, name: "David", goalStatus: "Goal Met", upcomingCheck: "Blood test 23 Jun" },
  { id: 2, name: "Sarah", goalStatus: "Missed Preventive Check", upcomingCheck: "Dental check 5 Jul" },
];

function ProviderDashboard() {
  return (
    <div className="app-layout">
      <Sidebar role="provider" />
      <main className="main-content">
        <h1>My Patients</h1>

        <table className="patient-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Compliance</th>
              <th>Upcoming Check</th>
            </tr>
          </thead>
          <tbody>
            {dummyPatients.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.goalStatus}</td>
                <td>{p.upcomingCheck}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default ProviderDashboard;