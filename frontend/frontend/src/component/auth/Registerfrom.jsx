// src/components/auth/RegisterForm.jsx
import { useState } from "react";

function RegisterForm({ onRegister }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "patient",
    consent: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) {
      setError("You must agree to data usage and privacy policy.");
      return;
    }
    setError("");
    onRegister(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}

      <label>Name</label>
      <input name="name" value={form.name} onChange={handleChange} />

      <label>Email</label>
      <input name="email" value={form.email} onChange={handleChange} />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <label>Role</label>
      <select name="role" value={form.role} onChange={handleChange}>
        <option value="patient">Patient</option>
        <option value="doctor">Healthcare Provider</option>
      </select>

      <label className="checkbox-row">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={handleChange}
        />
        I agree to the data usage and healthcare privacy policy.
      </label>

      <button type="submit">Create Account</button>
    </form>
  );
}

export default RegisterForm;
