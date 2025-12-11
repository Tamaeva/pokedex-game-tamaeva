import axios from "axios";

const API_URL = "http://localhost:5000/api";

const Api = axios.create({
  basreUrl: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

Api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default Api;
