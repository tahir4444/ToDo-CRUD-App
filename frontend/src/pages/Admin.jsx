import React, { useEffect, useState } from 'react';
import { getToken } from '../auth';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        });
        if (!res.ok) {
          const err = await res.text();
          throw new Error(err || 'Failed to fetch users');
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.username} ({user.role})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
