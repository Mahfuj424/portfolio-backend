import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema: Schema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

// Create the User model
export const User = mongoose.model<IUser>("User", userSchema);
