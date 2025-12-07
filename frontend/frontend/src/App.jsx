// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import PatientDashboard from "./routes/PatientDashboard";
import ProviderDashboard from "./routes/ProviderDashboard";
import PublicHealthPage from "./routes/PublicHealthPage";
import ProfilePage from "./routes/ProfilePage";
import NotFound from "./routes/NotFound";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/public-health" element={<PublicHealthPage />} />

          {/* Patient routes */}
          <Route
            path="/patient/dashboard"
            element={
              <ProtectedRoute allowedRoles={["patient"]}>
                <PatientDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patient/profile"
            element={
              <ProtectedRoute allowedRoles={["patient"]}>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* Provider routes */}
          <Route
            path="/provider/dashboard"
            element={
              <ProtectedRoute allowedRoles={["provider"]}>
                <ProviderDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;