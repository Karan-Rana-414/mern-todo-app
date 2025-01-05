import express from 'express';
import cors from 'cors';
import { dbConnection } from './config/dbConnection.js';
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/auth',authRoutes);
app.use('/api/todos',todoRoutes)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ message: err.message || 'internal Server Error' });
  });
  
dotenv.config();

const PORT = process.env.PORT;
dbConnection();
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})

