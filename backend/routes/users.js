import express from 'express';
import { verifyToken, isAdmin } from '../middleware/auth.js';
import { getUsers } from '../controllers/userController.js';

const router = express.Router();
router.get('/', verifyToken, isAdmin, getUsers);
export default router;
// This code defines a route for getting a list of users. It uses middleware to verify the token and check if the user is an admin before allowing access to the route. The `getUsers` controller function is responsible for fetching the users from the database and sending them in the response.
