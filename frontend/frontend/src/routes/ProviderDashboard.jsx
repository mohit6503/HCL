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

  
  const fixedDummyPatients = [
    {
      patient: {
        id: "dummy-nike",
        name: "Nike",
      },
      latestLog: {
        goalStatus: "MET",
      },
      upcomingCheck: "Next Week",
    },
    {
      patient: {
        id: "dummy-mohit",
        name: "Mohit",
      },
      latestLog: {
        goalStatus: "PENDING",
      },
      upcomingCheck: "Tomorrow",
    }
  ];

  useEffect(() => {
    if (!user) return;

    async function loadDashboard() {
      try {
        setLoading(true);
        const res = await api.get(`/api/doctor/dashboard/${user.userId}`);

        console.log("Doctor dashboard data:", res.data);

        if (res.data.patients && res.data.patients.length > 0) {
         
          setPatients(res.data.patients);
        } else {
         
          setPatients(fixedDummyPatients);
        }

      } catch (err) {
        console.error("Error loading doctor dashboard:", err);

        setPatients(fixedDummyPatients);
        setError("Unable to load real patients. Showing demo patients.");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, [user]);

  if (!user) return <div>Unauthorized</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="app-layout">
      <Sidebar role="doctor" />

      <main className="main-content">
        <h1>My Patients</h1>

        {error && <p style={{ color: "orange" }}>{error}</p>}

        {patients.length === 0 ? (
          <p>No patients assigned.</p>
        ) : (
          <PatientList patients={patients} />
        )}
      </main>
    </div>
  );
}

export default ProviderDashboard;
