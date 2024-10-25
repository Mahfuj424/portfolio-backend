import { Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  // Add other fields if necessary
}
