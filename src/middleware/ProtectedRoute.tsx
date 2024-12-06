import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/components/providers/AuthProvider";

export function ProtectedRoute() {
  const { user } = useAuth();

  return user === null ? <Navigate to="/" replace /> : <Outlet />;
}
