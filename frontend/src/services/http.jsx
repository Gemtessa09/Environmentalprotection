import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL
  ? `${process.env.REACT_APP_API_URL.replace(/\/$/, "")}/api`
  : "/api";

const api = axios.create({
  baseURL,
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
