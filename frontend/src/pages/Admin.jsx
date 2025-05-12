import { useEffect, useState } from 'react';
import { getToken } from '../auth';

export default function Admin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/auth/users`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className="container">
      <h2>Admin Panel</h2>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.username} ({u.role})
          </li>
        ))}
      </ul>
    </div>
  );
}
