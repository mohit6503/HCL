import { useEffect, useState } from "react";
import api from "../api/api.js";
import { useAuth } from "../context/AuthContext.jsx";
import Sidebar from "../component/Layout/Sidebar.jsx";
import PatientList from "../component/dashboard/PatientList.jsx";

function ProviderDashboard() {
  const { user } = useAuth();
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;

    async function loadDashboard() {
      try {
        setLoading(true);
        const res = await api.get(`/api/doctor/dashboard/${user.userId}`);

        console.log("Doctor dashboard data:", res.data);

        setPatients(res.data.patients || []);
      } catch (err) {
        console.error("Error loading doctor dashboard:", err);
        setError("Unable to load patients. Check backend.");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, [user]);

  if (!user) return <div>Unauthorized</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div className="app-layout">
      <Sidebar role="doctor" />

      <main className="main-content">
        <h1>My Patients</h1>

        {patients.length === 0 ? (
          <p>No patients assigned yet.</p>
        ) : (
          <PatientList patients={patients} />
        )}
      </main>
    </div>
  );
}

export default ProviderDashboard;
