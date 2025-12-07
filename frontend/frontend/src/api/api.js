// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

api.interceptors.request.use((config) => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    try {
      const { token } = JSON.parse(auth);
      if (token) config.headers.Authorization = `Bearer ${token}`;
    } catch {}
  }
  return config;
});

export default api;
