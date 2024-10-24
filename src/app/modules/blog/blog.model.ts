import { Schema, model, Types } from "mongoose";

// Define the blog schema
const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    likes: {
      type: [Types.ObjectId],
      ref: "Like", // assuming likes are from users
      default: [], // defaults to an empty array
    },
    comments: {
      type: [Types.ObjectId],
      ref: "Comment", // assuming comments have their own schema
      default: [], // defaults to an empty array
    },
    views: {
      type: [Types.ObjectId],
      ref: "User", // assuming views are from users
      default: [], // defaults to an empty array
    },
  },
  { timestamps: true }
);

// Create the model from the schema
export const Blog = model("Blog", BlogSchema);
