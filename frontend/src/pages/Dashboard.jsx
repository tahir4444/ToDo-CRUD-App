import { useState, useEffect } from 'react';
import { getToken } from '../auth';

export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const fetchTodos = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ text }),
    });
    setText('');
    fetchTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`${import.meta.env.VITE_API_URL}/todos/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h2>My ToDos</h2>
      <input
        placeholder="New todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
