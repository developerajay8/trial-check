import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: [true, "please provide an email"] ,
        unique: true
    },
    password:{
        type: String,
        required: [true, "please provide an password"] 
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false 
    },
    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    verifyToken: String,
    verify
})