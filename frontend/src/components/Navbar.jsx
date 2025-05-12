import { Link } from 'react-router-dom';
import { getToken, removeToken, getRole } from '../auth';
import Home from '../pages/Home';

export default function Navbar() {
  const isLoggedIn = !!getToken();
  const role = getRole();

  return (
    <nav>
      {/* <Link to="/">Home</Link> */}
      {!isLoggedIn && (
        <Link to="/" style={{ textDecoration: 'none' }}>
          Home
        </Link>
      )}
      {!isLoggedIn && <Link to="/login">Login</Link>}
      {!isLoggedIn && <Link to="/register">Register</Link>}
      {role === 'admin' && <Link to="/dashboard">Dashboard</Link>}
      {role === 'admin' && <Link to="/admin">Admin</Link>}
      {role === 'admin' && <Link to="/todos">Todos</Link>}
      {isLoggedIn && (
        <button
          onClick={() => {
            removeToken();
            window.location.href = '/';
          }}
        >
          Logout
        </button>
      )}
    </nav>
  );
}
