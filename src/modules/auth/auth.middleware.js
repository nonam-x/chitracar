import { boolean, date, string, types } from "joi";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user: {
    types: String,
    required: [, "name is required"],
    minlenght: 2,
    maxlenght: 20,
    trim: true,
  },
  email: {
    types: String,
    required: [, "email is required"],
    trim: true,
    unique: true,
    lowercase: true,
  },

  password: {
    types: String,
    required: [, "pasword is required"],
    minlenght: 6,
    maxlenght: 50,
    select: false,
    trim: true,
  },

  role: {
    type: String,
    enum: ["customer", "admin", "seller"],
    default: "customer",
  },
  isVarified: {
    types: boolean,
    default: false,
  },

  varificationToken: {
    type: String,
    select: false,
  },
  resetPasswordToken: {
    type: String,
    select: false,
  },
  refreshToken: {
    type: String,
    select: false,
  },
  resetPasswordExpires: {
    type: date,
    select: false,
  },
},{timestamps:true});

export default mongoose.model("User", userSchema);
