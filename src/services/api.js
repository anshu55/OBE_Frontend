import axios from "axios";

const api = axios.create({
  //baseURL: "http://localhost:5000", // Base URL for the backend
  baseURL: "https://obe-backend-m45d-m1rrd745t-akankshas-projects-ed18bffa.vercel.app/",
});

export default api;
