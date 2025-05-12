import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Todos from './pages/Todos';
import Admin from './pages/Admin';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute role="admin">
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRoute role="admin">
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="/todos"
          element={
            <PrivateRoute role="admin">
              <Todos />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
