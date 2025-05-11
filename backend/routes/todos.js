import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../controllers/todoController.js';

const router = express.Router();
router.use(verifyToken);
router.get('/', getTodos);
router.post('/', createTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
export default router;
