import express from 'express';
import { fetchUsers } from '../controllers/userController.js';
import { addUser } from '../controllers/userController.js';

const router = express.Router();

// Routes
router.get('/', fetchUsers);
router.post('/', addUser);

export default router;
