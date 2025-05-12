import { useState, useEffect } from 'react';
import { getToken } from '../auth';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const fetchTodos = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    const data = await res.json();

    console.log('Todos:', data);

    setTodos(data);
  };

  const addTodo = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ title, description }),
    });
    setTitle('');
    setDescription('');
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
        name="title"
        type="text"
        placeholder="New todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        name="description"
        type="text"
        placeholder="New Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <div className="title">
              <h3>{todo.title}</h3>
            </div>
            <br />
            <p>{todo.description}</p>
            <p> ({todo.completed ? 'Completed' : 'Pending'})</p>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
