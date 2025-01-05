import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,

    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
});


const Todo = mongoose.model('Todo',todoSchema);
export default Todo;
