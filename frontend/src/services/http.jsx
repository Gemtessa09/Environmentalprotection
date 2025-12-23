import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL
  ? `${process.env.REACT_APP_API_URL.replace(/\/$/, "")}/api`
  : "/api";

const api = axios.create({
  baseURL,
  timeout: 15000,
});

api.interceptors.request.use((config) => {
  const apiKey = window.localStorage.getItem("hec_api_key");
  if (apiKey) {
    config.headers["x-api-key"] = apiKey;
  }
  return config;
});

export default api;
