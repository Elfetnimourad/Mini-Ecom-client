import { Navigate, Outlet } from "react-router-dom";
import { useCart } from "../context/Context";

export default function ProtectedRoute({ allowedRoles }) {
  // Example:
  const { userData } = useCart();
  

  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  const user = JSON.parse(localStorage.getItem("user"));

  // User is not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // User role is not allowed
  if (!allowedRoles.includes(userData?.role)) {
    return <Navigate to="/admin" replace />;
  }

  // User is authorized
  return <Outlet />;
}