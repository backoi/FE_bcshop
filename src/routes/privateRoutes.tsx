import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("token"); // Kiểm tra token từ localStorage
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
