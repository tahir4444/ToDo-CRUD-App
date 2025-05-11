import Todo from '../models/Todo.js';

export const getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
};

export const createTodo = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    completed: false,
    userId: req.user.id,
  });
  await todo.save();
  res.status(201).json(todo);
};

export const updateTodo = async (req, res) => {
  const updated = await Todo.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

export const deleteTodo = async (req, res) => {
  await Todo.findOneAndDelete({
    _id: req.params.id,
    userId: req.user.id,
  });
  res.sendStatus(204);
};
