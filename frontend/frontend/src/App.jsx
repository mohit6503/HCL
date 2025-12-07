// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./routes/LoginPage.jsx";
import RegisterPage from "./routes/RegisterPage.jsx";
import PatientDashboard from "./routes/PatientDashboard.jsx";
import ProviderDashboard from "./routes/ProviderDashboard.jsx";
import PublicHealthPage from "./routes/PublicHealthPage.jsx";
import ProfilePage from "./routes/ProfilePage.jsx";
import NotFound from "./routes/NotFound.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./component/Layout/ProtectedRoute.jsx";
import HomePage from "./routes/HomePage.jsx";


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/public-health" element={<PublicHealthPage />} />

          <Route path="/patient/dashboard" element={
            <ProtectedRoute allowedRoles={["patient"]}><PatientDashboard /></ProtectedRoute>
          } />
          <Route path="/patient/profile" element={
            <ProtectedRoute allowedRoles={["patient"]}><ProfilePage /></ProtectedRoute>
          } />

          <Route path="/provider/dashboard" element={
            <ProtectedRoute allowedRoles={["doctor"]}><ProviderDashboard /></ProtectedRoute>
          } />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
