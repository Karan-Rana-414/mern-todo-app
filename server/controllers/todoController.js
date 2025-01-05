import Todo from '../models/Todo.js';
import { validationResult } from 'express-validator';

export const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const addTodo = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { name, description, completed } = req.body;
    const todo = await Todo.create({ name, description, completed, user: req.user.id });
    res.status(201).json(todo);
  } catch (error) {
    console.log(req.body,"body")
    console.log("err",error);
    next(error);
  }
};

export const updateTodo = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { id } = req.params;
    const { name, description, completed } = req.body;
    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { name, description, completed },
      { new: true, runValidators: true }
    );

    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { id } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: id, user: req.user.id });
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    next(error);
  }
};