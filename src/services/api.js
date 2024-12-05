import axios from "axios";

const api = axios.create({
 
  baseURL: "https://obe-backend-3.onrender.com",
});

export default api;
