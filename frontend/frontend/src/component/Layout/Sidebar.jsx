// src/components/layout/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar({ role }) {
  const { logout } = useAuth();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname.startsWith(path) ? "active-link" : "";

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Health Portal</div>

      {role === "patient" && (
        <nav>
          <Link className={isActive("/patient/dashboard")} to="/patient/dashboard">
            Dashboard
          </Link>
          <Link className={isActive("/patient/profile")} to="/patient/profile">
            My Profile
          </Link>
          <Link className={isActive("/public-health")} to="/public-health">
            Health Info
          </Link>
        </nav>
      )}

      {role === "provider" && (
        <nav>
          <Link className={isActive("/provider/dashboard")} to="/provider/dashboard">
            Patient Overview
          </Link>
          <Link className={isActive("/public-health")} to="/public-health">
            Health Info
          </Link>
        </nav>
      )}

      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;