import { Navigate } from 'react-router-dom';
import { getToken, getRole } from '../auth';

export default function PrivateRoute({ children, role }) {
  const token = getToken();
  const userRole = getRole();
  if (!token) return <Navigate to="/login" />;
  if (role && userRole !== role) return <Navigate to="/" />;
  return children;
}
