import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRoles }) {
  // Example:
  // const { user } = useAuth();
  // user = { role: "admin" }

  const token = localStorage.getItem("token");

  const user = JSON.parse(localStorage.getItem("user"));

  // User is not logged in
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // User role is not allowed
  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  // User is authorized
  return <Outlet />;
}