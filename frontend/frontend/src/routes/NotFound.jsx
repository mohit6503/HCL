// src/routes/NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", margin: 0 }}>404</h1>
      <h2 style={{ margin: 0 }}>Page Not Found</h2>
      <p>The page you are looking for doesn’t exist or has been moved.</p>

      <div style={{ display: "flex", gap: "0.75rem" }}>
        <Link
          to="/login"
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "999px",
            border: "none",
            background: "#2563eb",
            color: "white",
            textDecoration: "none",
          }}
        >
          Go to Login
        </Link>

        <Link
          to="/public-health"
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "999px",
            border: "1px solid #cbd5f5",
            textDecoration: "none",
          }}
        >
          Public Health Info
        </Link>
      </div>
    </div>
  );
}

export default NotFound;