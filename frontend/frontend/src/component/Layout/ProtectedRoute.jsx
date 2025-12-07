// src/components/layout/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    const redirect = user.role === "patient" ? "/patient/dashboard" : "/provider/dashboard";
    return <Navigate to={redirect} replace />;
  }

  return children;
}

export default ProtectedRoute;
