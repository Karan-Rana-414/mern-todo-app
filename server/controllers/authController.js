import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { validationResult } from 'express-validator';
export const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { name, email, password } = req.body;
        const alreadyExist = await User.findOne({ email });
        if (alreadyExist) return res.status(400).json({ message: 'Email already registered' });
        const hashedPass = await bcrypt.hash(password, 10)
        const user = await User.create({ name, email, password:hashedPass});
        res.status(201).json({
            message: 'User created successfully'
        });
    } catch (error) {
        next(error);
    }
};


export const login = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '6h' });
        res.status(200).json({
            message: "user logged in successfully",
            token
        });
    } catch (error) {
        next(error);
    }
};