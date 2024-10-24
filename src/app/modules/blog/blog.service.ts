import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

// Create a new blog post
const createBlogIntoDB = async (payload: IBlog) => {
  const newBlog = await Blog.create(payload);
  return newBlog;
};

// Get all blogs or filter by category
const getAllBlogs = async () => {
  const blogs = await Blog.find();
  return blogs;
};

// Get a blog by ID
const getBlogById = async (blogId: string) => {
  const blog = await Blog.findById(blogId);
  return blog;
};

// Update a blog by ID
const updateBlogById = async (blogId: string, payload: Partial<IBlog>) => {
  const updatedBlog = await Blog.findByIdAndUpdate(blogId, payload, {
    new: true,
  });
  return updatedBlog;
};

// Delete a blog by ID
const deleteBlogById = async (blogId: string) => {
  const deletedBlog = await Blog.findByIdAndDelete(blogId);
  return deletedBlog;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
