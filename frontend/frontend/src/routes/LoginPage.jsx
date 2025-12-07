// src/routes/LoginPage.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // simple toggle
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: replace with real API call
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    // fake auth response
    const fakeToken = "dummy-jwt-token";
    login({ email, role, token: fakeToken, name: "David" });

    if (role === "patient") navigate("/patient/dashboard");
    else navigate("/provider/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Logo placeholder */}
        <div className="logo-box">150 x 150</div>
        <h2>Login</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="patient">Patient</option>
            <option value="provider">Healthcare Provider</option>
          </select>

          <button type="submit">Login</button>
        </form>

        <div className="auth-links">
          <button className="link-button" type="button">
            Forgot Password?
          </button>
          <p>
            New User? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;