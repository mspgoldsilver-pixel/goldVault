import { Navigate, Outlet } from "react-router-dom";

type JwtPayload = {
  role: string;
  email: string;
  exp: number;
  iat: number;
};

const decodeToken = (token: string): JwtPayload | null => {
  try {
    const base64Payload = token.split(".")[1];
    const decoded = JSON.parse(atob(base64Payload)) as JwtPayload;
    return decoded;
  } catch {
    return null;
  }
};

const AdminProtectedRoute = () => {
  const token =
    localStorage.getItem("admin_token") ||
    sessionStorage.getItem("admin_token");

  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  const payload = decodeToken(token);

  // ❌ Token corrupt or invalid
  if (!payload) {
    return <Navigate to="/admin/login" replace />;
  }

  // ❌ Not an admin user
  if (payload.role !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }

  // ✔ Token valid + user is admin
  return <Outlet />;
};

export default AdminProtectedRoute;
