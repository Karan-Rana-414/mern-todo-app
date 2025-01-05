import express from 'express';
import { body, param } from 'express-validator';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../controllers/todoController.js';
import authenticate from '../middleware/authenticat.js';

const router = express.Router();

router.get('/', authenticate, getTodos);
router.post('/', authenticate,
  body('name').notEmpty().withMessage('to-do item name should not be empty'),
  addTodo
);
router.put('/:id', authenticate,
  param('id').isMongoId().withMessage('Valid Todo Id is required'),
  body('name').optional().notEmpty().withMessage('Name cannot be empty'),
  updateTodo
);
router.delete('/:id', authenticate,
  param('id').isMongoId().withMessage('Valid Todo Id is required here'),
  deleteTodo
);

export default router;