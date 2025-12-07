// src/routes/RegisterPage.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api.js";
import RegisterForm from "../component/auth/Registerfrom.jsx";

function RegisterPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleRegister = async (form) => {
    try {
      const payload = { ...form, role: form.role === "doctor" ? "DOCTOR" : "PATIENT" };
      const res = await api.post("/auth/register", payload);
      const roleLower = res.data.role?.toLowerCase() === "doctor" ? "doctor" : "patient";
      if (roleLower === "patient") navigate("/patient/dashboard");
      else navigate("/provider/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        <RegisterForm onRegister={handleRegister} />
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default RegisterPage;
