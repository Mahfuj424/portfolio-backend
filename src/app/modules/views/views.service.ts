import { Blog } from "../blog/blog.model";
import { Views } from "./views.model";

const createViewsIntoDB = async (userId: string, blogId: string) => {
  // Check if the user has already viewed the blog
  const existingViewer = await Views.findOne({ user: userId, blog: blogId });

  if (existingViewer) {
    throw new Error("User has already viewed this blog");
  }

  // Create a new view entry
  const newViews = await Views.create({ user: userId }); // Here userId is used to create a view

  // Update the blog to include the new view
  await Blog.findByIdAndUpdate(blogId, {
    $push: { views: newViews?._id },
  });

  return newViews;
};

export const ViewsServices = {
  createViewsIntoDB,
};
