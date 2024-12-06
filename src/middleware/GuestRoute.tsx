import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/components/providers/AuthProvider";

export function GuestRoute() {
  const { user } = useAuth();

  return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
}
