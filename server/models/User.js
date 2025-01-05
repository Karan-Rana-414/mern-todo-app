import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true

    },
    password: {
        type: String,
        required: true,
        select: false,
        minlength: 4
    }
})

const User = mongoose.model('user',userSchema);
export default User;