import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, username, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = new User({ name, username, email, password: hashed, role });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch {
    res.status(400).json({ error: 'Username already exists' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRATION }
  );
  res.json({ token });
};
