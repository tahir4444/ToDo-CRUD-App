import User from '../models/User.js';

export const getUsers = async (req, res) => {
  const users = await User.find({}, '-password');
  res.json(users);
};
// export const getUser = async (req, res) => {
//   const user = await User.findById(req.params.id, '-password');
//   if (!user) return res.status(404).json({ error: 'User not found' });
