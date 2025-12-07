

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import api from "../api/api.js";
import LoginForm from "../component/auth/LoginForm.jsx";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState("");

  const handleLogin = async ({ email, password, role }) => {
    try {
      const res = await api.post("/auth/login", { email, password });

      const backendRole = res.data.role?.toLowerCase() === "doctor" ? "doctor" : "patient";

      const userData = {
        name: res.data.name,
        email,
        role: backendRole,
        token: res.data.token,
        userId: res.data.userId,
      };

      login(userData);

      if (backendRole === "patient") navigate("/patient/dashboard");
      else navigate("/provider/dashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="logo-box">150 x 150</div>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <LoginForm onLogin={handleLogin} />

        <div className="auth-links">
          <p>New User? <Link to="/register">Register here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
