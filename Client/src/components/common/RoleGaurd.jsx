import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext";

const RoleGaurd = ({ role }) => {
  const { isAuthenticated, user } = useAuth();

  if(!isAuthenticated || !user) return <Navigate to="/login" replace />
  if(user.role !== role) return <Navigate to="/" replace />

  return <Outlet />;
}

export default RoleGaurd
