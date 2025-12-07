// // src/context/AuthContext.jsx
// import { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null); // { name, email, role, token, userId }

//   useEffect(() => {
//     const stored = localStorage.getItem("auth");
//     if (stored) {
//       try {
//         setUser(JSON.parse(stored));
//       } catch {
//         localStorage.removeItem("auth");
//       }
//     }
//   }, []);

//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem("auth", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("auth");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export default function useAuth() {
//   return useContext(AuthContext);
// }


import { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }
    setError("");

    onLogin({ email, password, role });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">

      {error && <p className="error">{error}</p>}

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <label>Role</label>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="patient">Patient</option>
        <option value="doctor">Doctor</option>
      </select>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
