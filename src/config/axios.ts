import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3003/api"; // For Vite
// Tạo instance cho axiosPrivate (dành cho các request cần authentication)
export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});

// Tạo instance cho axiosPublic (dành cho các request không cần authentication)
export const axiosPublic = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
  timeout: 10000,
});

// Hàm cập nhật Authorization token
export const setAuthToken = (token: string | null) => {
  if (token) {
    axiosPrivate.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axiosPrivate.defaults.headers.common["Authorization"];
  }
};

// Thêm Interceptors vào axiosPrivate
axiosPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error.response.data)
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error.response.data);
  }
);

// Thêm Interceptors vào axiosPublic
axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error.response.data);
  }
);
