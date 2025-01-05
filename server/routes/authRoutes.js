import express from 'express'
import { body } from 'express-validator';
import { signup, login } from '../controllers/authController.js';
const router = express.Router();

router.post('/signup',
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').isLength({ min: 4 }).withMessage('Password must be at least 4 characters long'),
  signup
);

router.post('/login',
  body('email').isEmail().withMessage('Valid email is required'),
  body('password').notEmpty().withMessage('Password is required'),
  login
);

export default router;